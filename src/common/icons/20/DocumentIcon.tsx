import { IconWrapper, IconProps } from '../../IconWrapper'

const DocumentIcon = (allProps: IconProps) => {
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 5.998A3.999 3.999 0 015 2h10a4 4 0 014 4v9.086c0 .924-.604 1.58-1.239 1.888-.63.307-1.472.372-2.196-.052-1.434-.838-3.307-1.433-5.118-.528-2.16 1.08-4.406 1.397-6.19.951-.897-.224-1.713-.652-2.312-1.315C1.335 15.355 1 14.488 1 13.5V5.998zM5 4c-1.105 0-2 .895-2 1.998V13.5c0 .512.164.895.43 1.19.276.305.71.564 1.313.715 1.216.304 2.97.12 4.81-.8 2.72-1.36 5.378-.37 7.022.59.021.013.06.027.118.027.062 0 .13-.016.192-.046a.294.294 0 00.115-.091V6a2 2 0 00-2-2H5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DocumentIcon
