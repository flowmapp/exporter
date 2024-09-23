import { IconWrapper, IconProps } from '../../IconWrapper'

const EarthIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1803_18167)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.665 8A7.665 7.665 0 11.335 8a7.665 7.665 0 0115.33 0zM7.481 1.984c.225-.263.4-.319.519-.319s.294.056.52.319c.229.266.46.693.664 1.283.351 1.018.582 2.406.638 3.983H6.178c.056-1.577.287-2.965.638-3.983.204-.59.435-1.017.665-1.283zM4.847 7.25c.057-1.69.303-3.232.712-4.417.098-.285.209-.557.332-.808A6.342 6.342 0 001.71 7.25h3.138zM1.71 8.75h3.138c.057 1.69.303 3.232.712 4.417.098.285.209.557.332.809A6.342 6.342 0 011.71 8.75zm4.47 0h3.643c-.056 1.577-.287 2.966-.638 3.983-.204.59-.435 1.017-.665 1.283-.225.263-.4.319-.519.319s-.294-.056-.52-.319c-.229-.266-.46-.693-.664-1.283-.351-1.018-.582-2.406-.638-3.983zm4.974 0c-.057 1.69-.303 3.232-.712 4.417a7.177 7.177 0 01-.332.809A6.342 6.342 0 0014.29 8.75h-3.138zm3.138-1.5a6.342 6.342 0 00-4.182-5.225c.123.251.233.523.332.808.41 1.185.655 2.728.712 4.417h3.138z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1803_18167">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default EarthIcon
