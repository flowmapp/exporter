import { IconWrapper, IconProps } from '../../IconWrapper'

const NoDollarIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4809_16489)" fill="currentColor">
            <path d="M8.75 1a.75.75 0 00-1.5 0v1.25H7a.75.75 0 000 1.5h6a.75.75 0 000-1.5H8.75V1z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.172 3.232A3.25 3.25 0 004.5 8.75h3.19l6.28 6.28a.75.75 0 101.06-1.06l-1.202-1.203A3.25 3.25 0 0011.5 7.25H8.31L2.03.97A.75.75 0 00.97 2.03l1.202 1.202zM9.81 8.75l2.956 2.957A1.75 1.75 0 0011.5 8.75H9.81zm-3.622-1.5L3.233 4.293A1.75 1.75 0 004.5 7.25h1.69z"
            />
            <path d="M1.75 13a.75.75 0 01.75-.75H9a.75.75 0 010 1.5h-.25V15a.75.75 0 01-1.5 0v-1.25H2.5a.75.75 0 01-.75-.75z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4809_16489">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default NoDollarIcon
