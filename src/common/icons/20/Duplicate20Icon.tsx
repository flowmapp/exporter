import { IconWrapper, IconProps } from '../../IconWrapper'

const Duplicate20Icon = (allProps: IconProps) => {
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
            d="M1 5a4 4 0 014-4h5a4 4 0 014 4v1h1a4 4 0 014 4v5a4 4 0 01-4 4h-5a4 4 0 01-4-4v-1H5a4 4 0 01-4-4V5zm5 7v-2a4 4 0 014-4h2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h1zm4-4a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2v-5a2 2 0 00-2-2h-5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Duplicate20Icon
