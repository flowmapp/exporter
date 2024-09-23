import { IconWrapper, IconProps } from '../../IconWrapper'

const EmojiIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_891_804)" fill="currentColor">
            <path d="M4.47 9.47a.75.75 0 011.06 0c.578.577 1.494.905 2.47.905.976 0 1.892-.328 2.47-.905a.75.75 0 111.06 1.06c-.922.923-2.256 1.345-3.53 1.345s-2.608-.422-3.53-1.345a.75.75 0 010-1.06zM7 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM10.25 7.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.25 8a7.75 7.75 0 1115.5 0A7.75 7.75 0 01.25 8zM8 1.75a6.25 6.25 0 100 12.5 6.25 6.25 0 000-12.5z"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_891_804">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default EmojiIcon
