import { IconWrapper, IconProps } from '../../IconWrapper'

const PlusIcon = (allProps: IconProps) => {
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
            d="M8 2.25a.75.75 0 01.75.75v4.25H13a.75.75 0 010 1.5H8.75V13a.75.75 0 01-1.5 0V8.75H3a.75.75 0 010-1.5h4.25V3A.75.75 0 018 2.25z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default PlusIcon
