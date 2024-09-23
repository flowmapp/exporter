import { IconWrapper, IconProps } from '../../IconWrapper'

const CupIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_3958_2143)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.371.75H9.63c.395 0 .736 0 1.017.023.297.024.592.078.875.222.424.216.768.56.984.984.127.25.184.51.212.771h.033a3 3 0 110 6h-.333a4.756 4.756 0 01-3.667 2.941v2.059H11a.75.75 0 010 1.5H5a.75.75 0 010-1.5h2.25v-2.059A4.756 4.756 0 013.583 8.75H3.25a3 3 0 010-6h.033c.028-.261.085-.52.212-.771A2.25 2.25 0 014.48.995c.283-.144.578-.198.875-.222C5.634.75 5.976.75 6.37.75zM3.25 4.25a1.5 1.5 0 100 3h.006A4.82 4.82 0 013.25 7V4.25zM12.75 7V4.25a1.5 1.5 0 010 3h-.007A4.82 4.82 0 0012.75 7zM5.476 2.268c-.204.017-.28.045-.316.064a.75.75 0 00-.328.328c-.02.037-.047.112-.064.316-.017.212-.018.492-.018.924V7a3.25 3.25 0 006.5 0V3.9c0-.432 0-.712-.018-.924-.017-.204-.045-.28-.064-.316a.75.75 0 00-.327-.328c-.038-.02-.113-.047-.317-.064A12.753 12.753 0 009.6 2.25H6.4c-.432 0-.712 0-.924.018z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_3958_2143">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default CupIcon
