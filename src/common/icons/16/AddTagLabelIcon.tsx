import { IconWrapper, IconProps } from '../../IconWrapper'

const AddTagLabelIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1210_1691)" fill="currentColor">
            <path d="M6.909 3.152a2.25 2.25 0 013.182 0 .75.75 0 101.06-1.061 3.75 3.75 0 00-5.303 0l-4 4A3.75 3.75 0 00.75 8.743V11.5a3.75 3.75 0 003.75 3.75h2.757a3.75 3.75 0 002.652-1.098.75.75 0 00-1.06-1.061 2.25 2.25 0 01-1.592.659H4.5a2.25 2.25 0 01-2.25-2.25V8.743c0-.597.237-1.17.659-1.591l4-4z" />
            <path d="M12.75 6a.75.75 0 00-1.5 0v1.75H9.5a.75.75 0 000 1.5h1.75V11a.75.75 0 001.5 0V9.25h1.75a.75.75 0 000-1.5h-1.75V6zM7 10.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1210_1691">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default AddTagLabelIcon
