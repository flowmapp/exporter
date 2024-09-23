import { IconWrapper, IconProps } from '../../IconWrapper'

const RenameIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_3858_7484)" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.25 1A.75.75 0 017 .25h6a.75.75 0 010 1.5h-2.25v2h.38c.804 0 1.382 0 1.874.16a3.25 3.25 0 012.087 2.086c.16.492.16 1.07.159 1.874v.26c0 .804 0 1.382-.16 1.874a3.25 3.25 0 01-2.086 2.087c-.492.16-1.07.16-1.874.159h-.38v2H13a.75.75 0 010 1.5H7a.75.75 0 010-1.5h2.25V1.75H7A.75.75 0 016.25 1zm4.5 9.75H11c.989 0 1.306-.01 1.54-.086a1.75 1.75 0 001.124-1.123c.077-.235.086-.552.086-1.541 0-.989-.01-1.306-.086-1.54a1.75 1.75 0 00-1.123-1.124c-.235-.077-.552-.086-1.541-.086h-.25v5.5z"
            />
            <path d="M4.87 3.75c-.804 0-1.382 0-1.874.16A3.25 3.25 0 00.909 5.995C.75 6.488.75 7.066.75 7.87v.26c0 .804 0 1.382.16 1.874a3.25 3.25 0 002.086 2.087c.492.16 1.07.16 1.874.159H6.5a.75.75 0 000-1.5H5c-.989 0-1.306-.01-1.54-.086a1.75 1.75 0 01-1.124-1.123C2.259 9.306 2.25 8.989 2.25 8c0-.989.01-1.306.086-1.54a1.75 1.75 0 011.123-1.124c.235-.077.552-.086 1.541-.086h1.5a.75.75 0 000-1.5H4.87z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_3858_7484">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default RenameIcon
