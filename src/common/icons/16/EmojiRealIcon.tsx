import { IconWrapper, IconProps } from '../../IconWrapper'

const EmojiRealIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_3970_4)">
            <path d="M0 16.12h16v-16H0v16z" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_3970_4">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default EmojiRealIcon
