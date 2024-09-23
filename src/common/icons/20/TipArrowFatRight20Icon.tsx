import { IconWrapper, IconProps } from '../../IconWrapper'

const TipArrowFatRight20Icon = (allProps: IconProps) => {
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
            d="M16.482 8.601l-4.105-2.28c-.782-.435-1.173-.652-1.493-.615a1 1 0 00-.696.41C10 6.377 10 6.825 10 7.719V9H5.5a1 1 0 100 2H10v1.28c0 .895 0 1.343.188 1.604a1 1 0 00.696.41c.32.037.711-.18 1.493-.615l4.105-2.28c.822-.457 1.233-.685 1.37-.986a1 1 0 000-.826c-.137-.3-.548-.529-1.37-.986zM2.5 9a1 1 0 110 2H2a1 1 0 110-2h.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default TipArrowFatRight20Icon
