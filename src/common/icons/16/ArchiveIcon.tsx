import { IconWrapper, IconProps } from '../../IconWrapper'

const ArchiveIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1408_2875)" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.25 3.5A2.75 2.75 0 003 6.25h10a2.75 2.75 0 100-5.5H3A2.75 2.75 0 00.25 3.5zM3 4.75a1.25 1.25 0 110-2.5h10a1.25 1.25 0 110 2.5H3z"
            />
            <path d="M2 7.25a.75.75 0 01.75.75v.5c0 .942 0 1.611.036 2.138.036.52.103.845.211 1.106a3.25 3.25 0 001.76 1.759c.26.108.586.175 1.105.21.527.037 1.196.037 2.138.037s1.611 0 2.138-.036c.52-.036.845-.103 1.106-.211a3.25 3.25 0 001.759-1.76c.108-.26.175-.586.21-1.105.037-.527.037-1.196.037-2.138V8a.75.75 0 011.5 0v.527c0 .91 0 1.63-.04 2.213-.04.596-.125 1.104-.322 1.578a4.75 4.75 0 01-2.57 2.57c-.474.197-.982.281-1.578.322-.584.04-1.304.04-2.213.04h-.054c-.909 0-1.63 0-2.213-.04-.596-.04-1.104-.125-1.578-.322a4.75 4.75 0 01-2.57-2.57c-.197-.474-.282-.982-.322-1.578-.04-.584-.04-1.304-.04-2.213V8A.75.75 0 012 7.25z" />
            <path d="M6 8.25a.75.75 0 000 1.5h4a.75.75 0 000-1.5H6z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1408_2875">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default ArchiveIcon
