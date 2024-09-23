import { IconWrapper, IconProps } from '../../IconWrapper'

const Component12Icon = (allProps: IconProps) => {
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
          <path
            d="M5.646 1.354L4.354 2.646a.5.5 0 000 .708l1.292 1.292a.5.5 0 00.708 0l1.292-1.292a.5.5 0 000-.708L6.354 1.354a.5.5 0 00-.708 0zM5.646 7.354L4.354 8.646a.5.5 0 000 .708l1.292 1.292a.5.5 0 00.708 0l1.292-1.292a.5.5 0 000-.708L6.354 7.354a.5.5 0 00-.708 0zM7.354 5.646l1.292-1.292a.5.5 0 01.708 0l1.293 1.292a.5.5 0 010 .708L9.354 7.646a.5.5 0 01-.708 0L7.354 6.354a.5.5 0 010-.708zM2.646 4.354L1.354 5.646a.5.5 0 000 .708l1.292 1.292a.5.5 0 00.708 0l1.292-1.292a.5.5 0 000-.708L3.354 4.354a.5.5 0 00-.708 0z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Component12Icon
