import React from 'react'
import Link from 'next/link'

export default function BannerSection() {
  return (
    <div>
          <div className='mx-auto w-full text-left'>
        <div id='' className='aboutBanner justify-center py-28 items-center h-full w-full'>
            <div className='lg:w-10/12 mx-auto px-6 xl:px-0'>
                <div className='pt-16 mx-auto text-center mb-8'>
                    <h1 className='text-white capitalize font-bold text-4xl'>
                        About
                    </h1>
                    <div className='flex lg:felx-row flex-col justify-between items-center py-4'>
                        <div className='block box-border'>
                            <ul className='flex flex-row space-x-4 items-center  text-white'>
                                <li className='capitalize hover:text-[#0a0e27] text-[15px] ease-in-out duration-300'>
                                    <Link href={'/'}> home </Link>
                                </li>
                                <li className='text-[15px]'>
                                    <svg className='h-4 w-4' fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                    </svg>
                                </li>
                                <li className='capitalize text-[15px]'>about</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
