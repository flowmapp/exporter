import { IconWrapper, IconProps } from '../../IconWrapper'

const SmartNavIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_3363_17516)" fill="currentColor">
            <path d="M5.384.75H6a.75.75 0 010 1.5h-.5c-.978 0-1.32.006-1.582.077a2.25 2.25 0 00-1.591 1.59c-.07.263-.077.605-.077 1.583V6a.75.75 0 11-1.5 0v-.616c0-.818 0-1.376.128-1.855A3.75 3.75 0 013.529.878C4.01.75 4.566.75 5.384.75zM12.082 2.327c-.262-.07-.604-.077-1.582-.077H10a.75.75 0 110-1.5h.616c.818 0 1.376 0 1.855.128a3.75 3.75 0 012.651 2.651c.129.48.128 1.037.128 1.855V6a.75.75 0 01-1.5 0v-.5c0-.978-.007-1.32-.077-1.582a2.25 2.25 0 00-1.59-1.591zM1.5 9.25a.75.75 0 01.75.75v.5c0 .978.006 1.32.077 1.582a2.25 2.25 0 001.59 1.591c.263.07.605.077 1.583.077H6a.75.75 0 010 1.5h-.616c-.818 0-1.376 0-1.855-.128a3.75 3.75 0 01-2.651-2.651C.75 11.99.75 11.434.75 10.616V10a.75.75 0 01.75-.75z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.25 8a3.75 3.75 0 116.879 2.068l2.401 2.402a.75.75 0 11-1.06 1.06l-2.402-2.401A3.75 3.75 0 014.25 8zM8 5.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_3363_17516">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default SmartNavIcon
