 import React from 'react'
 import Head from 'next/head'
 import Link from 'next/link'
 import { useState } from 'react'
 import Image from 'next/image'
 import Layout from '@/components/constants/layout/layout'
 import BannerSection from '@/components/views/BlogPage/bannerSection' 
 import { getArticles } from '../../../Library/blogPosts'
 import ReactPaginate from 'react-paginate'
 import ReactMarkdown from 'react-markdown';

 const PAGE_SIZE = 6;

 function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '. . .' : text;
 }

 export async function getStaticProps () {
  const articles = await getArticles ();
  return {
    props: { articles },
  };
 }
 
 export default function Index({articles}) {

  const [currentPage, setCurrentPage] = useState(0);

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

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(articles.length / PAGE_SIZE);

  // Calculate the start and end indexes for the current page
  const startIndex = currentPage * PAGE_SIZE;
  const endIndex = (currentPage + 1) * PAGE_SIZE;
  const currentPosts = articles.slice(startIndex, endIndex);

   return (
     <div>
        <Head>
        <title>Blog - JN CodeWorks | Portfolio</title>
          <link rel="icon" href="/images/no-bg-logo.png" />
        </Head>
       <Layout>
            <BannerSection/>

            {/* Blog Section */}
            <div className='lg:w-10/12 mx-auto px-6 py-16'>
                    <section className="text-gray-100">
      <div className="container space-y-6 sm:space-y-12" bis_skin_checked="1">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" bis_skin_checked="1">
          {/* Repeat the pattern for other links and images */}
          {
            currentPosts.map ((posts) => (
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
      </div>
    </section>
    <div className='py-6'>
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={3} // Number of page links to display
              marginPagesDisplayed={2} // Number of pages to display on the edges
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
 