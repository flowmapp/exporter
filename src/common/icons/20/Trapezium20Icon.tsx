import { IconWrapper, IconProps } from '../../IconWrapper'

const Trapezium20Icon = (allProps: IconProps) => {
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
            d="M2.879 4.776A4 4 0 016.687 2h6.626a4 4 0 013.808 2.776l2.572 8c.83 2.582-1.096 5.224-3.809 5.224H4.115C1.403 18-.523 15.358.307 12.776l2.572-8zM6.687 4a2 2 0 00-1.904 1.388l-2.572 8A2 2 0 004.115 16h11.77a2 2 0 001.904-2.612l-2.572-8A2 2 0 0013.313 4H6.687z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Trapezium20Icon
