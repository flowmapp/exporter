import { IconWrapper, IconProps } from '../../IconWrapper'

const SlackIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4447_6707)" fillRule="evenodd" clipRule="evenodd">
            <path
              d="M5.866 0a1.6 1.6 0 10.001 3.2h1.6V1.6c0-.882-.716-1.599-1.6-1.6zm0 4.267H1.6a1.6 1.6 0 000 3.2h4.266a1.6 1.6 0 100-3.2z"
              fill="#36C5F0"
            />
            <path
              d="M16 5.866a1.6 1.6 0 00-3.2 0v1.6h1.6a1.6 1.6 0 001.6-1.6zm-4.267 0V1.6a1.6 1.6 0 00-3.2 0v4.266a1.6 1.6 0 103.2 0z"
              fill="#2EB67D"
            />
            <path
              d="M10.133 16a1.6 1.6 0 100-3.2h-1.6v1.6a1.6 1.6 0 001.6 1.6zm0-4.267H14.4a1.6 1.6 0 000-3.2h-4.266a1.6 1.6 0 00-.001 3.2z"
              fill="#ECB22E"
            />
            <path
              d="M0 10.133a1.6 1.6 0 003.2 0v-1.6H1.6a1.6 1.6 0 00-1.6 1.6zm4.267 0V14.4a1.6 1.6 0 003.2 0v-4.266a1.6 1.6 0 00-3.2-.001z"
              fill="#E01E5A"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4447_6707">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default SlackIcon
