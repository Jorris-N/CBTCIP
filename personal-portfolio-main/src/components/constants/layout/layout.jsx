import React from 'react'
import Navigation from '../navigation/navigate'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loader from '@/components/constants/navigation/loader'
import Footer from '../navigation/footer'

export default function Layout({children}) {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const handleStart = () => {
        setLoading(true);
      };
  
      const handleComplete = () => {
        setLoading(false);
      };
  
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);

      return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleComplete);
        router.events.off('routeChangeError', handleComplete);
      };
    }, [router]);


  return (
    <>
        <div>
            {loading && <Loader/>}
            <header className='fixed w-full top-0 z-40 drop-shadow-md'>
                <Navigation/>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    </>
  )
}
