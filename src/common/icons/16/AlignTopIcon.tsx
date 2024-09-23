import { IconWrapper, IconProps } from '../../IconWrapper'

const AlignTopIcon = (allProps: IconProps) => {
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
            d="M1.5 1.25a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13zM4 5.5a1.5 1.5 0 113 0v8a1.5 1.5 0 01-3 0v-8zM9 5.5a1.5 1.5 0 113 0v4a1.5 1.5 0 01-3 0v-4z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AlignTopIcon
