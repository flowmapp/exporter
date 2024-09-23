import { IconWrapper, IconProps } from '../../IconWrapper'

const BoldIcon = (allProps: IconProps) => {
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
            d="M3.25 4.785c0-.262 0-.464.024-.644A2.75 2.75 0 015.64 1.774c.18-.024.382-.024.643-.024H8.25a3.5 3.5 0 012.573 5.873A3.5 3.5 0 019.25 14.25H6.569c-.524 0-.929 0-1.28-.094a2.75 2.75 0 01-1.945-1.944c-.095-.352-.094-.757-.094-1.28V4.784zM6.333 3.25H8.25a2 2 0 110 4h-3.5V4.833c0-.333.002-.427.01-.496A1.25 1.25 0 015.838 3.26c.069-.01.163-.011.496-.011zM4.75 8.75v2.083c0 .669.006.856.043.99.115.432.452.769.883.884.135.037.322.043.99.043H9.25a2 2 0 100-4h-4.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default BoldIcon
