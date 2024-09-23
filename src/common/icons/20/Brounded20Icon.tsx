import { IconWrapper, IconProps } from '../../IconWrapper'

const Brounded20Icon = (allProps: IconProps) => {
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
            d="M12.556 2H17a1 1 0 110 2h-4.4c-1.697 0-2.909 0-3.86.078-.938.077-1.533.224-2.01.467A5 5 0 004.545 6.73c-.243.477-.39 1.072-.467 2.01C4.001 9.692 4 10.904 4 12.6V17a1 1 0 11-2 0v-4.444c0-1.643 0-2.937.085-3.978.087-1.063.267-1.95.678-2.756a7 7 0 013.06-3.059c.805-.41 1.692-.591 2.755-.678C9.619 2 10.913 2 12.556 2z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default Brounded20Icon
