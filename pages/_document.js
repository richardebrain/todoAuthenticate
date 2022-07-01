import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='dark:bg-gray-800 h-[100vh]'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}