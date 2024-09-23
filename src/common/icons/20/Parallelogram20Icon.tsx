import { IconWrapper, IconProps } from '../../IconWrapper'

const Parallelogram20Icon = (allProps: IconProps) => {
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
            d="M17.121 4.776A4 4 0 0013.313 2H4.115C1.403 2-.523 4.642.307 7.224l2.572 8A4 4 0 006.687 18h9.197c2.713 0 4.639-2.642 3.809-5.224l-2.572-8zM13.313 4a2 2 0 011.904 1.388l2.572 8A2 2 0 0115.884 16H6.688a2 2 0 01-1.904-1.388l-2.572-8A2 2 0 014.115 4h9.198z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Parallelogram20Icon
