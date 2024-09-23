import { IconWrapper, IconProps } from '../../IconWrapper'

const BorderStyle20Icon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM3 9a1 1 0 000 2h5a1 1 0 100-2H3zM12 9a1 1 0 100 2h5a1 1 0 100-2h-5zM3 15a1 1 0 100 2h2a1 1 0 100-2H3zM9 15a1 1 0 100 2h2a1 1 0 100-2H9zM15 15a1 1 0 100 2h2a1 1 0 100-2h-2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default BorderStyle20Icon
