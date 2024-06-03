import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function ClockDashed({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M0,0H20V20H0Z" fill="none" />
        <path d="M0,0H20V20H0Z" fill="none" />
        <path
          d="M10,1H9.307a9.006,9.006,0,0,0-2.1.414L7.87,3.462A6.862,6.862,0,0,1,10,3.126V1ZM4.7,2.726c-.218.159-.427.327-.629.5h0l-.02.018h0l-.02.018h0l0,0h0l-.005,0h0L4,3.288H4l0,0H4l0,0h0l0,.005h0l0,0h0l0,0h0l0,0h0l0,0h0l-.005,0h0l0,0v0l0,0h0l0,0h0l-.009.009h0l0,0,0,0,0,0,0,0,0,0h0l0,0,0,0,0,0v0l0,0,0,0,0,0h0l0,0v0l0,0h0l0,0,0,0,0,0,0,0,0,0h0l0,0v0l0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.01.008v0l0,0,0,0,0,0,0,0,0,0h0l-.005.005v0l0,0v0l0,0,0,0,0,0h0l-.01.009v0l0,0,0,0,0,0v0l0,0h0l-.011.01v0l0,0,0,0,0,0h0l-.01.01h0l0,0h0l0,0h0l0,0h0l-.011.01h0l0,0h0l0,0h0l-.015.014h0l0,0v0l0,0h0L3.671,3.6h0l0,0h0l0,0h0l-.015.015h0l0,0h0l0,0h0l-.015.015h0l0,0h0l-.015.016h0l0,0h0l-.019.019h0l0,0h0l-.015.016h0l-.046.048h0L3.474,3.8h0l-.019.02h0a9.118,9.118,0,0,0-.748.9L4.428,5.973a6.912,6.912,0,0,1,1.524-1.53L4.7,2.726ZM1.43,7.244a8.8,8.8,0,0,0-.318,1.333h0l0,.021h0l0,.022h0l0,.026h0l0,.021h0v0h0l0,.016h0v.005h0l0,.02v.006h0l0,.015h0v.005h0l0,.014v.012h0v.01h0v.012l0,.014V8.83h0v.013l0,.013v.358h0v.112h0v.007h0v.02h0v.028h0v.02h0v.05h0v.049h0v.02h0v.05h0V9.6h0V9.63h0v.021h0v.029h0v.049H1v.021H1v.02H1V9.8H1v.02H1v.05H1V9.9H1v.029H1v.02H1V9.97H1v.007H1V10H3.126a6.856,6.856,0,0,1,.328-2.105L1.43,7.244Zm2.04,4.911-2.019.666c.023.071.048.142.073.212h0l.007.021h0l0,.005h0l0,0h0l.008.02h0l0,0h0l.007.02h0v.01h0l0,.013v0l0,0v0l0,0v.005l0,.005v.015l0,0v.01l0,.005V13.2l0,0v0l0,0v0l0,0v.009l0,0v0l0,.011v.008l0,.005h0l0,.012v0l0,0v0l0,0v0l0,.006h0l0,.006h0l0,.005h0l0,.005h0l.007.019h0l0,.006h0l.01.025h0a8.943,8.943,0,0,0,.6,1.21h0l0,.005h0l0,.005h0l.01.018h0l0,.005h0l.007.011h0l0,.006h0l0,0h0l0,.006h0l.007.011h0l0,0v0l0,0h0l0,.005h0l0,.005v0l0,0h0l0,0v0l0,0h0l0,.005v0l0,0v0l0,0v0l0,0,0,0,0,.005h0l0,0v0l0,0,0,0v0l0,0,0,0,0,0,0,0,0,0v0l0,0,0,0,0,0v0l.008.012h0l0,0h0l0,0h0l.008.013h0l0,0h0l0,0h0q.169.267.357.521l1.712-1.26a6.827,6.827,0,0,1-.989-1.914Zm2.525,3.432L4.754,17.314c.11.079.222.156.335.23h0l.022.014h0l0,0h0l0,0h0l.011.008h0l0,0h0l0,0h0l.006,0,0,0h0l0,0h0l0,0,0,0,0,0h0l.006,0h0l.005,0h0l0,0h0l0,0h0l.011.007h0l.005,0h0l.005,0h0l.017.01h0l0,0h0a8.939,8.939,0,0,0,1.574.78h0l.026.01h0l.025.009h0l.006,0h0l.013.005h0l.006,0h0l0,0h.008l.006,0h0l.006,0h0l0,0h0l0,0h0l.012.005h0l0,0h.008l0,0h0l.006,0h.02l.005,0H7l0,0h0l0,0H7.02l.005,0h.02l.008,0h.018l.013,0H7.1l.02.006h.006l.021.007h0l.005,0h0l.027.009h0l.1.033.643-2.027a6.812,6.812,0,0,1-1.925-.967Zm6.185.935a6.882,6.882,0,0,1-2.127.352L10.069,19a9.24,9.24,0,0,0,1.319-.106h0l.022,0h.006l.022,0h.006l.021,0h0l.022,0H11.5l.015,0h.007l.016,0h.011l.015,0h.012l.01,0H11.6l.015,0h.013l.009,0h.018l.008,0h.014l.013,0H11.7l.008,0h.216l.012,0h.042l.007,0h.007l.006,0h0l.013,0h.007l.007,0h.02l.014,0h.007l.006,0h0l.013,0h0l.005,0h0l.013,0h0l.007,0h.007l.013,0h.007l.02,0h0l.006,0h0l.02,0h0l.026-.007h0l.02-.005h0l.006,0h0l.02-.005h0q.3-.078.591-.175l-.674-2.016ZM15.6,13.984a6.912,6.912,0,0,1-1.513,1.541l1.267,1.708c.067-.05.134-.1.2-.152h0l.005,0h0l.047-.037h0l.021-.016h0l.005,0h0L15.651,17h0l0,0h0l.005,0h0l.016-.012h0l0,0h0l.016-.013h0l.005,0h0l0,0h0l.015-.013h0l0,0h0l.005,0h0l.011-.008h0l.005,0h0l0,0h0l.015-.013h0l0,0h0l.02-.016h0l0,0h0l.015-.013h0l.005,0h0l.005,0h0l.016-.013h0l.005,0h0l.02-.017h0l.02-.017h0l.005,0h0l.02-.018h0l.021-.018h0l.005,0h0l.02-.018h0l0,0h0l.02-.018h0l.025-.023h0l.02-.018h0l.02-.018h0a9.059,9.059,0,0,0,1.192-1.321h0l.016-.021h0l0-.005h0l0-.005h0l.008-.011h0l0-.005h0l0-.005h0l.012-.016h0l0,0v0l0,0h0l0-.005h0l0-.005h0l0,0,0,0,0,0h0l0,0h0l0-.005h0l0,0,0,0v0L15.6,13.984ZM19,9.9l-2.125.024V10a6.871,6.871,0,0,1-.312,2.055l2.029.635a8.91,8.91,0,0,0,.356-1.706h0v-.007h0v-.014h0v-.007h0v-.014h0v-.006h0l0-.014h0v-.006h0l0-.014h0v-.007h0l0-.013h0v-.006h0l0-.014h0V10.85h0l0-.014h0v-.007h0l0-.021h0V10.8h0v-.014h0v-.007h0v-.014h0v-.006h0v-.014h0v-.006h0l0-.014h0v-.006h0V10.7h0v-.006h0v-.013h0v-.006h0v-.014h0V10.65h0v-.02h0v-.014h0v-.006h0v-.013h0v-.013h0v-.007h0v-.006h0v-.006h0v-.02h0v-.007h0v-.006h0v-.006h0v-.02h0v-.007h0v-.006h0v-.006h0v-.028h0v-.013h0V10.42h0V10.4h0v-.013h0v-.007h0V10.37h0v-.006h0v-.057h0V10.3h0v-.006h0v-.007h0v-.014h0v-.021h0V10.24h0v-.013h0v-.007h0V10.2h0v-.013h0v-.028h0v-.013h0v-.007h0v-.021h0v-.021h0v-.02h0v-.021h0v-.035h0V10h0V9.993h0V9.986h0V9.978h0V9.9ZM17.212,4.616l-1.7,1.273a6.836,6.836,0,0,1,1,1.906l2.014-.681a8.934,8.934,0,0,0-1.315-2.5ZM12.657,1.4,12.03,3.43a6.822,6.822,0,0,1,1.932.952L15.19,2.646c-.112-.079-.224-.154-.339-.228h0L14.8,2.385h0l-.005,0h0l-.017-.01h0l-.005,0h0l-.011-.007h0l-.005,0h0l-.005,0h0l-.005,0h0l-.011-.007h0l0,0h0l0,0h0l-.011-.007h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0l-.005,0,0,0,0,0h0l0,0h0l0,0,0,0-.005,0h0l0,0h0l0,0h0l0,0,0,0h0l0,0-.005,0h0l0,0h0l0,0,0,0h0l0,0h0l-.006,0,0,0,0,0h0l0,0h0l0,0h0l-.007-.005h0l0,0h0l0,0h0l0,0h0l-.012-.008h0l0,0h0l0,0h0l-.013-.008h0l0,0h0l0,0h0l-.018-.01h0l0,0h0l-.018-.011h0l0,0h0l-.023-.014h0a9.076,9.076,0,0,0-1.384-.634h0l-.025-.009h0l0,0h0l-.021-.007h-.011L12.961,1.5H12.95l-.015-.006h-.012l-.014,0h-.018l-.009,0h-.018l-.009,0h-.021l-.006,0h0l0,0h-.047l-.006,0h-.02l-.007,0h-.014l0,0h0l-.006,0h0l-.005,0h0l0,0h0l-.005,0h0l-.013,0h-.02l-.006,0Z"
          fill="currentColor"
        />
        <g fill="none" strokeMiterlimit="10">
          <path d="M11,9V5H9v6h6V9Z" stroke="none" />
          <path d="M 15 11 L 9 11 L 9 5 L 11 5 L 11 9 L 15 9 L 15 11 Z" fill="currentColor" stroke="none" />
        </g>
      </svg>
    </IconBox>
  )
}