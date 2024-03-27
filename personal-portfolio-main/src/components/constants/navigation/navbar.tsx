import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/images/no-bg-logo.png'

export default function Navbar() {

    const router = useRouter();

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
        ]
    }

  return (
    <>
            <div className='w-full hidden lg:flex w-full bg-gradient-to-r from-[#0a0e27] to-[#1f2e4e]'>
                <div className='lg:w-10/12 px-6 mx-auto py-4 flex items-center justify-between shadow-lg'>
                    <div className='font-semibold overflow-hiden text-white items-center'>
                        <Link href={'/'} className='flex space-x-3 items-center'>
                            <div className='absolute overflow-hidden'>
                                <Image src={Logo} alt="" className='relative' style={{height: "65px", width: "100px"}}/>
                            </div>
                            <h1 className='text-lg pl-[90px]'>JN CodeWorks</h1>
                         </Link>
                    </div>
                    <div>
                        <nav className='flex items-center space-x-8 items-center'>
                        {navigation.links.map((item)=>(
                            <Link href={item.href} key={item.id} className={router.pathname == item.href ? "text-[#c51b23] capitalize font-medium" : "hover:text-[#c51b23] ease-in-out duration-300 text-[#ffffff] capitalize font-medium"}>{item.name}</Link>
                        ))}
                        </nav>
                    </div>
                    <div>
                        <button>
                            <Link href="/contact" className="flex py-2.5 px-6 bg-[#c51b23] rounded-md text-white capitalize font-semibold text-sm hover:bg-white hover:text-[#c51b23] ease-n-out duration-500">
                                hire me
                           </Link>
                          </button>
                    </div>
                </div>
            </div> 
    </>
  )
}
