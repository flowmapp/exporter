import { IconWrapper, IconProps } from '../../IconWrapper'

const AIIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_2423_12067)" fillRule="evenodd" clipRule="evenodd" fill="currentColor">
            <path d="M4.25 1a.75.75 0 00-1.5 0c0 .718-.179 1.118-.405 1.345-.227.226-.627.405-1.345.405a.75.75 0 000 1.5c.718 0 1.118.179 1.345.405.226.227.405.627.405 1.345a.75.75 0 001.5 0c0-.718.179-1.118.405-1.345.227-.226.627-.405 1.345-.405a.75.75 0 000-1.5c-.718 0-1.118-.179-1.345-.405C4.43 2.118 4.25 1.718 4.25 1zM10.75 5a.75.75 0 00-1.5 0c0 1.551-.387 2.577-1.03 3.22C7.577 8.863 6.55 9.25 5 9.25a.75.75 0 000 1.5c1.551 0 2.577.387 3.22 1.03.643.643 1.03 1.669 1.03 3.22a.75.75 0 001.5 0c0-1.551.387-2.577 1.03-3.22.643-.643 1.669-1.03 3.22-1.03a.75.75 0 000-1.5c-1.551 0-2.577-.387-3.22-1.03-.643-.643-1.03-1.669-1.03-3.22zM9.28 9.28a4.4 4.4 0 00.72-.95c.197.35.437.667.72.95.283.283.6.522.95.72a4.4 4.4 0 00-.95.72 4.4 4.4 0 00-.72.95 4.4 4.4 0 00-.72-.95 4.398 4.398 0 00-.95-.72 4.4 4.4 0 00.95-.72z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_2423_12067">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default AIIcon
