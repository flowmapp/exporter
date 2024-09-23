import { IconWrapper, IconProps } from '../../IconWrapper'

const StarIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_505_133)">
            <path
              d="M5.049.927c.3-.921 1.603-.921 1.902 0l.62 1.91a1 1 0 00.952.69h2.008c.968 0 1.371 1.24.588 1.81l-1.625 1.18a1 1 0 00-.363 1.118l.62 1.91c.3.921-.755 1.688-1.539 1.118l-1.624-1.18a1 1 0 00-1.176 0l-1.624 1.18c-.784.57-1.839-.197-1.54-1.118l.621-1.91a1 1 0 00-.363-1.118L.881 5.337c-.783-.57-.38-1.81.588-1.81h2.008a1 1 0 00.951-.69l.62-1.91z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_505_133">
              <path fill="currentColor" d="M0 0h12v12H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default StarIcon
