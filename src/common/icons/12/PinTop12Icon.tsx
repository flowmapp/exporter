import { IconWrapper, IconProps } from '../../IconWrapper'

const PinTop12Icon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4638_15854)" fill="currentColor">
            <path d="M6.761 11.5H5.24a1 1 0 01-.956-.706l-1.385-4.5A1 1 0 013.854 5H5.25V3.5a.75.75 0 111.5 0V5h1.396a1 1 0 01.956 1.294l-1.385 4.5a1 1 0 01-.956.706zM1.25 1.75a.75.75 0 010-1.5h9.5a.75.75 0 010 1.5h-9.5z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4638_15854">
              <path fill="currentColor" d="M0 0h12v12H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default PinTop12Icon
