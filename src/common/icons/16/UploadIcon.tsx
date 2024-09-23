import { IconWrapper, IconProps } from '../../IconWrapper'

const UploadIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1574_9552)" fill="currentColor">
            <path d="M8.75 1v7.19l2.72-2.72a.75.75 0 111.06 1.06L9.237 9.823a1.75 1.75 0 01-2.474 0L3.47 6.53a.75.75 0 011.06-1.06l2.72 2.72V1a.75.75 0 011.5 0z" />
            <path d="M13.75 10c0 .482 0 .669-.016.819a3.25 3.25 0 01-2.915 2.915c-.15.015-.337.016-.819.016H6c-.482 0-.669 0-.819-.016a3.25 3.25 0 01-2.915-2.915c-.015-.15-.016-.337-.016-.819V9a.75.75 0 00-1.5 0v1.048c0 .418 0 .685.023.918a4.75 4.75 0 004.261 4.261c.233.023.5.023.918.023h4.096c.418 0 .685 0 .918-.023a4.75 4.75 0 004.261-4.261c.023-.233.023-.5.023-.918V9a.75.75 0 00-1.5 0v1z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1574_9552">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default UploadIcon
