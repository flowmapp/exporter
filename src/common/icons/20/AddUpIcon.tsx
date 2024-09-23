import { IconWrapper, IconProps } from '../../IconWrapper'

const AddUpIcon = (allProps: IconProps) => {
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
            d="M2 18a1 1 0 001-1v-.5A1.5 1.5 0 014.5 15h11a1.5 1.5 0 011.5 1.5v.5a1 1 0 102 0v-.5a3.5 3.5 0 00-3.5-3.5h-11A3.5 3.5 0 001 16.5v.5a1 1 0 001 1zm8-7a1 1 0 001-1V7h3a1 1 0 100-2h-3V2a1 1 0 10-2 0v3H6a1 1 0 100 2h3v3a1 1 0 001 1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AddUpIcon
