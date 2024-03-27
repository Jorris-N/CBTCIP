import React from 'react'
import Image from 'next/image'
import Coding  from '../../../../public/images/coding.jpg'

export default function AboutSection() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
      <div className='text-center max-w-2xl mx-auto pb-12 space-y-4'>
        <h1 className='text-4xl capitalize font-bold text-[#0a0e27]'>
                about me
        </h1>
        <div className=' mt-9 pb-4'>
            <p className='text-neutral-600'>
                Turning your imagination into reality through creativity and development.
            </p>
            <div className='w-32 h-[2px] bg-[#c51b23] items-center mx-auto mt-4 justify-center'></div>
        </div>
      </div>
      <div>
        <div className='grid lg:grid-cols-3 gap-6'>
            <div>
            <ul className="about-info mt-4 px-md-0 px-2 text-[15px] text-neutral-600">
            <li className="flex"><span className="font-bold">Name:</span> <span>Jorris Nyange</span></li>
            <li className="flex"><span className="font-bold">Profile:</span> <span>Front End Developer</span></li>
            <li className="flex"><span className="font-bold">Email:</span> <span>nyangejorris@gmail.com</span></li>
            <li className="flex"><span className="font-bold">Phone:</span> <span>+254 734 007 656</span></li>
            <li className="flex"><span className="font-bold text-transparent">Phone:</span> <span>+254 723 942 143</span></li>
            </ul>
            </div>
            <div>
                <p className='text-neutral-600 text-[15px] leading-7'>
                    With experience in web design and web development, I have mastered the skills of understanding client requirements according to the latest trends. I have worked with businesses from different niches so you can rely on me for yours.
                </p>
            </div>
              <div className='h-full w-full '>
                <div className='flex-shrink-0 relative rounded-md'>
                  <Image src={Coding} alt='Jorris' className='object-cover rounded-md justify-end ' height={200} width={500}/>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}
