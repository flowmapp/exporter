import { IconWrapper, IconProps } from '../../IconWrapper'

const MentionIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4985_12523)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 1.75a6.25 6.25 0 102.678 11.899.75.75 0 01.644 1.355A7.75 7.75 0 1115.75 8v1a2.75 2.75 0 01-5.013 1.563A3.75 3.75 0 1111.75 8v1a1.25 1.25 0 102.5 0V8A6.25 6.25 0 008 1.75zM10.25 8a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4985_12523">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default MentionIcon
