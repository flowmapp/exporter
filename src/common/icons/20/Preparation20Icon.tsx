import { IconWrapper, IconProps } from '../../IconWrapper'

const Preparation20Icon = (allProps: IconProps) => {
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
            d="M.956 11.961a4 4 0 010-3.922l2.812-5A4 4 0 017.255 1h5.49a4 4 0 013.487 2.039l2.812 5a4 4 0 010 3.922l-2.812 5A4 4 0 0112.746 19H7.255a4 4 0 01-3.487-2.039l-2.812-5zm1.743-2.942a2 2 0 000 1.961l2.812 5A2 2 0 007.255 17h5.49a2 2 0 001.744-1.02l2.812-5a2 2 0 000-1.96l-2.812-5A2 2 0 0012.745 3h-5.49A2 2 0 005.51 4.02l-2.812 5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Preparation20Icon
