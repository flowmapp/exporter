import { IconWrapper, IconProps } from '../../IconWrapper'

const Size16Icon = (allProps: IconProps) => {
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
          <path
            d="M.75 2a.75.75 0 01.75-.75h13a.75.75 0 010 1.5h-13A.75.75 0 01.75 2zM.75 14a.75.75 0 01.75-.75h13a.75.75 0 010 1.5h-13A.75.75 0 01.75 14zM5.5 6.5a1.5 1.5 0 100 3h5a1.5 1.5 0 000-3h-5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Size16Icon
