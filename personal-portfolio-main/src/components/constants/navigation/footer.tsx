import * as React from 'react';
import Link from 'next/link';
import Logo from '../../../../public/images/no-bg-logo.png'
import Image from 'next/image';
import { useRouter } from 'next/router';


export default function Footer () {

    const router = useRouter ();

    const links = [
        {
            id: 1,
            name: 'home',
            href: '/'
        },
        {
            id: 2,
            name: 'about',
            href: '/about'
        },
        {
            id: 3,
            name: 'portfolio',
            href: '/portfolio'
        },
        {
            id: 4,
            name: 'articles',
            href: '/blog'
        },
        {
            id: 5,
            name: 'contact',
            href: '/contact'
        },
    ]

    return (
        <>
        <div className='bg-gradient-to-r from-[#0a0e27] to-[#1f2e4e] '>
        <div className=" py-16 xl:w-11/12 xl:px-0 lg:px-12 sm:px-6 px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-12 gap-8 space-y-4 xl:space-y-0 lg:space-y-0">
                <div className="flex flex-col flex-shrink-0">
                <div className='text-3xl font-semibold text-white items-center'>
                        <Link href={'/'} className='flex flex-col space-y-3'>
                        <div className=' overflow-hidden'>
                                <Image src={Logo} alt="" className='relative' style={{height: "100px", width: "180px"}}/>
                            </div>
                            <h1 className='text-lg pl-[30px]'>JN CodeWorks</h1>
                         </Link>
                    </div>
                <div className=' text-white'>
                        <p className='text-[15px] mt-6 leading-6'>Creating websites and applications using web languages such as HTML, CSS, JavaScript and Javascript Frameworks such as Next, React and Gatsby.</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-base font-semibold leading-4 text-white uppercase">Quick links</h2>
                    <div className='w-32 h-[2px] bg-[#c51b23] items-start mt-1 justify-start mb-4'></div>
                    {
                        links.map ((items) => (
                            <Link href={items.href} key={items.id} className='flex space-x-2 text-white py-2 items-center hover:text-[#c51b23] ease-in-out duration-500'>
                               <span><svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16.9V7a1 1 0 0 1 1.6-.8l6 5a1 1 0 0 1 0 1.5l-6 4.9a1 1 0 0 1-1.6-.8Z"/>
  </svg></span>
                                <span className='capitalize'>{items.name}</span>
                            </Link>
                        ))
                    }
                </div>
                <div>
                    <h2 className="text-base font-semibold leading-4 text-white uppercase">contact Info</h2>
                    <div className='w-32 h-[2px] bg-[#c51b23] items-start mt-1 justify-start'></div>
                    
                    <div className={"py-4 flex flex-col space-y-4"}>
                               {/*location*/}
                               <div className={"flex space-x-3 text-[15px]"}>
                                   <span>
                                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                   </span>
                                   <p className='text-white'> Taita-Taveta County, Kenya.</p>
                               </div>
                               {/*contact*/}

                               <div className={"flex space-x-3 text-sm"}>
                                   <Link href={"tel://+254723942143"} target={'_blank'} className="text-[15px] ease-in-out duration-300 hover:cursor-pointer hover:text-[#c51b23] text-white flex space-x-3 items-center leading-6"><span><svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg></span><span>+254 723 942 143</span></Link>
                               </div>
                               <div className='flex space-x-1 items-center'>
                                <Link href={"https://wa.me/message/XD4CUFFE6TZ7K1"} target={'_blank'} className="text-[15px] ease-in-out duration-300 hover:cursor-pointer hover:text-[#c51b23] text-white flex space-x-3 items-center leading-6"><span><svg id="my-float" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></span><span>+254 734 007 656</span></Link>
                                </div>
                               {/*email*/}
                               <div className='flex space-x-1 items-center '>
                                    <Link href={"mailto:nyangejorris@gmail.com"} target={'_blank'} className="text-[15px] text-white ease-in-out duration-300 hover:cursor-pointer hover:text-[#c51b23] flex space-x-3 items-center leading-6"> <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span><span>nyangejorris@gmail.com</span></Link>
                                </div>


                           </div>
                  
                </div>
                <div>
                <h2 className="text-base font-semibold leading-4 text-white uppercase"> follow me</h2>
                <div className='w-32 h-[2px] bg-[#c51b23] items-start mt-1 justify-start mb-4'></div>
                    <div className="lg:flex lg:flex-row flex md:flex-row  items-center gap-x-8 md:space-y-0 lg:space-y-0 mt-6">
                                <Link href={'https://www.linkedin.com/in/jorris-nyange/'} target={'_blank'} className='text-[#0a0e27] hover:text-[#c51b23] eas-in-out duration-300 p-1.5 bg-white rounded-full'>
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                  <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd"/>
                                  <path d="M3 5.012H0V15h3V5.012Z"/>
                                </svg>
                                </Link>

                                <Link href={'https://github.com/Jorris-N'} target={'_blank'} className='text-[#0a0e27] hover:text-[#c51b23] eas-in-out duration-300 p-1.5 bg-white rounded-full'>
                                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                                  </svg>
                                </Link>

                                <Link href={'https://twitter.com/JNCodeWorks'} target={'_blank'} className='text-[#0a0e27] hover:text-[#c51b23] eas-in-out duration-300 p-1.5 bg-white rounded-full'>
                                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/>
                                  </svg>
                                </Link>
                    </div>
                    </div>
            </div>
           
        </div>
        <div className='text-center items-center mx-auto justify-center bg-[#0a0e27] py-8 p-4'>
            <p className="text-sm leading-none text-white">Copyright ©  {new Date().getFullYear()} <span className='font-semibold tracking-wide'>  JN CodeWorks </span> | All Rights Reserved </p>
            </div>
        </div>
        </>
    )
}