import { IconWrapper, IconProps } from '../../IconWrapper'

const AlignBottomIcon = (allProps: IconProps) => {
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
            d="M4 2.5a1.5 1.5 0 113 0v8a1.5 1.5 0 01-3 0v-8zM.75 14a.75.75 0 01.75-.75h13a.75.75 0 010 1.5h-13A.75.75 0 01.75 14zM10.5 5A1.5 1.5 0 009 6.5v4a1.5 1.5 0 003 0v-4A1.5 1.5 0 0010.5 5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AlignBottomIcon
