import React from 'react'
import Image from 'next/image'
import Coding  from '../../../../public/images/coding.jpg'

export default function InformationSection() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
      <div className='text-center max-w-2xl mx-auto pb-12 space-y-4'>
        <h1 className='text-4xl capitalize font-bold text-[#0a0e27]'>
                about me
        </h1>
        <div className=' mt-9 pb-4'>
            <p className='text-neutral-600'>
            I am an enthusiastic web developer based in Taita Taveta County, Kenya.
            </p>
            <div className='w-32 h-[2px] bg-[#c51b23] items-center mx-auto mt-4 justify-center'></div>
        </div>
      </div>
      <div>
        <div className='grid lg:grid-cols-2 gap-6'>
          <div className='flex items-center justify-center h-full'>
            <div className='space-y-6 items-stretch justify-center'>
                <p className='text-neutral-600 text-[15px] leading-7'>
                    With experience in web design and web development, I have mastered the skills of understanding client requirements according to the latest trends. I have worked with businesses from different niches so you can rely on me for yours.
                </p>
                <p className='text-neutral-600 text-[15px] leading-7'>
                I have spent most of the time working across different areas of design like front-end development, landing pages, email design, UI/UX and also responsive design and development. Having worked on various projects that are already live, I can help you with the best possible suggestions and ideas that we can proceed with. With me, you aren&apos;t forced to accept anything. I give you a variety of options we can work on together.
                </p>
            </div>
            </div>
              <div className='h-full w-full '>
                <div className='flex-shrink-0 relative rounded-md'>
                  <Image src={Coding} alt='Jorris' className='object-cover rounded-md justify-end ' style={{height: "100%", width: "100%"}}/>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}
