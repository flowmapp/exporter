import { IconWrapper, IconProps } from '../../IconWrapper'

const StarIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_505_212)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.138 1.441c.733-1.588 2.99-1.588 3.724 0l1.053 2.285a.55.55 0 00.435.316l2.499.296c1.737.206 2.435 2.354 1.15 3.541l-1.847 1.709a.55.55 0 00-.166.51l.49 2.469c.341 1.716-1.485 3.043-3.012 2.188L8.27 13.526a.55.55 0 00-.538 0l-2.195 1.23c-1.527.854-3.353-.473-3.012-2.19l.49-2.467a.55.55 0 00-.166-.511L1 7.879C-.284 6.692.414 4.544 2.151 4.34l2.499-.297a.55.55 0 00.434-.316l1.054-2.285zM8.5 2.07a.55.55 0 00-.998 0L6.447 4.355a2.05 2.05 0 01-1.62 1.177l-2.5.296a.55.55 0 00-.308.95l1.847 1.708a2.05 2.05 0 01.62 1.905l-.491 2.468a.55.55 0 00.808.587l2.196-1.229a2.05 2.05 0 012.002 0l2.196 1.23c.41.229.9-.127.808-.588l-.49-2.468a2.05 2.05 0 01.619-1.905l1.847-1.708a.55.55 0 00-.309-.95l-2.498-.296a2.05 2.05 0 01-1.62-1.177L8.498 2.07z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_505_212">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default StarIcon
