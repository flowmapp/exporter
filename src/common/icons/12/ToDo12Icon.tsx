import { IconWrapper, IconProps } from '../../IconWrapper'

const ToDo12Icon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_4465_20685)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 2a4 4 0 100 8 4 4 0 000-8zM0 6a6 6 0 1112 0A6 6 0 010 6z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4465_20685">
              <path fill="currentColor" d="M0 0h12v12H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default ToDo12Icon
