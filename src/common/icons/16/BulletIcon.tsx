import { IconWrapper, IconProps } from '../../IconWrapper'

const BulletIcon = (allProps: IconProps) => {
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
            d="M5.5 4a2 2 0 11-4 0 2 2 0 014 0zM8 3.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H8zM8 11.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H8zM3.5 14a2 2 0 100-4 2 2 0 000 4z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default BulletIcon
