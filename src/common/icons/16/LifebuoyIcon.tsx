import { IconWrapper, IconProps } from '../../IconWrapper'

const LifebuoyIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_4483_2891)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.48 2.52A7.75 7.75 0 102.52 13.48 7.75 7.75 0 0013.48 2.52zm-9.338.562a6.253 6.253 0 017.716 0l-1.79 1.79a3.755 3.755 0 00-4.136 0l-1.79-1.79zm-1.06 1.06a6.253 6.253 0 000 7.716l1.79-1.79a3.754 3.754 0 010-4.136l-1.79-1.79zm1.06 8.776l1.79-1.79a3.755 3.755 0 004.136.001l1.79 1.79a6.253 6.253 0 01-7.716 0zm8.776-1.06a6.253 6.253 0 000-7.716l-1.79 1.79a3.754 3.754 0 010 4.136l1.79 1.79zM6.41 6.409a2.25 2.25 0 113.182 3.182 2.25 2.25 0 01-3.182-3.182z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_4483_2891">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default LifebuoyIcon
