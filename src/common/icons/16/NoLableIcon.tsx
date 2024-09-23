import { IconWrapper, IconProps } from '../../IconWrapper'

const NoLableIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1238_1901)" fill="currentColor">
            <path d="M2.03.97A.75.75 0 00.97 2.03l13 13a.75.75 0 101.06-1.06l-13-13zM10.091 3.152a2.25 2.25 0 00-3.085-.092.75.75 0 01-.997-1.12 3.75 3.75 0 015.143.151l2.757 2.757a3.75 3.75 0 01.151 5.143.75.75 0 11-1.12-.997 2.25 2.25 0 00-.092-3.085l-2.757-2.757zM2.909 6.091a.75.75 0 010 1.06 2.25 2.25 0 00-.659 1.592V11.5a2.25 2.25 0 002.25 2.25h2.757a2.25 2.25 0 001.591-.659.75.75 0 111.061 1.06 3.75 3.75 0 01-2.652 1.099H4.5A3.75 3.75 0 01.75 11.5V8.743A3.75 3.75 0 011.848 6.09a.75.75 0 011.061 0z" />
            <path d="M7 10.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1238_1901">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default NoLableIcon
