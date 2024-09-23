import { IconWrapper, IconProps } from '../../IconWrapper'

const StarActiveIcon = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.82 1.756c.464-1.008 1.896-1.008 2.36 0l1.054 2.284a1.3 1.3 0 001.028.747l2.499.296c1.101.13 1.544 1.492.73 2.246l-1.848 1.708a1.3 1.3 0 00-.393 1.208l.49 2.468c.217 1.088-.941 1.93-1.91 1.388l-2.195-1.23a1.3 1.3 0 00-1.27 0l-2.196 1.23c-.968.542-2.126-.3-1.91-1.388l.49-2.468a1.3 1.3 0 00-.392-1.208L1.51 7.33c-.815-.754-.372-2.115.73-2.246l2.498-.296a1.3 1.3 0 001.028-.747L6.82 1.756z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default StarActiveIcon
