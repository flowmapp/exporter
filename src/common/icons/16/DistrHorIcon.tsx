import { IconWrapper, IconProps } from '../../IconWrapper'

const DistrHorIcon = (allProps: IconProps) => {
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
            d="M2 .75a.75.75 0 01.75.75v13a.75.75 0 01-1.5 0v-13A.75.75 0 012 .75zM14 .75a.75.75 0 01.75.75v13a.75.75 0 01-1.5 0v-13A.75.75 0 0114 .75zM8 4a1.5 1.5 0 00-1.5 1.5v5a1.5 1.5 0 003 0v-5A1.5 1.5 0 008 4z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default DistrHorIcon
