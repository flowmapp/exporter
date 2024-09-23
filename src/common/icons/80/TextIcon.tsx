import { IconWrapper, IconProps } from '../../IconWrapper'

const TextIcon = (allProps: IconProps) => {
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
          <path
            d="M38.011 51.16c-.64 0-1.152-.181-1.536-.544-.362-.384-.544-.885-.544-1.504v-17.28h-5.823c-1.28 0-1.92-.565-1.92-1.696 0-1.13.64-1.696 1.92-1.696h15.775c1.28 0 1.92.565 1.92 1.696 0 1.13-.64 1.696-1.92 1.696H40.06v17.28c0 .619-.191 1.12-.575 1.504-.363.363-.854.544-1.473.544z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M52 25a1 1 0 011 1v28a1 1 0 11-2 0V26a1 1 0 011-1z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  )
}
export default TextIcon
