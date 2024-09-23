import { IconWrapper, IconProps } from '../../IconWrapper'

const ExportIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_505_174)" fill="currentColor">
            <path d="M4.53 5.53l2.72-2.72V10a.75.75 0 001.5 0V2.81l2.72 2.72a.75.75 0 101.06-1.06L9.237 1.177a1.75 1.75 0 00-2.474 0L3.47 4.47a.75.75 0 101.06 1.06z" />
            <path d="M13.75 10c0 .482 0 .669-.016.819a3.25 3.25 0 01-2.915 2.915c-.15.015-.337.016-.819.016H6c-.482 0-.669 0-.819-.016a3.25 3.25 0 01-2.915-2.915c-.015-.15-.016-.337-.016-.819V9a.75.75 0 00-1.5 0v1.048c0 .418 0 .685.023.918a4.75 4.75 0 004.261 4.261c.233.023.5.023.918.023h4.096c.418 0 .685 0 .918-.023a4.75 4.75 0 004.261-4.261c.023-.233.023-.5.023-.918V9a.75.75 0 00-1.5 0v1z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_505_174">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default ExportIcon
