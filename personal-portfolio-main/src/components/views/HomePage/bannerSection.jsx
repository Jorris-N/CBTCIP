import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Myself from '../../../../public/images/PSX_20230717_144320-removebg.png'
import Typewriter from 'typewriter-effect'


export default function BannerSection() {
  return (
    <div>
            <div className="w-full bg-cover bg-center">
                <div>
                    <div className="lg:w-10/12 py-20 mx-auto px-6 justify-center w-full">
                      <div className='grid md:grid-cols-2 gap-6 justify-center items-center'>
                          <div className=''>
                            <div className='flex md:space-x-8'>
                              <div className='md:flex hidden flex-col space-y-8 justify-center items-center'>
                                <Link href={'https://www.linkedin.com/in/jorris-nyange/'} target={'_blank'} className='text-[#0a0e27] hover:text-[#c51b23] eas-in-out duration-300'>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                  <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd"/>
                                  <path d="M3 5.012H0V15h3V5.012Z"/>
                                </svg>
                                </Link>
                                <Link href={'https://github.com/Jorris-N'} target={'_blank'} className='text-[#0a0e27] hover:text-[#c51b23] eas-in-out duration-300'>
                                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                                  </svg>
                                </Link>
                                <Link href={'https://twitter.com/JNCodeWorks'} target={'_blank'} className='text-[#0a0e27] hover:text-[#c51b23] eas-in-out duration-300'>
                                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/>
                                  </svg>
                                </Link>
                              </div>

                              <div className='space-y-6'>
                              <Typewriter options={{strings: ['Front-End Developer', 'Web Developer'], autoStart: true, loop: true,}}/>
                              <h2 className='lg:text-4xl text-2xl font-bold leading-12 text-[#0a0e27]'>I&apos;m Jorris Nyange</h2>
                              <div className='space-y-4 text-neutral-600 text-[15px] leading-7'>
                              <p>I am deeply passionate about crafting captivating UI effects, animations, and delivering seamless, dynamic user experiences. Known for my well-organized approach and keen problem-solving skills, I thrive as an independent developer with more attention to detail.</p>
                              <p>My expertise spans the entire front-end spectrum, and I specialize in web development using cutting-edge technologies such as React, Next, and Gatsby.</p>
                              </div>
                              <div>
                              <button>
                                <Link href="/contact" className="flex py-2.5 px-6 bg-[#c51b23] rounded-md text-white capitalize font-semibold text-sm hover:bg-[#6b1824] hover:text-[#ffffff] ease-n-out duration-500">
                                  get in touch
                                </Link>
                              </button>
                              </div>
                              </div>
                            </div>
                          </div>

                          <div className='h-full w-full '>
                            <div className='flex-shrink-0 relative' style={{height: '540px'}}>
                              <Image src={Myself} alt='Jorris' className='object-cover' fill/>
                            </div>
                          </div>
                      </div>
                    </div>

                </div>
                
            </div>
    </div>
  )
}
