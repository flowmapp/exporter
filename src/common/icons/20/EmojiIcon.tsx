import { IconWrapper, IconProps } from '../../IconWrapper'

const EmojiIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_2123_12006)">
            <g clipPath="url(#prefix__clip1_2123_12006)" fill="currentColor">
              <path d="M5.293 11.793a1 1 0 011.414 0C7.477 12.563 8.698 13 10 13s2.523-.437 3.293-1.207a1 1 0 011.414 1.414C13.477 14.437 11.698 15 10 15s-3.477-.563-4.707-1.793a1 1 0 010-1.414zM8.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10zm10-8a8 8 0 100 16 8 8 0 000-16z"
              />
            </g>
          </g>
          <defs>
            <clipPath id="prefix__clip0_2123_12006">
              <path fill="currentColor" d="M0 0h20v20H0z" />
            </clipPath>
            <clipPath id="prefix__clip1_2123_12006">
              <path fill="currentColor" d="M0 0h20v20H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default EmojiIcon
