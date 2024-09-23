import { IconWrapper, IconProps } from '../../IconWrapper'

const InfoIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1800_18149)" fill="currentColor">
            <path d="M9.25 4.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM8.75 8a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0V8z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.335 8a7.665 7.665 0 1115.33 0A7.665 7.665 0 01.335 8zM8 1.665a6.335 6.335 0 100 12.67 6.335 6.335 0 000-12.67z"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1800_18149">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default InfoIcon
