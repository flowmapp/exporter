import { IconWrapper, IconProps } from '../../IconWrapper'

const GoogleColorIcon = (allProps: IconProps) => {
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
          <mask
            id="prefix__a"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={1}
            y={1}
            width={14}
            height={14}
          >
            <path
              d="M14.523 6.727H8v2.705h3.755C11.405 11.15 9.94 12.136 8 12.136A4.128 4.128 0 013.864 8 4.128 4.128 0 018 3.864c.986 0 1.877.35 2.577.922l2.037-2.036C11.373 1.668 9.782 1 8 1a6.98 6.98 0 00-7 7c0 3.882 3.118 7 7 7 3.5 0 6.682-2.546 6.682-7 0-.414-.064-.86-.16-1.273z"
              fill="currentColor"
            />
          </mask>
          <g mask="url(#prefix__a)">
            <path d="M.364 12.136V3.864L5.773 8l-5.41 4.136z" fill="#FBBC05" />
          </g>
          <mask
            id="prefix__b"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={1}
            y={1}
            width={14}
            height={14}
          >
            <path
              d="M14.523 6.727H8v2.705h3.755C11.405 11.15 9.94 12.136 8 12.136A4.128 4.128 0 013.864 8 4.128 4.128 0 018 3.864c.986 0 1.877.35 2.577.922l2.037-2.036C11.373 1.668 9.782 1 8 1a6.98 6.98 0 00-7 7c0 3.882 3.118 7 7 7 3.5 0 6.682-2.546 6.682-7 0-.414-.064-.86-.16-1.273z"
              fill="currentColor"
            />
          </mask>
          <g mask="url(#prefix__b)">
            <path d="M.364 3.864L5.773 8 8 6.06l7.636-1.242V.364H.364v3.5z" fill="#EA4335" />
            <mask
              id="prefix__c"
              style={{
                maskType: 'luminance',
              }}
              maskUnits="userSpaceOnUse"
              x={1}
              y={1}
              width={14}
              height={14}
            >
              <path
                d="M14.523 6.727H8v2.705h3.755C11.405 11.15 9.94 12.136 8 12.136A4.128 4.128 0 013.864 8 4.128 4.128 0 018 3.864c.986 0 1.877.35 2.577.922l2.037-2.036C11.373 1.668 9.782 1 8 1a6.98 6.98 0 00-7 7c0 3.882 3.118 7 7 7 3.5 0 6.682-2.546 6.682-7 0-.414-.064-.86-.16-1.273z"
                fill="currentColor"
              />
            </mask>
            <g mask="url(#prefix__c)">
              <path d="M.364 12.136l9.545-7.318 2.514.318L15.636.364v15.272H.364v-3.5z" fill="#34A853" />
            </g>
            <mask
              id="prefix__d"
              style={{
                maskType: 'luminance',
              }}
              maskUnits="userSpaceOnUse"
              x={1}
              y={1}
              width={14}
              height={14}
            >
              <path
                d="M14.523 6.727H8v2.705h3.755C11.405 11.15 9.94 12.136 8 12.136A4.128 4.128 0 013.864 8 4.128 4.128 0 018 3.864c.986 0 1.877.35 2.577.922l2.037-2.036C11.373 1.668 9.782 1 8 1a6.98 6.98 0 00-7 7c0 3.882 3.118 7 7 7 3.5 0 6.682-2.546 6.682-7 0-.414-.064-.86-.16-1.273z"
                fill="currentColor"
              />
            </mask>
            <g mask="url(#prefix__d)">
              <path d="M15.636 15.636L5.773 8 4.5 7.045l11.136-3.181v11.772z" fill="#4285F4" />
            </g>
          </g>
        </svg>
      }
      {...restProps}
    />
  )
}
export default GoogleColorIcon
