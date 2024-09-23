import { IconWrapper, IconProps } from '../../IconWrapper'

const ProgressCircleIcon = (allProps: IconProps) => {
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
            d="M8 2.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zM1.25 8a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5 2A1.5 1.5 0 018 .5a7.5 7.5 0 11-3.751 13.996 1.5 1.5 0 111.502-2.597A4.5 4.5 0 108 3.5 1.5 1.5 0 016.5 2z"
            fill="#36EB8D"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ProgressCircleIcon
