import { IconWrapper, IconProps } from '../../IconWrapper'

const SeoIcon = (allProps: IconProps) => {
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
            d="M11.5 1.25A2.25 2.25 0 009.25 3.5v.75H7.5A2.25 2.25 0 005.25 6.5v.75H3.5A2.25 2.25 0 001.25 9.5v3a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-1zm-.75 12h1.75a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-1a.75.75 0 00-.75.75v9.75zm-1.5 0v-7.5H7.5a.75.75 0 00-.75.75v6.75h2.5zm-4-4.5v4.5H3.5a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h1.75z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default SeoIcon
