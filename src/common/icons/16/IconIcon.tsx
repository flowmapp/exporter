import { IconWrapper, IconProps } from '../../IconWrapper'

const IconIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 80 80"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_2786_20257)" fill="currentColor">
            <path d="M31.174 43.674a1.875 1.875 0 012.652 0c1.444 1.444 3.734 2.264 6.174 2.264 2.44 0 4.73-.82 6.174-2.264a1.875 1.875 0 112.652 2.652c-2.306 2.306-5.641 3.361-8.826 3.361-3.185 0-6.52-1.055-8.826-3.361a1.875 1.875 0 010-2.652zM37.5 35.625a3.125 3.125 0 11-6.25 0 3.125 3.125 0 016.25 0zM45.625 38.75a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.625 40c0-10.7 8.674-19.375 19.375-19.375 10.7 0 19.375 8.674 19.375 19.375 0 10.7-8.675 19.375-19.375 19.375S20.625 50.7 20.625 40zM40 24.375c-8.63 0-15.625 6.996-15.625 15.625 0 8.63 6.996 15.625 15.625 15.625 8.63 0 15.625-6.996 15.625-15.625 0-8.63-6.996-15.625-15.625-15.625z"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_2786_20257">
              <path fill="currentColor" transform="translate(20 20)" d="M0 0h40v40H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default IconIcon
