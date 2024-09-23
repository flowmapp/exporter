import { IconWrapper, IconProps } from '../../IconWrapper'

const Video12Icon = (allProps: IconProps) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 4.8c0-1.68 0-2.52.327-3.162A3 3 0 011.638.327C2.28 0 3.12 0 4.8 0h2.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C12 2.28 12 3.12 12 4.8v2.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C9.72 12 8.88 12 7.2 12H4.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C0 9.72 0 8.88 0 7.2V4.8zm4.757-1.346a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429l3.528-2.117a.5.5 0 000-.858L4.757 3.454z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Video12Icon
