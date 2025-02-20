import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function VesselList({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <path d="M-160,286h20v20h-20Z" fill="none" transform="translate(160 -286)" />
        <g transform="translate(160 -286)">
          <rect fill="currentColor" height="2" transform="translate(-158 288)" width="16" />
          <path
            d="M-148.6,304.992a.162.162,0,0,1-.065-.04.172.172,0,0,1-.048-.1l-.48-3.659-3.66-.48a.17.17,0,0,1-.137-.113.168.168,0,0,1,.04-.173l5.108-5.109a.175.175,0,0,1,.064-.039l6.556-2.271a.166.166,0,0,1,.174.039.166.166,0,0,1,.039.174l-2.271,6.556a.165.165,0,0,1-.04.064l-5.108,5.107a.166.166,0,0,1-.119.05A.159.159,0,0,1-148.6,304.992Z"
            fill="currentColor"
          />
          <path d="M-151.352,296H-158v2h4.648Z" fill="currentColor" />
          <path d="M-149.256,293.9a2.171,2.171,0,0,1,.821-.512L-144.42,292H-158v2h8.647Z" fill="currentColor" />
          <path
            d="M-154.928,301.247a2.165,2.165,0,0,1-.036-1.247h-3.079v2h3.582A2.148,2.148,0,0,1-154.928,301.247Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </IconBox>
  )
}
