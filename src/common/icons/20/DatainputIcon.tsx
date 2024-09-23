import { IconWrapper, IconProps } from '../../IconWrapper'

const DatainputIcon = (allProps: IconProps) => {
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
            d="M2.879 4.776A4 4 0 016.687 2h9.197c2.713 0 4.639 2.642 3.809 5.224l-2.572 8A4 4 0 0113.313 18H4.115C1.403 18-.523 15.358.307 12.776l2.572-8zM6.687 4a2 2 0 00-1.904 1.388l-2.572 8A2 2 0 004.115 16h9.198a2 2 0 001.904-1.388l2.572-8A2 2 0 0015.884 4H6.688z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DatainputIcon
