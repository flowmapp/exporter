import { IconWrapper, IconProps } from '../../IconWrapper'

const PinBottom20Icon = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.235 3.507A3 3 0 018.195 1h3.61a3 3 0 012.96 2.507l.833 5A3 3 0 0112.64 12H11v3a1 1 0 11-2 0v-3H7.36a3 3 0 01-2.958-3.493l.833-5zM12.64 10a1 1 0 00.987-1.164l-.834-5A1 1 0 0011.806 3H8.194a1 1 0 00-.986.836l-.833 5A1 1 0 007.36 10h5.278z"
            fill="currentColor"
          />
          <path d="M2 18a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" fill="currentColor" />
        </svg>
      }
      {...restProps}
    />
  )
}
export default PinBottom20Icon
