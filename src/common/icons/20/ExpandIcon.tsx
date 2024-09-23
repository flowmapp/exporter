import { IconWrapper, IconProps } from '../../IconWrapper'

const ExpandIcon = (allProps: IconProps) => {
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
            d="M17 8V4.414l-3.793 3.793a1 1 0 11-1.414-1.414L15.586 3H12a1 1 0 110-2h4.432c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 01.874.874c.138.271.182.541.201.77.017.208.017.454.017.706V8a1 1 0 11-2 0zM3 15.586l3.793-3.793a1 1 0 011.414 1.414L4.414 17H8a1 1 0 110 2H3.568c-.252 0-.498 0-.706-.017a2.022 2.022 0 01-.77-.201 2 2 0 01-.874-.874 2.022 2.022 0 01-.201-.77C1 16.93 1 16.684 1 16.432V12a1 1 0 112 0v3.586z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default ExpandIcon
