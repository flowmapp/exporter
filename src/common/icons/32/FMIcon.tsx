import { IconWrapper, IconProps } from '../../IconWrapper'

const FMIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          {...props}
        >
          <g clipPath="url(#prefix__clip0_529_945)">
            <path fill="url(#prefix__pattern0_529_945)" d="M4 4h24v24H4z" />
          </g>
          <defs>
            <clipPath id="prefix__clip0_529_945">
              <rect x={4} y={4} width={24} height={24} rx={6} fill="currentColor" />
            </clipPath>
            <pattern id="prefix__pattern0_529_945" patternContentUnits="objectBoundingBox" width={1} height={1}>
              <use xlinkHref="#prefix__image0_529_945" transform="scale(.01563)" />
            </pattern>
            <image
              id="prefix__image0_529_945"
              width={64}
              height={64}
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default FMIcon
