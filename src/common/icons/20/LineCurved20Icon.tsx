import { IconWrapper, IconProps } from '../../IconWrapper'

const LineCurved20Icon = (allProps: IconProps) => {
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
            d="M8.111 14.458c-1.279 1.166-2.945 1.82-5.235 1.534a1 1 0 11.248-1.984c1.71.214 2.794-.257 3.64-1.028.915-.835 1.589-2.048 2.358-3.459l.04-.074c.721-1.322 1.54-2.822 2.727-3.905 1.279-1.166 2.945-1.82 5.235-1.534a1 1 0 11-.248 1.984c-1.71-.214-2.794.257-3.64 1.028-.915.835-1.589 2.048-2.358 3.459l-.04.074c-.721 1.322-1.54 2.822-2.727 3.905z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default LineCurved20Icon
