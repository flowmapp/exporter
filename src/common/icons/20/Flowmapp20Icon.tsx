import { IconWrapper, IconProps } from '../../IconWrapper'

const Flowmapp20Icon = (allProps: IconProps) => {
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
            d="M.804 3C0 4.392 0 6.262 0 10c0 1.11 0 2.056.021 2.873L5.955 6.94a1.03 1.03 0 01.761-.297c.272 0 .507.087.705.26.198.173.297.414.297.723v6.049l6.735-6.735c.21-.21.463-.316.76-.316.272 0 .507.093.705.279a.92.92 0 01.316.723v9.221h-2.115v-6.827l-6.81 6.734a1.043 1.043 0 01-.741.279c-.26 0-.489-.08-.687-.242a.873.873 0 01-.278-.668V10.02l-5.35 5.457c.12.587.294 1.08.55 1.524A6 6 0 003 19.196C4.392 20 6.262 20 10 20c3.739 0 5.608 0 7-.804A6.002 6.002 0 0019.196 17C20 15.608 20 13.739 20 10c0-3.738 0-5.608-.804-7A6 6 0 0017 .804C15.608 0 13.739 0 10 0 6.262 0 4.392 0 3 .804A6 6 0 00.804 3z"
            fill="#1F1F1F"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Flowmapp20Icon
