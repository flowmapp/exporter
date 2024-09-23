import { IconWrapper, IconProps } from '../../IconWrapper'

const TransferIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1770_10850)" fill="currentColor">
            <path d="M12.03 6.47a.75.75 0 10-1.06 1.06l2.72 2.72H8a.75.75 0 000 1.5h5.69l-2.72 2.72a.75.75 0 101.06 1.06l3.293-3.293a1.75 1.75 0 000-2.474L12.03 6.47zM8 5.75a.75.75 0 100-1.5H2.31l2.72-2.72A.75.75 0 103.97.47L.677 3.763a1.75 1.75 0 000 2.474L3.97 9.53a.75.75 0 001.06-1.06L2.31 5.75H8z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1770_10850">
              <path fill="currentColor" transform="matrix(1 0 0 -1 0 16)" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default TransferIcon
