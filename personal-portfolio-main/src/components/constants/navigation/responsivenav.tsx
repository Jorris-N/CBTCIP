import React from 'react'
import { useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/images/no-bg-logo.png'

export default function Responsivenav() {

    const router = useRouter ();
    const [show, setShow] = useState(true);

    const navigation = {
        links: [
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
            {
                id: 6,
                name: 'hire me',
                href: '/contact',
            }
        ]
    }

  return (
    <div className='lg:hidden'>
      <div className='bg-[#0a0e27] shadow xl:hidden flex justify-between w-full py-4 items-center'>
      <button className="flex focus:outline-none focus:text-indigo-200 justify-between items-center space-x-3">
                <Link href={'/'} className='flex flex-row items-center'>
                <div className='absolute oveflow-hidden -mt-[5px]'>
                    <Image src={Logo} alt="" className='relative' style={{height: "65px", width: "100px"}}/>
                </div>
                 <p className='-mt-1.5 pl-[100px]'>
                    <span className='text-[#ffffff] capitalize font-bold text-[14px]'>JN CodeWorks</span>
                 </p>
                 </Link>
                </button>
            
                <div aria-label="toggler" className="flex px-8 justify-center items-center">
                    <button id="open" aria-label="open" onClick={() => setShow(!show)} className={`${show ? "flex items-center space-x-1" : "hidden"} focus:outline-none focus:ring-2 `}>
                        <svg className="text-[#c51b23]" width={28} height={28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 18H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {/* <span className="uppercase font-medium text-base">open</span> */}
                    </button>
                    <button id="close" aria-label="close" onClick={() => setShow(!show)} className={`${show ? "hidden" : "flex items-center space-x-1"} focus:outline-none focus:ring-2  `}>
                        <svg className="text-[#c51b23]" width={28} height={28} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {/* <span className="uppercase font-medium text-base">close</span> */}
                    </button>
                </div>
                
      </div>
            <div id="Main" className={`${show ? "translate-y-full" : "-translate-y-0"} bg-[#0a0e27] space-y-2 transform  xl:translate-x-0 shadow xl:rounded-r fixed h-screen top-22 sm:z-20  ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-64 flex-col `}>
                {navigation.links.map((item)=>(
                    <button className="text-stone-700 rounded py-3 px-8 items-start text-left space-x-6 w-full" key={item.id} >
                        <Link href={item.href} className={router.pathname == item.href ? "text-[#c51b23] capitalize font-medium" : "hover:text-[#c51b23] text-[#ffffff] capitalize font-medium"}>{item.name}</Link>
                    </button>
                ))}

            </div>
            
    </div>
  )
}