import { IconWrapper, IconProps } from '../../IconWrapper'

const ClearIcon = (allProps: IconProps) => {
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
            d="M8 1.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM4.856 3.795a5.25 5.25 0 017.349 7.349l-7.35-7.349zm-1.06 1.06a5.25 5.25 0 007.349 7.349l-7.35-7.348z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ClearIcon
