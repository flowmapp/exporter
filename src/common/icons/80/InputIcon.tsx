import { IconWrapper, IconProps } from '../../IconWrapper'

const InputIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps
  return (
    <IconWrapper
      icon={
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 80 80"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect x={3} y={29} width={74} height={22} rx={5} fill="currentColor" />
          <rect x={3} y={29} width={74} height={22} rx={5} stroke="currentColor" strokeWidth={2} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 35.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8a.5.5 0 01.5-.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default InputIcon
