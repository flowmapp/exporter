import { IconWrapper, IconProps } from '../../IconWrapper'

const Code20Icon = (allProps: IconProps) => {
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
            d="M7.76 3.65a1 1 0 10-1.52-1.3L1.357 8.047a3 3 0 000 3.904l4.885 5.699a1 1 0 001.518-1.302l-4.884-5.698a1 1 0 010-1.302l4.884-5.698zM12.24 3.65a1 1 0 011.52-1.3l4.884 5.698a3 3 0 010 3.904l-4.885 5.699a1 1 0 01-1.518-1.302l4.884-5.698a1 1 0 000-1.302l-4.884-5.698z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Code20Icon
