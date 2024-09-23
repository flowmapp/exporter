import { IconWrapper, IconProps } from '../../IconWrapper'

const DeleteIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_543_405)" fill="currentColor">
            <path d="M8.75 1a.75.75 0 00-1.5 0v.75H1.5a.75.75 0 100 1.5h13a.75.75 0 000-1.5H8.75V1zM10.25 6.5a.75.75 0 00-1.5 0v4a.75.75 0 001.5 0v-4zM7.25 6.5a.75.75 0 10-1.5 0v4a.75.75 0 001.5 0v-4z" />
            <path d="M3.25 5.5a.75.75 0 00-1.5 0v4.232c0 .813 0 1.469.043 2 .045.546.14 1.026.366 1.47a3.75 3.75 0 001.639 1.64c.444.226.924.32 1.47.365.531.043 1.187.043 2 .043h1.464c.813 0 1.469 0 2-.043.546-.045 1.026-.14 1.47-.366a3.75 3.75 0 001.64-1.638c.226-.445.32-.925.365-1.471.043-.531.043-1.187.043-2V5.5a.75.75 0 00-1.5 0v4.2c0 .853 0 1.447-.038 1.91-.037.453-.107.714-.207.912-.216.423-.56.767-.984.983-.197.1-.458.17-.912.207-.462.037-1.057.038-1.909.038H7.3c-.852 0-1.447 0-1.91-.038-.453-.037-.714-.107-.911-.207a2.25 2.25 0 01-.984-.984c-.1-.197-.17-.458-.207-.912-.037-.462-.038-1.056-.038-1.909V5.5z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_543_405">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default DeleteIcon
