import React from 'react'
import Head from 'next/head'

export default function Loader() {
  return (
    <div>
      <Head>
        <title>JN CodeWorks | Portfolio</title>
        <link rel="icon" href="/images/no-bg-logo.png" />
      </Head>
      <div className="code-loader fixed top-0 left-0 w-screen h-screen items-center justify-center text-center bg-white z-50">
        <span>&#x7b;</span><span>&#x7d;</span>
      </div>
    </div>
  )
}
