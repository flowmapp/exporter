import { IconWrapper, IconProps } from '../../IconWrapper'

const Text20Icon = (allProps: IconProps) => {
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.968 2h8.064c.439 0 .817 0 1.13.021.33.023.66.072.986.207a3 3 0 011.624 1.624c.135.326.184.656.207.986.021.313.021.691.021 1.13V6a1 1 0 11-2 0c0-.48 0-.79-.017-1.026-.015-.228-.042-.315-.06-.357a1 1 0 00-.54-.54c-.042-.018-.129-.045-.357-.06A16.908 16.908 0 0014 4h-3v12h2a1 1 0 110 2H7a1 1 0 110-2h2V4H6c-.48 0-.79 0-1.026.017-.228.015-.315.042-.357.06a1 1 0 00-.54.54c-.018.042-.045.129-.06.357C4 5.21 4 5.52 4 6a1 1 0 11-2 0v-.032c0-.439 0-.817.021-1.13.023-.33.072-.66.207-.986a3 3 0 011.624-1.624 3.07 3.07 0 01.986-.207C5.15 2 5.529 2 5.968 2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Text20Icon
