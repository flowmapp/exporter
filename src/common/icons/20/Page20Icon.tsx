import { IconWrapper, IconProps } from '../../IconWrapper'

const Page20Icon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_505_359)" fillRule="evenodd" clipRule="evenodd" fill="currentColor">
            <path d="M5.5 6a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1zM5.5 10a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1zM5.5 14a1 1 0 011-1H10a1 1 0 110 2H6.5a1 1 0 01-1-1z" />
            <path d="M9.956 0h.088c1.363 0 2.447 0 3.321.071.896.074 1.66.227 2.359.583a6 6 0 012.622 2.622c.356.7.51 1.463.583 2.359C19 6.509 19 7.593 19 8.956v2.088c0 1.363 0 2.447-.071 3.321-.074.896-.227 1.66-.583 2.359a6 6 0 01-2.622 2.622c-.7.356-1.463.51-2.359.583-.874.071-1.958.071-3.321.071h-.088c-1.363 0-2.447 0-3.321-.071-.896-.074-1.66-.227-2.359-.583a6 6 0 01-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C1 13.491 1 12.407 1 11.044V8.956c0-1.363 0-2.447.071-3.321.074-.896.227-1.66.583-2.359A6 6 0 014.276.654c.7-.356 1.463-.51 2.359-.583C7.509 0 8.593 0 9.956 0zM6.797 2.065c-.771.063-1.243.182-1.613.371a4 4 0 00-1.748 1.748c-.189.37-.308.842-.371 1.613C3 6.581 3 7.583 3 9v2c0 1.417 0 2.419.065 3.203.063.772.182 1.243.371 1.613a4 4 0 001.748 1.748c.37.189.842.308 1.613.371C7.581 18 8.583 18 10 18c1.417 0 2.419 0 3.203-.065.772-.063 1.243-.182 1.613-.371a4 4 0 001.748-1.748c.189-.37.308-.841.371-1.613C17 13.419 17 12.417 17 11V9c0-1.417 0-2.419-.065-3.203-.063-.771-.182-1.243-.371-1.613a4 4 0 00-1.748-1.748c-.37-.189-.841-.308-1.613-.371C12.419 2 11.417 2 10 2c-1.417 0-2.419 0-3.203.065z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_505_359">
              <path fill="currentColor" d="M0 0h20v20H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default Page20Icon
