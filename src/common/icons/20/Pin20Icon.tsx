import { IconWrapper, IconProps } from '../../IconWrapper'

const Pin20Icon = (allProps: IconProps) => {
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
            d="M15.894 1.48a3 3 0 00-3.842-.337l-6.673 4.67a3 3 0 00-.4 4.58L6.586 12l-4.793 4.793a1 1 0 101.414 1.414L8 13.414l1.607 1.607a3 3 0 004.58-.4l4.67-6.673a3 3 0 00-.336-3.842L15.894 1.48zM13.199 2.78a1 1 0 011.28.113l2.627 2.627a1 1 0 01.112 1.28l-4.67 6.673a1 1 0 01-1.527.133L6.393 8.98a1 1 0 01.133-1.527l6.673-4.67z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Pin20Icon
