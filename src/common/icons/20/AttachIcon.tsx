import { IconWrapper, IconProps } from '../../IconWrapper'

const AttachIcon = (allProps: IconProps) => {
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
            d="M15.861 9.004a4.949 4.949 0 000-7.045 5.062 5.062 0 00-7.11 0L3.06 7.595a6.928 6.928 0 000 9.862c2.75 2.724 7.207 2.724 9.956 0l5.689-5.635a.99.99 0 000-1.41 1.012 1.012 0 00-1.423 0l-5.688 5.636a5.061 5.061 0 01-7.111 0 4.949 4.949 0 010-7.044l5.688-5.636a3.037 3.037 0 014.267 0 2.97 2.97 0 010 4.227L8.75 13.23a1.012 1.012 0 01-1.422 0 .99.99 0 010-1.41l5.689-5.635a.99.99 0 000-1.41 1.012 1.012 0 00-1.422 0l-5.689 5.637a2.97 2.97 0 000 4.226 3.037 3.037 0 004.266 0l5.69-5.635z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default AttachIcon
