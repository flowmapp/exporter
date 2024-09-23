import { IconWrapper, IconProps } from '../../IconWrapper'

const TagIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1157_1884)" fill="currentColor">
            <path d="M5.25 12a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.848 2.091a3.75 3.75 0 015.304 0l2.757 2.757a3.75 3.75 0 010 5.304l-4 4a3.75 3.75 0 01-2.652 1.098H4.5A3.75 3.75 0 01.75 11.5V8.743A3.75 3.75 0 011.848 6.09l4-4zm4.243 1.06a2.25 2.25 0 00-3.182 0l-4 4a2.25 2.25 0 00-.659 1.592V11.5a2.25 2.25 0 002.25 2.25h2.757a2.25 2.25 0 001.591-.659l4-4a2.25 2.25 0 000-3.182l-2.757-2.757z"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1157_1884">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default TagIcon
