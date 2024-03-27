import React from 'react';
import Link from 'next/link';

export default function CTA() {


    

  return (
    <div className='w-full bg-gradient-to-r from-[#0a0e27] to-[#1f2e4e] my-12'>
        <div className="lg:w-10/12 mx-auto px-6 py-16">
            <div className="">
                <div className="w-full flex justify-center">
                    <div className=" md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
                        <div>
                            {/* <div className="flex flex-wrap items-center md:flex-row flex-col-reverse"> */}
                            <div className='flex mx-auto'>
                                <div className="md: w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex text-center items-center justify-center md:pt-0 pt-4">
                                    <div className='space-y-4'>
                                        <h1 role="heading" className="text-xl md:text-2xl lg:text-4xl xl:text-4xl text-white font-bold leading-6 lg:leading-10 text-center">Do you have any project in mind ?</h1>
                                        <p className='text-white text-[15px]'>Get in touch. Lets turn your imagination into reality through creativity, design and development. </p>
                                    </div>
                                    <Link href={'/contact'}><button role="button" className="mt-5 py-2.5 px-8 bg-[#c51b23] rounded-md text-white capitalize font-medium tracking-wide hover:bg-white hover:text-[#c51b23] ease-n-out duration-500">contact me</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
