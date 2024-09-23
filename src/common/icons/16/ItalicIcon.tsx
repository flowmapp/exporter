import { IconWrapper, IconProps } from '../../IconWrapper'

const ItalicIcon = (allProps: IconProps) => {
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
            d="M10.017 1.75H13a.75.75 0 010 1.5h-2.475l-3.49 9.6H9a.75.75 0 010 1.5H3a.75.75 0 010-1.5h2.438l3.491-9.6H7a.75.75 0 110-1.5h3.017z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ItalicIcon
