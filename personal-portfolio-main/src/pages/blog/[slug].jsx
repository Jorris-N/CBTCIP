import React from "react";
import { getArticleBySlug } from "../../../Library/blogPosts";
import { getArticles } from "../../../Library/blogPosts";
import Layout from '../../components/constants/layout/layout'
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export async function getStaticPaths () {
    const articles = await getArticles ();
    const paths = articles.map ((post) => ({params: {slug: post.fields.slug}}));
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps ({ params }) {
    const { slug } = params;
    const article = await getArticleBySlug(slug);

    return {
        props: {article}
    }
}

export default function Article ({article}) {

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
        <div>
            <Head>
                <title>{article.fields.title}</title>
                <link rel="icon" href={"https:" + article.fields.image.fields.file.url} />
            </Head>
            <Layout>
            <div className='w-full relative h-[520px] bg-cover bg-center'>
            <Image src={"https:" + article.fields.image.fields.file.url} alt={article.fields.title} className="object-cover" fill/>
            <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-70 flex flex-col justify-center text-white'>
            <div className="lg:w-10/12 mx-auto px-6 w-full ">
            <div className="xl:text-4xl pt-12 md:text-3xl flex flex-col space-y-6 text-2xl text-left">
                <h1 className="font-semibold capitalize "> {article.fields.title} </h1>
            </div>
            <div className={'lg:flex  flex-col justify-between start py-4'}>
                        <div className={'block box-border'}>
                            <ul className={'flex flex-row space-x-4 items-center  text-white'}>
                                <li className='capitalize hover:text-[#c51b23] ease-in-out duration-300'>
                                    <Link href={'/'}> home </Link>
                                </li>
                                <li className=''>
                                    <svg className='h-4 w-4' fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                    </svg>
                                </li>
                                <li className='capitalize hover:text-[#c51b23] ease-in-out duration-300'>
                                    <Link href={'/blog'}> Articles </Link> 
                                </li>
                                <li className=''>
                                    <svg className='h-4 w-4' fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                                    </svg>
                                </li>
                                <li className='capitalize'>{article.fields.title}</li>
                            </ul>
                        </div>
                    </div>
            </div>
            </div>
            </div>  
            <div className='lg:w-10/12 mx-auto px-6 py-16'>
                <div className='grid md:grid-cols-4 md:divide-x-2 md:divide-[#1d92ce] gap-4'>
                <div className='md:col-span-4 prose lg:mx-auto lg:max-w-6xl gap-8'>
                <h1 className='text-center text-[#0a0e27] font-bold mx-auto capitalize lg:text-3xl text-xl'>
                    {article.fields.title}
                </h1>
                <div className='flex-shrink-0 relative lg:h-[480px] h-[360px] mx-6 mt-8'>
                    <Image src={"https:" + article.fields.image.fields.file.url} alt={article.fields.title} className='object-cover' fill/>
                </div>
                    <ReactMarkdown className="mx-auto px-6 pt-12 w-full text-neutral-600"> 
                        {article.fields.excerpt}
                    </ReactMarkdown>
                </div>
                </div>
            </div>
            </Layout>
        </div>
      )
}