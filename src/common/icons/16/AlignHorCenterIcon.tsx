import { IconWrapper, IconProps } from '../../IconWrapper'

const AlignHorCenterIcon = (allProps: IconProps) => {
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
            d="M8 .75a.75.75 0 01.75.75V4h3.75a1.5 1.5 0 010 3H8.75v2h1.75a1.5 1.5 0 010 3H8.75v2.5a.75.75 0 01-1.5 0V12H5.5a1.5 1.5 0 010-3h1.75V7H3.5a1.5 1.5 0 110-3h3.75V1.5A.75.75 0 018 .75z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AlignHorCenterIcon
