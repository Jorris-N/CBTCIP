import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Layout from '@/components/constants/layout/layout'

export default function Success() {
  return (
    <>
      <Head>
          <title>JN CodeWorks | Portfolio</title>
          <link rel="icon" href="/images/no-bg-logo.png" />   
    </Head>
    <Layout>
      <div className='bg-white'>
    <div className='lg:w-10/12 mx-auto px-6 pb-28 pt-52'>
        <div className="">
      <div className="bg-white p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Your Message has been Sent!</h3>
            <p className="text-gray-600 my-2">Thank you for your generous feedback and review of our services.</p>
            <p className='font-semibold text-neutral-700'> Have a great day!  </p>
            <div className="py-10 text-center">
                <Link href={'/'} className="px-12 bg-[#1f2e4e] hover:bg-indigo-500 eas-in-out duration-300 text-white font-semibold py-3">GO BACK</Link>
            </div>
        </div>
    </div>
  </div>
    </div>
    </div>
    </Layout>
  </>
  )
}