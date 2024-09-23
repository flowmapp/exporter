import { IconWrapper, IconProps } from '../../IconWrapper'

const AddUserIcon = (allProps: IconProps) => {
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
            d="M8 2.75a3.25 3.25 0 100 6.5h.5a.75.75 0 010 1.5h-3A3.25 3.25 0 002.25 14v.5a.75.75 0 01-1.5 0V14a4.752 4.752 0 013.865-4.668A4.75 4.75 0 1112.75 6a.75.75 0 01-1.5 0A3.25 3.25 0 008 2.75zM13.25 10a.75.75 0 00-1.5 0v1.75H10a.75.75 0 000 1.5h1.75V15a.75.75 0 001.5 0v-1.75H15a.75.75 0 000-1.5h-1.75V10z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AddUserIcon
