import { IconWrapper, IconProps } from '../../IconWrapper'

const HelpIcon = (allProps: IconProps) => {
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.344 3.336C4.966 3.637 4.75 4.12 4.75 5a.75.75 0 01-1.5 0c0-1.12.284-2.137 1.156-2.836C5.235 1.502 6.45 1.25 8 1.25c1.55 0 2.765.252 3.594.914.873.699 1.156 1.716 1.156 2.836 0 1.078-.52 1.92-1.219 2.512-.686.581-1.56.943-2.385 1.115a.586.586 0 00-.304.166A.301.301 0 008.75 9v.5a.75.75 0 01-1.5 0V9c0-.991.79-1.674 1.589-1.841.642-.135 1.27-.408 1.722-.791.44-.373.689-.824.689-1.368 0-.88-.216-1.363-.594-1.664C10.236 2.998 9.45 2.75 8 2.75c-1.45 0-2.235.248-2.656.586z"
            fill="currentColor"
          />
          <path d="M9.25 12.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill="currentColor" />
        </svg>
      }
      {...restProps}
    />
  )
}
export default HelpIcon
