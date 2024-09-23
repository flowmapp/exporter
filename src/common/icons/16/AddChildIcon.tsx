import { IconWrapper, IconProps } from '../../IconWrapper'

const AddChildIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_3377_17824)" fill="currentColor">
            <path d="M8.034.75h-.068c-1.139 0-2.04 0-2.766.062-.743.063-1.37.195-1.94.499a4.75 4.75 0 00-1.95 1.95C1.008 3.83.876 4.457.813 5.2.75 5.925.75 6.827.75 7.966V10.5a.75.75 0 001.5 0V8c0-1.18 0-2.018.056-2.673.055-.646.16-1.044.328-1.359a3.25 3.25 0 011.334-1.334c.315-.168.713-.273 1.359-.328C5.982 2.251 6.82 2.25 8 2.25s2.018 0 2.673.056c.646.055 1.044.16 1.359.328a3.25 3.25 0 011.334 1.334c.168.315.273.713.328 1.359.055.655.056 1.493.056 2.673v2.5a.75.75 0 001.5 0V7.966c0-1.139 0-2.04-.062-2.766-.063-.743-.195-1.37-.499-1.94a4.75 4.75 0 00-1.95-1.95C12.17 1.008 11.543.876 10.8.813 10.075.75 9.173.75 8.034.75z" />
            <path d="M8.75 10a.75.75 0 00-1.5 0v1.75H5.5a.75.75 0 000 1.5h1.75V15a.75.75 0 001.5 0v-1.75h1.75a.75.75 0 000-1.5H8.75V10z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_3377_17824">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default AddChildIcon
