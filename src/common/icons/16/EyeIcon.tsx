import { IconWrapper, IconProps } from '../../IconWrapper'

const EyeIcon = (allProps: IconProps) => {
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 5.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zM6.75 8a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2.335c-2.056 0-3.944.594-5.336 1.588C1.274 4.917.335 6.35.335 8c0 1.651.938 3.083 2.329 4.077 1.392.994 3.28 1.588 5.336 1.588 2.056 0 3.944-.594 5.336-1.588 1.39-.994 2.329-2.426 2.329-4.077 0-1.651-.938-3.083-2.329-4.077C11.944 2.93 10.056 2.335 8 2.335zM1.665 8c0-1.11.629-2.178 1.772-2.994C4.578 4.19 6.19 3.665 8 3.665c1.81 0 3.422.525 4.563 1.34 1.143.817 1.772 1.885 1.772 2.995s-.629 2.178-1.772 2.994C11.422 11.81 9.81 12.335 8 12.335c-1.81 0-3.422-.525-4.563-1.34C2.294 10.177 1.665 9.11 1.665 8z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default EyeIcon
