'use client';
import { buttonVariants } from '@/components/ui/Button';
import Overlay from '@/components/ui/Overlay';
import { data } from '@/data/herocontents';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <section className=' mt-20 h-[calc(100vh-5rem)]  w-full '>
      <Swiper
        pagination={{ clickable: true }}
        speed={500}
        grabCursor={true}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className='mySwiper h-full  w-full '
      >
        {data?.map((slide) => (
          <SwiperSlide key={slide.heading} className='h-full w-full'>
            <div className='container h-full'>
              <div className=' relative  grid h-[70%] grid-cols-10 gap-10 bg-gray'>
                <div className='col-span-5  px-20 pb-10 pt-20'>
                  <div className='flex h-full flex-col items-start  gap-5'>
                    <h1>{slide.heading}</h1>
                    <p className=''>{slide.description}</p>
                    <Link
                      href={'/products'}
                      className={cn('', buttonVariants({ size: 'auto' }))}
                    >
                      See Products Now
                    </Link>
                  </div>
                </div>
                <div className='col-span-5 h-full overflow-hidden  p-10 pt-0'>
                  <Image
                    src={slide.image}
                    width={520}
                    height={780}
                    alt={slide.heading}
                    className='h-full w-full object-cover '
                  />
                </div>
                <div className='absolute bottom-[-35%] left-0 right-0 grid h-[45%]  grid-cols-3 gap-5 px-20'>
                  {slide?.products?.map((product) => (
                    <div
                      key={product.title}
                      className='grid h-full grid-cols-2 border-8 border-white bg-gray'
                    >
                      <div className='image h-full w-full overflow-hidden'>
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={480}
                          height={720}
                          priority
                          className='h-full w-full object-cover '
                        />
                      </div>
                      <div className='flex flex-col justify-center gap-2.5 p-3'>
                        <small className='text-xl text-primary'>
                          {product.title}
                        </small>
                        <p className='text-lg'>
                          {product.description.substring(0, 50)}
                        </p>
                        <Link
                          href={'/products'}
                          className={cn('', buttonVariants({ size: 'auto' }))}
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
