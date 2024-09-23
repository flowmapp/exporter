import { IconWrapper, IconProps } from '../../IconWrapper'

const LinkurlIcon = (allProps: IconProps) => {
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
            d="M12.798 2.237a3.25 3.25 0 00-4.596 0l-.732.733a.75.75 0 001.06 1.06l.733-.732a1.75 1.75 0 012.474 0l.965.965a1.75 1.75 0 010 2.474l-2.465 2.465a1.75 1.75 0 01-2.474 0L7.03 8.47a.75.75 0 10-1.06 1.06l.732.733a3.25 3.25 0 004.596 0l2.465-2.465a3.25 3.25 0 000-4.596l-.965-.965z"
            fill="currentColor"
          />
          <path
            d="M5.763 6.798a1.75 1.75 0 012.474 0l.733.732a.75.75 0 101.06-1.06l-.732-.733a3.25 3.25 0 00-4.596 0L2.237 8.202a3.25 3.25 0 000 4.596l.965.965a3.25 3.25 0 004.596 0l.232-.233a.75.75 0 10-1.06-1.06l-.233.232a1.75 1.75 0 01-2.474 0l-.965-.965a1.75 1.75 0 010-2.474l2.465-2.465z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default LinkurlIcon
