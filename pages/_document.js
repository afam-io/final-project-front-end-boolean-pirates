import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}