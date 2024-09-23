import { IconWrapper, IconProps } from '../../IconWrapper'

const BorderDashed220Icon = (allProps: IconProps) => {
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
            d="M13.828 6.172a1 1 0 010-1.415l2.415-2.414a1 1 0 111.414 1.414l-2.414 2.415a1 1 0 01-1.415 0zM8 12a1 1 0 010-1.414L10.586 8A1 1 0 1112 9.414L9.414 12A1 1 0 018 12zM2.343 17.657a1 1 0 010-1.414l2.414-2.415a1 1 0 011.415 1.415l-2.415 2.414a1 1 0 01-1.414 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default BorderDashed220Icon
