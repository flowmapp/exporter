import { IconWrapper, IconProps } from '../../IconWrapper'

const Delete12Icon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_2265_12054)" fill="currentColor">
            <path d="M6 .25a.75.75 0 01.75.75v.25H11a.75.75 0 010 1.5H1a.75.75 0 010-1.5h4.25V1A.75.75 0 016 .25zM2.75 4.5a.75.75 0 00-1.5 0v3.35c0 .525 0 .963.029 1.322.03.373.095.724.261 1.057a2.75 2.75 0 001.23 1.231c.334.166.685.231 1.058.261.359.029.797.029 1.322.029h1.7c.525 0 .963 0 1.322-.029.373-.03.724-.095 1.057-.261a2.75 2.75 0 001.231-1.23c.166-.334.231-.685.261-1.058.029-.359.029-.797.029-1.322V4.5a.75.75 0 00-1.5 0v3.32c0 .563 0 .94-.024 1.232-.023.282-.063.417-.108.507a1.25 1.25 0 01-.56.56c-.089.044-.224.084-.506.107-.291.023-.67.024-1.232.024H5.18c-.563 0-.94 0-1.232-.024-.282-.023-.417-.063-.507-.108a1.25 1.25 0 01-.56-.56c-.044-.089-.084-.224-.107-.506A17.173 17.173 0 012.75 7.82V4.5z" />
            <path d="M4.25 5A.75.75 0 015 4.25h2a.75.75 0 010 1.5H5A.75.75 0 014.25 5zM5 6.75a.75.75 0 000 1.5h2a.75.75 0 000-1.5H5z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_2265_12054">
              <path fill="currentColor" d="M0 0h12v12H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default Delete12Icon
