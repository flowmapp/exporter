import { IconWrapper, IconProps } from '../../IconWrapper'

const RhombIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_505_306)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.464 2.121a5 5 0 017.072 0l4.343 4.343a5 5 0 010 7.072l-4.344 4.343a5 5 0 01-7.07 0L2.12 13.535a5 5 0 010-7.07L6.464 2.12zm5.657 1.415a3 3 0 00-4.242 0L3.536 7.879a3 3 0 000 4.242l4.343 4.344a3 3 0 004.242 0l4.344-4.344a3 3 0 000-4.242L12.12 3.536z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_505_306">
              <path fill="currentColor" d="M0 0h20v20H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default RhombIcon
