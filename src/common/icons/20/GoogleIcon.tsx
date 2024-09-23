import { IconWrapper, IconProps } from '../../IconWrapper'

const GoogleIcon = (allProps: IconProps) => {
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
          <mask
            id="prefix__a"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={1}
            y={1}
            width={18}
            height={18}
          >
            <path
              d="M18.386 8.364H10v3.477h4.827c-.45 2.209-2.332 3.477-4.827 3.477A5.308 5.308 0 014.682 10 5.308 5.308 0 0110 4.682c1.268 0 2.414.45 3.314 1.186l2.618-2.618C14.336 1.86 12.29 1 10 1c-4.99 0-9 4.01-9 9s4.01 9 9 9c4.5 0 8.59-3.273 8.59-9 0-.532-.08-1.105-.204-1.636z"
              fill="currentColor"
            />
          </mask>
          <g mask="url(#prefix__a)">
            <path d="M.182 15.318V4.682L7.136 10 .182 15.318z" fill="#FBBC05" />
          </g>
          <mask
            id="prefix__b"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={1}
            y={1}
            width={18}
            height={18}
          >
            <path
              d="M18.386 8.364H10v3.477h4.827c-.45 2.209-2.332 3.477-4.827 3.477A5.308 5.308 0 014.682 10 5.308 5.308 0 0110 4.682c1.268 0 2.414.45 3.314 1.186l2.618-2.618C14.336 1.86 12.29 1 10 1c-4.99 0-9 4.01-9 9s4.01 9 9 9c4.5 0 8.59-3.273 8.59-9 0-.532-.08-1.105-.204-1.636z"
              fill="currentColor"
            />
          </mask>
          <g mask="url(#prefix__b)">
            <path d="M.182 4.682L7.136 10 10 7.505l9.818-1.596V.182H.182v4.5z" fill="#EA4335" />
            <mask
              id="prefix__c"
              style={{
                maskType: 'luminance',
              }}
              maskUnits="userSpaceOnUse"
              x={1}
              y={1}
              width={18}
              height={18}
            >
              <path
                d="M18.386 8.364H10v3.477h4.827c-.45 2.209-2.332 3.477-4.827 3.477A5.308 5.308 0 014.682 10 5.308 5.308 0 0110 4.682c1.268 0 2.414.45 3.314 1.186l2.618-2.618C14.336 1.86 12.29 1 10 1c-4.99 0-9 4.01-9 9s4.01 9 9 9c4.5 0 8.59-3.273 8.59-9 0-.532-.08-1.105-.204-1.636z"
                fill="currentColor"
              />
            </mask>
            <g mask="url(#prefix__c)">
              <path d="M.182 15.318L12.455 5.91l3.231.41L19.818.181v19.636H.182v-4.5z" fill="#34A853" />
            </g>
            <mask
              id="prefix__d"
              style={{
                maskType: 'luminance',
              }}
              maskUnits="userSpaceOnUse"
              x={1}
              y={1}
              width={18}
              height={18}
            >
              <path
                d="M18.386 8.364H10v3.477h4.827c-.45 2.209-2.332 3.477-4.827 3.477A5.308 5.308 0 014.682 10 5.308 5.308 0 0110 4.682c1.268 0 2.414.45 3.314 1.186l2.618-2.618C14.336 1.86 12.29 1 10 1c-4.99 0-9 4.01-9 9s4.01 9 9 9c4.5 0 8.59-3.273 8.59-9 0-.532-.08-1.105-.204-1.636z"
                fill="currentColor"
              />
            </mask>
            <g mask="url(#prefix__d)">
              <path d="M19.818 19.818L7.136 10 5.5 8.773l14.318-4.091v15.136z" fill="#4285F4" />
            </g>
          </g>
        </svg>
      }
      {...restProps}
    />
  )
}
export default GoogleIcon
