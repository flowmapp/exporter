import { IconWrapper, IconProps } from '../../IconWrapper'

const EditIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_543_392)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.779 1.364a2.75 2.75 0 012.442 0c.731.363 2.052 1.684 2.415 2.415a2.75 2.75 0 010 2.442c-.214.432-.603.807-1.106 1.31l-5.266 5.266c-1.334 1.333-3.307 2.474-5.277 2.54a2.25 2.25 0 01-2.324-2.324c.066-1.97 1.207-3.943 2.54-5.277L8.47 2.47c.502-.503.877-.891 1.309-1.106zm1.776 1.344a1.25 1.25 0 00-1.11 0c-.604.3-1.096 1.004-1.572 1.48a5.575 5.575 0 002.94 2.94c.476-.477 1.18-.97 1.479-1.573a1.25 1.25 0 000-1.11c-.294-.592-1.145-1.443-1.737-1.737zm-.867 5.543a7.076 7.076 0 01-2.94-2.939L4.28 8.782c-1.088 1.088-2.063 2.676-2.116 4.28a.75.75 0 00.774.776c1.605-.054 3.193-1.029 4.282-2.117l3.469-3.47z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_543_392">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default EditIcon
