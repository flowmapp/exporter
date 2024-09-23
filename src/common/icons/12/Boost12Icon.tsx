import { IconWrapper, IconProps } from '../../IconWrapper'

const Boost12Icon = (allProps: IconProps) => {
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
          <path
            d="M7.586 1H4.847a1 1 0 00-.986.836l-.715 4.288A.753.753 0 003.888 7c.533 0 .897.538.7 1.032l-.78 1.948c-.434 1.085 1.027 1.906 1.728.971L8.913 6.45A.906.906 0 008.188 5c-.808 0-1.212-.976-.641-1.547l.746-.746C8.923 2.077 8.477 1 7.586 1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Boost12Icon
