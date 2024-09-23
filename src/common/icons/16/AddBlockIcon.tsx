import { IconWrapper, IconProps } from '../../IconWrapper'

const AddBlockIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_639_1136)" fill="currentColor">
            <path d="M4 .75A3.25 3.25 0 00.75 4v2A3.25 3.25 0 004 9.25h.75a.75.75 0 000-1.5H4A1.75 1.75 0 012.25 6V4c0-.966.784-1.75 1.75-1.75h8c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0112 7.75h-.75a.75.75 0 000 1.5H12A3.25 3.25 0 0015.25 6V4A3.25 3.25 0 0012 .75H4z" />
            <path d="M8.75 9a.75.75 0 00-1.5 0v2.25H5a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H11a.75.75 0 000-1.5H8.75V9z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_639_1136">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default AddBlockIcon
