import { IconWrapper, IconProps } from '../../IconWrapper'

const BfillIcon = (allProps: IconProps) => {
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
            d="M1.457 4.704C1 5.807 1 7.204 1 10c0 2.796 0 4.194.457 5.296a6 6 0 003.247 3.247C5.807 19 7.204 19 10 19c2.796 0 4.194 0 5.296-.457a6 6 0 003.247-3.247C19 14.194 19 12.796 19 10c0-2.796 0-4.193-.457-5.296a6 6 0 00-3.247-3.247C14.194 1 12.796 1 10 1c-2.796 0-4.193 0-5.296.457a6 6 0 00-3.247 3.247zM6.5 8a1 1 0 011-1h5a1 1 0 110 2H11v3.5a1 1 0 11-2 0V9H7.5a1 1 0 01-1-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default BfillIcon
