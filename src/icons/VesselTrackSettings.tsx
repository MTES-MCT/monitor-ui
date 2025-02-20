import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function VesselTrackSettings({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g>
          <path
            d="M12.4,19.992a.162.162,0,0,1-.065-.04.172.172,0,0,1-.048-.1l-.48-3.659-3.66-.48a.169.169,0,0,1-.1-.286l5.108-5.108a.165.165,0,0,1,.064-.04L19.777,8.01a.167.167,0,0,1,.213.214l-2.271,6.555a.165.165,0,0,1-.04.064L12.571,19.95a.166.166,0,0,1-.119.05A.159.159,0,0,1,12.4,19.992Z"
            fill="currentColor"
          />
          <path
            d="M19.832,8a.168.168,0,0,1,.158.224l-2.271,6.555a.165.165,0,0,1-.04.064l-5.108,5.108a.169.169,0,0,1-.119.049h0a.163.163,0,0,1-.114-.048.172.172,0,0,1-.048-.1l-.48-3.659-3.66-.48a.169.169,0,0,1-.1-.286l5.108-5.108a.165.165,0,0,1,.064-.04L19.777,8.01A.152.152,0,0,1,19.832,8"
            fill="currentColor"
          />
        </g>
        <rect fill="none" height="20" transform="translate(0 0)" width="20" />
        <path d="M0,0H20V20H0Z" fill="none" />
        <path d="M0,0H20V20H0Z" fill="none" />
        <path
          d="M6.635,14.053l.972-.974L7,12.835V2.961l3,1.2v6.514l1.745-1.75a2.184,2.184,0,0,1,.255-.2V4.165l3-1.2V7.569l2-.695V0L11,2.407,6,.4,0,2.808V17l6-2.406.218.087A2.118,2.118,0,0,1,6.635,14.053ZM5,12.835l-3,1.2V4.165l3-1.2Z"
          fill="currentColor"
        />
      </svg>
    </IconBox>
  )
}
