import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Data from '@/pages/data/home-portfolio.json';
import Link from 'next/link';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PortfolioSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
      <div className='text-center max-w-2xl mx-auto pb-12 space-y-4'>
        <h1 className='text-4xl capitalize font-bold text-[#0a0e27]'>
          my portfolio
        </h1>
        <div className=' mt-9 pb-4'>
          <p className='text-neutral-600'>
            A snippet of some of my accomplished projects.
          </p>
          <div className='w-32 h-[2px] bg-[#c51b23] items-center mx-auto mt-4 justify-center'></div>
        </div>
      </div>
      <div className='mt-8'>
        <Slider {...settings}>
          {Data.map((items) => (
            <>
            <div
              className='mx-3 bg-white rounded-md shadow-md overflow-hidden p-4'
              key={items.id}
            >
              <Link href={items.href} target={'_blank'} className='text-lg font-sembold text-[#0a0e27] hover:text-[#c51b23] eas-in-out duration-300'>
              <div className='flex justify-center relative overflow-hidden'>
                <Image
                  src={items.image}
                  alt={items.title}
                  className='object-cover'
                  height={300}
                  width={700}
                />
              </div>
              <div className='text-lg font-semibold text-center py-8'>
                <p>{items.title}</p>
              </div>
              </Link>
            </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
}
