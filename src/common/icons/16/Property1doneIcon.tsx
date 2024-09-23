import { IconWrapper, IconProps } from '../../IconWrapper'

const Property1doneIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4523_17392)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.707 6.207a1 1 0 00-1.414-1.414L7 8.086l-.793-.793a1 1 0 00-1.414 1.414l1.5 1.5a1 1 0 001.414 0l4-4z"
              fill="#36EB8D"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4523_17392">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default Property1doneIcon
