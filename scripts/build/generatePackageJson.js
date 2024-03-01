import { promises as fs } from 'fs'
import _ from 'lodash'

const distPackageExtraProps = {
  bugs: {
    url: 'https://github.com/MTES-MCT/monitor-ui/issues'
  },
  exports: {
    '.': './index.js',
    './assets/': './assets/',
    './cypress': './cypress/index.js',
    './cypress/': './cypress/'
  },
  homepage: 'https://mtes-mct.github.io/monitor-ui/',
  name: '@mtes-mct/monitor-ui',
  publishConfig: {
    access: 'public',
    tag: 'latest'
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/MTES-MCT/monitor-ui.git'
  },
  sideEffects: false,
  types: './index.d.ts'
}

;(async () => {
  const rootPackageJson = await fs.readFile('./package.json', 'utf-8')
  const rootPackage = JSON.parse(rootPackageJson)
  const distPackage = {
    ..._.omit(rootPackage, [
      '//',
      'devDependencies',
      'lint-staged',
      'main',
      'packageManager',
      'prettier',
      'private',
      'release',
      'scripts',
      'workspaces'
    ]),
    ...distPackageExtraProps
  }
  const distPackageJson = JSON.stringify(distPackage, null, 2)

  await fs.writeFile('./dist/package.json', distPackageJson, 'utf-8')
})()
