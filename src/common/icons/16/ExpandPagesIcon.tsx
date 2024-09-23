import { IconWrapper, IconProps } from '../../IconWrapper'

const ExpandPagesIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4116_6216)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.177 1.737a.25.25 0 00-.354 0L6.53 3.03a.75.75 0 11-1.06-1.06L6.763.677a1.75 1.75 0 012.474 0L10.53 1.97a.75.75 0 11-1.06 1.06L8.177 1.737zM3.417 5.25h9.167c.38 0 .71 0 .998.077a2.25 2.25 0 011.591 1.59c.078.29.078.618.077 1v.167c0 .38 0 .71-.077.998a2.25 2.25 0 01-1.59 1.591c-.29.078-.618.078-1 .077H3.417c-.38 0-.71 0-.998-.077a2.25 2.25 0 01-1.591-1.59c-.078-.29-.077-.618-.077-1V8v-.084c0-.38 0-.71.077-.998a2.25 2.25 0 011.59-1.591c.29-.078.618-.077 1-.077zm.083 1.5c-.513 0-.623.006-.694.026a.75.75 0 00-.53.53c-.02.071-.026.18-.026.694 0 .513.006.623.026.694a.75.75 0 00.53.53c.071.02.18.026.694.026h9c.513 0 .623-.006.694-.026a.75.75 0 00.53-.53c.02-.071.026-.18.026-.694 0-.513-.006-.623-.026-.694a.75.75 0 00-.53-.53c-.071-.02-.18-.026-.694-.026h-9zm1.97 6.22a.75.75 0 011.06 0l1.293 1.293a.25.25 0 00.354 0L9.47 12.97a.75.75 0 111.06 1.06l-1.293 1.293a1.75 1.75 0 01-2.474 0L5.47 14.03a.75.75 0 010-1.06z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4116_6216">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default ExpandPagesIcon
