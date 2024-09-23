import { IconWrapper, IconProps } from '../../IconWrapper'

const Display20Icon = (allProps: IconProps) => {
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
            d="M15 4a2 2 0 012 2v8a2 2 0 01-2 2H7.138a2 2 0 01-1.683-.918l-2.57-4a2 2 0 010-2.164l2.57-4A2 2 0 017.138 4H15zm4 2a4 4 0 00-4-4H7.138a4 4 0 00-3.365 1.837l-2.571 4a4 4 0 000 4.326l2.571 4A4 4 0 007.138 18H15a4 4 0 004-4V6z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Display20Icon
