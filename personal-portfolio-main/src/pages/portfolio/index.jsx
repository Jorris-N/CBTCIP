import React from 'react'
import Layout from '@/components/constants/layout/layout'
import Head from 'next/head'
import BannerSection from '@/components/views/PortfolioPage/bannerSection'
import { useState } from 'react'
import { getPortfolio } from '../../../Library/portfolio'
import ReactPaginate from 'react-paginate'
import Link from 'next/link'
import Image from 'next/image'

const PAGE_SIZE = 6;

export async function getStaticProps () {
  const MyPortfolio = await getPortfolio();
  return{
    props: { MyPortfolio },
  }
}

export default function Index({MyPortfolio}) {

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(MyPortfolio.length / PAGE_SIZE);

  // Calculate the start and end indexes for the current page
  const startIndex = currentPage * PAGE_SIZE;
  const endIndex = (currentPage + 1) * PAGE_SIZE;
  const currentPosts = MyPortfolio.slice(startIndex, endIndex);

  return (
    <div>
        <Head>
          <title>Portfolio - JN CodeWorks | Portfolio</title>
          <link rel="icon" href="/images/no-bg-logo.png" />
        </Head>
      <Layout>
        <BannerSection/>
        {/* Porfolio Section */}
        <div className='lg:w-10/12 mx-auto px-6 py-16'>
        <div className='text-center max-w-2xl mx-auto pb-12 space-y-4'>
        <h1 className='text-4xl capitalize font-bold text-[#0a0e27]'>
          my portfolio
        </h1>
        <div className=' mt-9 pb-4'>
          <p className='text-neutral-600'>
            All of my accomplished projects.
          </p>
          <div className='w-32 h-[2px] bg-[#c51b23] items-center mx-auto mt-4 justify-center'></div>
        </div>
      </div>
          <div className="grid xl:grid-cols-3 gap-6 lg:grid-cols-2 ">
            {
              currentPosts.map ((items) => (
                <>
                <div
              className='bg-white rounded-md shadow-md overflow-hidden p-'
              key={items.sys.id}
              >
              <Link href={items.fields.links} target={'_blank'} className='text-lg text-[#0a0e27] hover:text-[#c51b23] eas-in-out duration-300'>
              <div className='flex justify-center relative overflow-hidden'>
                <Image
                  src={"https:" + items.fields.image.fields.file.url}
                  alt={items.fields.tilte}
                  className='object-cover'
                  height={300}
                  width={700}
                />
              </div>
              <div className='text-lg font-semibold text-center py-8'>
                <p>{items.fields.title}</p>
              </div>
              </Link>
            </div>
                </>
              ))
            }
          </div>

            {/* Pagination controls */}
            <div className='py-6'>
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
            </div>
        </div>
      </Layout>
    </div>
  )
}
