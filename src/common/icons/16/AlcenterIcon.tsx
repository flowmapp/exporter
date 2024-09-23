import { IconWrapper, IconProps } from '../../IconWrapper'

const AlcenterIcon = (allProps: IconProps) => {
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
            d="M1.5 1.25a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13zM1.5 9.25a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13zM4.25 6A.75.75 0 015 5.25h6a.75.75 0 010 1.5H5A.75.75 0 014.25 6zM5 13.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AlcenterIcon
