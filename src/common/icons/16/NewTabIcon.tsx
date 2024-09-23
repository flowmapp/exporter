import { IconWrapper, IconProps } from '../../IconWrapper'

const NewTabIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_3574_3824)" fill="currentColor">
            <path d="M4.5 2.25A2.25 2.25 0 002.25 4.5V5a.75.75 0 01-1.5 0v-.5A3.75 3.75 0 014.5.75H5a.75.75 0 010 1.5h-.5zM1.5 10.25a.75.75 0 01.75.75v.5a2.25 2.25 0 002.25 2.25H5a.75.75 0 010 1.5h-.5A3.75 3.75 0 01.75 11.5V11a.75.75 0 01.75-.75zM15.25 11a.75.75 0 00-1.5 0v.5a2.25 2.25 0 01-2.25 2.25H11a.75.75 0 000 1.5h.5a3.75 3.75 0 003.75-3.75V11zM13.75 3.31V6.5a.75.75 0 001.5 0v-4A1.75 1.75 0 0013.5.75h-4a.75.75 0 000 1.5h3.19L7.47 7.47a.75.75 0 001.06 1.06l5.22-5.22z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_3574_3824">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default NewTabIcon
