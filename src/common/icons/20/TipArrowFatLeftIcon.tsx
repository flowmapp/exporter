import { IconWrapper, IconProps } from '../../IconWrapper'

const TipArrowFatLeftIcon = (allProps: IconProps) => {
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
            d="M3.518 8.601l4.105-2.28c.782-.435 1.173-.652 1.493-.615a1 1 0 01.696.41c.188.261.188.709.188 1.603V9h4.5a1 1 0 110 2H10v1.28c0 .895 0 1.343-.188 1.604a1 1 0 01-.696.41c-.32.037-.711-.18-1.493-.615L3.518 11.4c-.822-.457-1.233-.685-1.37-.986a1 1 0 010-.826c.137-.3.548-.529 1.37-.986zM17.5 9a1 1 0 100 2h.5a1 1 0 100-2h-.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default TipArrowFatLeftIcon
