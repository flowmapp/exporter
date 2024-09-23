import { IconWrapper, IconProps } from '../../IconWrapper'

const BoldIcon = (allProps: IconProps) => {
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
            d="M10.5 2H7.968c-.439 0-.817 0-1.13.021a3.07 3.07 0 00-.986.207 3 3 0 00-1.624 1.624 3.07 3.07 0 00-.207.986C4 5.15 4 5.529 4 5.968v7.87c0 .528 0 .982.03 1.357.033.395.104.789.297 1.167a3 3 0 001.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031H11.5a4.5 4.5 0 002.256-8.394A4.5 4.5 0 0010.5 2zm.003 9H6v2.8c0 .577 0 .949.024 1.232.022.272.06.373.085.422a1 1 0 00.437.437c.05.025.15.063.422.085C7.25 16 7.623 16 8.2 16h3.3a2.5 2.5 0 000-5h-.997zm0-2a2.5 2.5 0 00-.003-5H8c-.48 0-.79 0-1.026.017-.228.015-.315.042-.357.06a1 1 0 00-.54.54c-.018.042-.045.129-.06.357C6 5.21 6 5.52 6 6v3h4.503z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default BoldIcon
