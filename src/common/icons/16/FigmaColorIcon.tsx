import { IconWrapper, IconProps } from '../../IconWrapper'

const FigmaColorIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4763_14892)">
            <path d="M7.659 8.003a2.332 2.332 0 114.665 0 2.332 2.332 0 01-4.665 0z" fill="#1ABCFE" />
            <path d="M3 12.662a2.333 2.333 0 012.332-2.333h2.332v2.332a2.332 2.332 0 01-4.664 0z" fill="#0ACF83" />
            <path d="M7.659 1.012V5.67H9.99a2.333 2.333 0 000-4.665H7.659v.006z" fill="#FF7262" />
            <path d="M3 3.344a2.332 2.332 0 002.332 2.332h2.332V1.012H5.332A2.33 2.33 0 003 3.344z" fill="#F24E1E" />
            <path d="M3 8.003a2.332 2.332 0 002.332 2.332h2.332V5.67H5.332A2.332 2.332 0 003 8.003z" fill="#A259FF" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4763_14892">
              <path fill="currentColor" transform="translate(3 1)" d="M0 0h9.327v14H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default FigmaColorIcon
