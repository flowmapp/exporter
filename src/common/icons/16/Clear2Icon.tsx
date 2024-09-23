import { IconWrapper, IconProps } from '../../IconWrapper'

const Clear2Icon = (allProps: IconProps) => {
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
            d="M14.53 2.53a.75.75 0 00-1.06-1.06L8 6.94 6.445 5.383a2.75 2.75 0 00-3.89 0L1.384 6.555a2.75 2.75 0 000 3.89l4.171 4.171a2.75 2.75 0 003.89 0l1.171-1.171a2.75 2.75 0 000-3.89L9.061 8l5.47-5.47zM6.06 13l1.47-1.47a.75.75 0 10-1.06-1.06L5 11.94 4.06 11l1.47-1.47a.75.75 0 00-1.06-1.06L3 9.94l-.555-.556a1.25 1.25 0 010-1.768l1.171-1.171a1.25 1.25 0 011.768 0l4.171 4.171a1.25 1.25 0 010 1.768l-1.171 1.171a1.25 1.25 0 01-1.768 0L6.061 13z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Clear2Icon
