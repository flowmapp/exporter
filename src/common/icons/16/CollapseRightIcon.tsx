import { IconWrapper, IconProps } from '../../IconWrapper'

const CollapseRightIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4720_24451)" fill="currentColor">
            <path d="M6.47 3.53l3.72 3.72H1a.75.75 0 000 1.5h9.19l-3.72 3.72a.75.75 0 101.06 1.06l4.293-4.293a1.75 1.75 0 000-2.474L7.53 2.47a.75.75 0 00-1.06 1.06zM15.75 14.5a.75.75 0 01-1.5 0v-13a.75.75 0 011.5 0v13z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4720_24451">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default CollapseRightIcon
