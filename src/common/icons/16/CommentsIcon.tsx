import { IconWrapper, IconProps } from '../../IconWrapper'

const CommentsIcon = (allProps: IconProps) => {
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
          <g clipPath="url(#prefix__clip0_1030_1600)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.884.25H11.116c.818 0 1.376 0 1.855.128a3.75 3.75 0 012.651 2.651c.129.48.128 1.037.128 1.855v.232c0 .818 0 1.376-.128 1.855a3.75 3.75 0 01-2.651 2.651c-.48.128-1.037.128-1.855.128h-.369c-.007.492-.033.877-.125 1.22a3.75 3.75 0 01-1.742 2.275 327.842 327.842 0 00-.898.522l-.053.032-.003.002-.045.03a2.638 2.638 0 00-.175.154l-.63.58c-.176.163-.338.313-.484.428a1.768 1.768 0 01-.578.319 1.75 1.75 0 01-1.028 0 1.768 1.768 0 01-.578-.32c-.146-.114-.308-.264-.484-.427l-.63-.58a2.586 2.586 0 00-.175-.154 6.7 6.7 0 01-.045-.03 3.604 3.604 0 00-.056-.034 327.311 327.311 0 00-.897-.522 3.75 3.75 0 01-1.743-2.274C.25 10.49.25 9.934.25 9.116a337.237 337.237 0 000-.232c0-.818 0-1.376.128-1.855a3.75 3.75 0 012.651-2.651c.48-.128 1.037-.128 1.855-.128h.369c.007-.492.033-.877.125-1.22A3.75 3.75 0 018.029.377C8.51.25 9.066.25 9.884.25zm-3.13 4.003c.49.007.874.033 1.217.125a3.75 3.75 0 012.651 2.651c.092.344.118.729.125 1.221H11c.978 0 1.32-.006 1.582-.077a2.25 2.25 0 001.591-1.59c.07-.263.077-.605.077-1.583s-.006-1.32-.077-1.582a2.25 2.25 0 00-1.59-1.591c-.263-.07-.605-.077-1.583-.077h-1c-.978 0-1.32.006-1.582.077a2.25 2.25 0 00-1.591 1.59c-.049.18-.067.399-.073.836zM5 5.75c-.978 0-1.32.006-1.582.077a2.25 2.25 0 00-1.591 1.59c-.07.263-.077.605-.077 1.583s.006 1.32.077 1.582a2.25 2.25 0 001.045 1.365l.128.074c.525.304.833.483.91.534l.045.03.055.038.052.04.043.036c.07.057.127.11.198.174l.62.574a8 8 0 00.413.367c.058.046.085.06.093.065a.251.251 0 00.142 0 .608.608 0 00.093-.065c.094-.074.213-.183.413-.367l.61-.564.01-.01c.07-.065.127-.117.198-.174l.042-.035.053-.041c.026-.02.053-.037.055-.038l.046-.03a35.072 35.072 0 011.037-.608 2.25 2.25 0 001.045-1.365c.07-.262.077-.604.077-1.582 0-.978-.006-1.32-.077-1.582a2.25 2.25 0 00-1.59-1.591C7.32 5.757 6.977 5.75 6 5.75H5zm.569 8.13l.002-.001h-.002zm-.138 0l-.002-.001h.002z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_1030_1600">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  )
}
export default CommentsIcon
