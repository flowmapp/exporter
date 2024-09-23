import { IconWrapper, IconProps } from '../../IconWrapper'

const AddDownIcon = (allProps: IconProps) => {
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
            d="M2 2a1 1 0 011 1v.5A1.5 1.5 0 004.5 5h11A1.5 1.5 0 0017 3.5V3a1 1 0 112 0v.5A3.5 3.5 0 0115.5 7h-11A3.5 3.5 0 011 3.5V3a1 1 0 011-1zm8 7a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3v-3a1 1 0 011-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AddDownIcon
