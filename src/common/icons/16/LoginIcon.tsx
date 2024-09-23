import { IconWrapper, IconProps } from '../../IconWrapper'

const LoginIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_3749_7691)" fill="currentColor">
            <path d="M8.1 2.25c1.132 0 1.937 0 2.566.052.62.05 1.005.147 1.31.302a3.25 3.25 0 011.42 1.42c.155.305.251.69.302 1.31.051.63.052 1.434.052 2.566v.2c0 1.132 0 1.937-.052 2.566-.05.62-.147 1.005-.302 1.31a3.25 3.25 0 01-1.42 1.42c-.305.155-.69.251-1.31.302-.63.051-1.434.052-2.566.052H8a.75.75 0 000 1.5h.133c1.092 0 1.958 0 2.655-.057.714-.058 1.317-.18 1.868-.46a4.75 4.75 0 002.076-2.077c.281-.55.403-1.154.461-1.868.057-.697.057-1.563.057-2.655v-.266c0-1.092 0-1.958-.057-2.655-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 00-2.077-2.076c-.55-.281-1.154-.403-1.868-.461C10.091.75 9.225.75 8.133.75H8a.75.75 0 000 1.5h.1z" />
            <path d="M.25 8c0 .414.336.75.75.75h5.69l-2.72 2.72a.75.75 0 101.06 1.06l3.293-3.293a1.75 1.75 0 000-2.474L5.03 3.47a.75.75 0 00-1.06 1.06l2.72 2.72H1A.75.75 0 00.25 8z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_3749_7691">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default LoginIcon
