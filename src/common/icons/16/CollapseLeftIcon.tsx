import { IconWrapper, IconProps } from '../../IconWrapper'

const CollapseLeftIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4723_27057)" fill="currentColor">
            <path d="M9.53 3.53L5.81 7.25H15a.75.75 0 010 1.5H5.81l3.72 3.72a.75.75 0 11-1.06 1.06L4.177 9.237a1.75 1.75 0 010-2.474L8.47 2.47a.75.75 0 011.06 1.06zM.25 14.5a.75.75 0 001.5 0v-13a.75.75 0 00-1.5 0v13z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4723_27057">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default CollapseLeftIcon
