import { IconWrapper, IconProps } from '../../IconWrapper'

const ComponentIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4278_8062)" fillRule="evenodd" clipRule="evenodd" fill="currentColor">
            <path d="M9.591 1.03a2.25 2.25 0 00-3.182 0l-.879.879a2.25 2.25 0 000 3.182l.879.879a2.25 2.25 0 003.182 0l.879-.879a2.25 2.25 0 000-3.182L9.59 1.03zM7.47 2.091a.75.75 0 011.06 0l.879.879a.75.75 0 010 1.06l-.879.879a.75.75 0 01-1.06 0L6.59 4.03a.75.75 0 010-1.06l.879-.879zM9.591 10.03a2.25 2.25 0 00-3.182 0l-.879.879a2.25 2.25 0 000 3.182l.879.879a2.25 2.25 0 003.182 0l.879-.879a2.25 2.25 0 000-3.182l-.879-.879zM7.47 11.091a.75.75 0 011.06 0l.879.879a.75.75 0 010 1.06l-.879.879a.75.75 0 01-1.06 0l-.879-.879a.75.75 0 010-1.06l.879-.879zM10.909 5.53a2.25 2.25 0 013.182 0l.879.879a2.25 2.25 0 010 3.182l-.879.879a2.25 2.25 0 01-3.182 0l-.879-.879a2.25 2.25 0 010-3.182l.879-.879zm2.121 1.061a.75.75 0 00-1.06 0l-.879.879a.75.75 0 000 1.06l.879.879a.75.75 0 001.06 0l.879-.879a.75.75 0 000-1.06l-.879-.879zM5.091 5.53a2.25 2.25 0 00-3.182 0l-.879.879a2.25 2.25 0 000 3.182l.879.879a2.25 2.25 0 003.182 0l.879-.879a2.25 2.25 0 000-3.182L5.09 5.53zM2.97 6.591a.75.75 0 011.06 0l.879.879a.75.75 0 010 1.06l-.879.879a.75.75 0 01-1.06 0L2.09 8.53a.75.75 0 010-1.06l.879-.879z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4278_8062">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default ComponentIcon
