import { IconWrapper, IconProps } from '../../IconWrapper'

const AlignRightIcon = (allProps: IconProps) => {
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
            d="M14 .75a.75.75 0 01.75.75v13a.75.75 0 01-1.5 0v-13A.75.75 0 0114 .75zM1 5.5A1.5 1.5 0 012.5 4h8a1.5 1.5 0 010 3h-8A1.5 1.5 0 011 5.5zM6.5 9a1.5 1.5 0 100 3h4a1.5 1.5 0 000-3h-4z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AlignRightIcon
