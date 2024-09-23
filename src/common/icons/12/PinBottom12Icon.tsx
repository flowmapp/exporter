import { IconWrapper, IconProps } from '../../IconWrapper'

const PinBottom12Icon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_4638_15848)" fill="currentColor">
            <path d="M6.761.5H5.24a1 1 0 00-.956.706l-1.385 4.5A1 1 0 003.854 7H5.25v1.5a.75.75 0 001.5 0V7h1.396a1 1 0 00.956-1.294l-1.385-4.5A1 1 0 006.761.5zM1.25 10.25a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4638_15848">
              <path fill="currentColor" d="M0 0h12v12H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default PinBottom12Icon
