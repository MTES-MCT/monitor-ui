import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Clock({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Clock" transform="translate(240 -41)">
          <g data-name="Groupe 4139" id="Groupe_4139">
            <g data-name="Tracé 1366" fill="none" id="Tracé_1366" strokeMiterlimit="10">
              <path
                d="M-230,42a9,9,0,0,0-9,9,9,9,0,0,0,9,9,9,9,0,0,0,9-9A9,9,0,0,0-230,42Zm0,16a7,7,0,0,1-7-7,7,7,0,0,1,7-7,7,7,0,0,1,7,7A7,7,0,0,1-230,58Z"
                stroke="none"
              />
              <path
                d="M -230 42 C -225.0290069580078 42 -221 46.02899932861328 -221 51 C -221 55.97100067138672 -225.0290069580078 60 -230 60 C -234.9709930419922 60 -239 55.97100067138672 -239 51 C -239 46.02899932861328 -234.9709930419922 42 -230 42 Z M -230 58 C -226.1340026855469 58 -223 54.86600112915039 -223 51 C -223 47.13399887084961 -226.1340026855469 44 -230 44 C -233.8659973144531 44 -237 47.13399887084961 -237 51 C -237 54.86600112915039 -233.8659973144531 58 -230 58 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
            <g data-name="Tracé 1367" fill="none" id="Tracé_1367" strokeMiterlimit="10">
              <path d="M-229,50V46h-2v6h6V50Z" stroke="none" />
              <path
                d="M -225 52 L -231 52 L -231 46 L -229 46 L -229 50 L -225 50 L -225 52 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
          </g>
          <rect
            data-name="Rectangle 6105"
            fill="none"
            height="20"
            id="Rectangle_6105"
            transform="translate(-240 41)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
