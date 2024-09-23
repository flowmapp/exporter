import { IconWrapper, IconProps } from '../../IconWrapper'

const PlayIcon = (allProps: IconProps) => {
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
            d="M8.014 3.521C6.681 2.737 5 3.698 5 5.245v9.51c0 1.547 1.68 2.508 3.014 1.724l8.083-4.755c1.315-.773 1.315-2.675 0-3.448L8.014 3.521zM3 5.245C3 2.152 6.362.23 9.028 1.798l8.083 4.754c2.63 1.547 2.63 5.35 0 6.896l-8.083 4.755C6.362 19.77 3 17.848 3 14.755v-9.51z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default PlayIcon
