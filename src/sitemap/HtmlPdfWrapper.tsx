import React, { PropsWithChildren } from 'react'

const HtmlPdfWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>New sitemap</title>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="./tw.css" />
      </head>

      <body>{children}</body>
    </html>
  )
}

export default HtmlPdfWrapper
