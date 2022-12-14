import glob from 'glob'
import { promises as fs } from 'fs'

const getIconNameFromIconPath = svgIconPath => /([^/]+)\.svg$/.exec(svgIconPath)[1]

async function generateIcon({ count, index, svgIconPath, template }) {
  const iconName = getIconNameFromIconPath(svgIconPath)
  console.log(`Generating icons: [${index + 1}/${count}] Converting ${iconName}.svg to ${iconName}.tsx…`)

  const svgIconSource = await fs.readFile(svgIconPath, 'utf-8')
  const svgIconWithCurrentColor = svgIconSource.replace(/#707785/g, 'currentColor')
  const svgIconSourceWithoutExtraneousProps = svgIconWithCurrentColor
    .replace(/ (xlink|xmlns)[^ ]+"/g, '')
    .replace(/ data-name="[^"]*"/g, '')
    .replace(/ id="[^"]*"/g, '')
  const svgIconSourceWithProps = svgIconSourceWithoutExtraneousProps.replace(/>/, ` {...nativeProps}>`)
  const tsxIconSource = template
    .replace(/\/\*ICON_NAME\*\//g, iconName)
    .replace(/\/\*ICON_SVG_SOURCE\*\//g, svgIconSourceWithProps)

  await fs.writeFile(`./src/icons/${iconName}.tsx`, tsxIconSource, 'utf-8')
}

;(async () => {
  console.log('Generating icons: Fetching files…')

  const template = await fs.readFile('./scripts/icons/iconTemplate.tsxt', 'utf-8')
  const svgIconPaths = glob.sync('./src/assets/icons/*.svg')
  const count = svgIconPaths.length
  const indexCeiling = count - 1
  let index = -1

  while (++index < count) {
    const svgIconPath = svgIconPaths[index]

    await generateIcon({
      count,
      index,
      svgIconPath,
      template
    })
  }

  console.log('Icons generated.')

  console.log('Generating icons index…')

  const iconNames = svgIconPaths.map(getIconNameFromIconPath)
  const tsIconsIndexSource = [
    iconNames.map(iconName => `import { ${iconName} } from './${iconName}'`).join('\n'),
    'export {',
    iconNames.map(iconName => `  ${iconName},`).join('\n'),
    '}'
  ].join('\n')

  await fs.writeFile('./src/icons/index.tsx', tsIconsIndexSource, 'utf-8')

  console.log('Icons index generated.')

  process.exit()
})()
