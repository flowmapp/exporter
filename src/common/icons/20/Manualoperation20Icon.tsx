import { IconWrapper, IconProps } from '../../IconWrapper'

const Manualoperation20Icon = (allProps: IconProps) => {
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
            d="M2.879 15.224A4 4 0 006.687 18h6.626a4 4 0 003.808-2.776l2.572-8C20.523 4.642 18.597 2 15.884 2H4.115C1.403 2-.523 4.642.307 7.224l2.572 8zM6.687 16a2 2 0 01-1.904-1.388l-2.572-8A2 2 0 014.115 4h11.77a2 2 0 011.904 2.612l-2.572 8A2 2 0 0113.313 16H6.687z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Manualoperation20Icon
