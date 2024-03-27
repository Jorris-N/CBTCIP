import React from 'react'
import Head from 'next/head'
import Layout from '@/components/constants/layout/layout'
import BannerSection from '@/components/views/HomePage/bannerSection'
import AboutSection from '@/components/views/HomePage/aboutSection'
import ServiceSection from '@/components/views/HomePage/serviceSection'
import PortfolioSection from '@/components/views/HomePage/portfolioSection'
import CTA from '@/components/views/HomePage/ctaSection'
import { getArticles } from '../../Library/blogPosts'
import ReactMarkdown from 'react-markdown';
import Link from 'next/link'
import Image from 'next/image'
import TestimonialSection from '@/components/views/HomePage/testimonialSection'
import BlogSection from '@/components/views/HomePage/blogSection'


function truncateText(text, maxLength) {
 return text.length > maxLength ? text.slice(0, maxLength) + '. . .' : text;
}

export async function getStaticProps () {
 const articles = await getArticles (4);
 return {
   props: { articles },
 };
}

export default function Home({articles}) {

  const formatDate = (timestamp) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const date = new Date(timestamp);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };


  return (
    <>
      <div>
        <Head>
          <title>JN CodeWorks | Portfolio</title>
          <link rel="icon" href="/images/no-bg-logo.png" />
        </Head>
        <Layout>
          <BannerSection/>
          <AboutSection/>
          <ServiceSection/>
          <PortfolioSection/>
          <CTA/>
          <TestimonialSection/>
          {/* <BlogSection/> */}
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
              <section className='text-gray-100'>
                <div className="container space-y-6 sm:space-y-12" bis_skin_checked="1">
                  {
                    articles.slice(0,1).map ((posts) => (
                      <>
                        <div key={posts.sys.id}>
                        <Link href={`/blog/${posts.fields.slug}`} passHref>
                          <div className="block rounded max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-[#1f2e4e]">
                            <Image src={"https:" + posts.fields.image.fields.file.url} alt={posts.fields.title}className="object-cover rounded overflow w-full h-64 sm:h-96 lg:col-span-7 dark:bg-gray-500" width={480} height={360} />
                            <div className="p-6 space-y-4 lg:col-span-5" bis_skin_checked="1">
                              <h3 className="text-xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{posts.fields.title}</h3>
                              <span className="text-xs dark:text-gray-400">{formatDate(posts.sys.createdAt)}</span>
                              {/* <p className='text-[15px] leading-7'>{truncateText("Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.", 200)}</p> */}
                                  <ReactMarkdown escapeHtml={false}>
                                    {truncateText(posts.fields.excerpt, 200)}
                                  </ReactMarkdown>
                            </div>
                          </div>
                        </Link>
                        </div>
                      </>
                    ))
                  }
                  <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" bis_skin_checked="1">
                    {/* Repeat the pattern for other links and images */}
                    {
                      articles.slice(1,4).map ((posts) => (
                        <>
                          <div key={posts.sys.id}>
                            <Link href={`/blog/${posts.fields.slug}`} passHref>
                              <div className="max-w-sm mx-auto group hover:no-underline rounded focus:no-underline bg-[#1f2e4e]">
                                <Image src={"https:" + posts.fields.image.fields.file.url} alt={posts.fields.title} className="object-cover w-full ro h-52 dark:bg-gray-500" width={480} height={360} />
                                <div className="p-6 space-y-2" bis_skin_checked="1">
                                  <h3 className="text-xl font-bold group-hover:underline group-focus:underline">{posts.fields.title}</h3>
                                  <span className="text-xs dark:text-gray-400">{formatDate(posts.sys.createdAt)}</span>
                                  {/* <p className='text-[15px] leading-7'>{truncateText(posts.fields.excerpt, 200)}</p> */}
                                  <ReactMarkdown escapeHtml={false}>
                                    {truncateText(posts.fields.excerpt, 200)}
                                  </ReactMarkdown>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </>
                      ))
                    }
                  </div>
                  <div className="flex justify-center" bis_skin_checked="1">
                    <button>
                      <Link href="/blog" className="flex py-3 px-6 bg-[#c51b23] rounded-md text-white capitalize font-semibold text-sm hover:bg-[#6b1824] hover:text-[#ffffff] ease-n-out duration-500">
                          Load more articles . . .
                      </Link>
                    </button>
                  </div>
                </div>
              </section>
            </div>
        </Layout>
      </div>
    </>
  )
}

