import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Data from '@/pages/data/blog-data.json'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '. . .' : text;
 }

export default function BlogSection() {



  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
        <div className='text-center max-w-2xl mx-auto pb-12 space-y-4'>
        <h1 className='text-4xl capitalize font-bold text-[#0a0e27]'>
                article library
        </h1>
        <div className=' mt-9 pb-4'>
            <p className='text-neutral-600'>
                Learn more from our resource library.
            </p>
            <div className='w-32 h-[2px] bg-[#c51b23] items-center mx-auto mt-4 justify-center'></div>
        </div>
      </div>
      {/* <div className='mt-4 grid gap-6 mx-auto lg:grid-cols-2 md:grid-cols-2 lg:max-w-none mb-6'> */}
      <section className="text-gray-100">
      <div className="container space-y-6 sm:space-y-12" bis_skin_checked="1">
        <Link href="#" passHref>
          <div className="block rounded max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-[#1f2e4e]">
            <Image src="https://source.unsplash.com/random/480x360" alt="" className="object-cover rounded overflow w-full h-64 sm:h-96 lg:col-span-7 dark:bg-gray-500" width={480} height={360} />
            <div className="p-6 space-y-4 lg:col-span-5" bis_skin_checked="1">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
              <span className="text-xs dark:text-gray-400">February 19, 2021</span>
              <p className='text-[15px] leading-7'>{truncateText("Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.", 200)}</p>
            </div>
          </div>
        </Link>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" bis_skin_checked="1">
          {/* Repeat the pattern for other links and images */}
          <Link href="#" passHref>
            <div className="max-w-sm mx-auto group hover:no-underline rounded focus:no-underline bg-[#1f2e4e]">
              <Image src="https://source.unsplash.com/random/480x360?1" alt="" className="object-cover w-full ro h-64 dark:bg-gray-500" width={480} height={360} />
              <div className="p-6 space-y-2" bis_skin_checked="1">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                <span className="text-xs dark:text-gray-400">January 21, 2021</span>
                <p className='text-[15px] leading-7'>{truncateText("Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.", 200)}</p>
              </div>
            </div>
          </Link>
          {/* Repeat for other images and links */}
          <Link href="#" passHref>
            <div className="max-w-sm mx-auto group hover:no-underline rounded focus:no-underline bg-[#1f2e4e]">
              <Image src="https://source.unsplash.com/random/480x360?2" alt="" className="object-cover w-full rounded h-64 dark:bg-gray-500" width={480} height={360} />
              <div className="p-6 space-y-2" bis_skin_checked="1">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                <span className="text-xs dark:text-gray-400">January 21, 2021</span>
                <p className='text-[15px] leading-7'>{truncateText("Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.", 200)}</p>
              </div>
            </div>
          </Link>

          <Link href="#" passHref>
            <div className="max-w-sm mx-auto group hover:no-underline rounded focus:no-underline bg-[#1f2e4e]">
              <Image src="https://source.unsplash.com/random/480x360?3" alt="" className="object-cover w-full rounded h-64 dark:bg-gray-500" width={480} height={360} />
              <div className="p-6 space-y-2" bis_skin_checked="1">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                <span className="text-xs dark:text-gray-400">January 21, 2021</span>
                <p className='text-[15px] leading-7'>{truncateText("Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.", 200)}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center" bis_skin_checked="1">
          <button>
            <Link href="/blog" className="flex py-3 px-6 bg-[#c51b23] rounded-md text-white capitalize font-semibold text-sm hover:bg-white hover:text-[#c51b23] ease-n-out duration-500">
                Load more articles . . .
            </Link>
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}
