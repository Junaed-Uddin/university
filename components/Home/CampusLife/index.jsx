import { MdNavigateNext } from 'react-icons/md';
import PhotoGrid from './PhotoGrid/PhotoGrid';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useRef } from 'react';

const CampusLife = () => {
  const swiper = useSwiper();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className=" h-screen w-full bg-background grid grid-cols-1 lg:grid-cols-6 lg:p-9">
      <div className="space-y-5 ">
        <h1 className="text-4xl font-bold">Explore campus</h1>
        <div className="space-y-5">
          <div>
            <p className="flex items-center text-xl">
              <MdNavigateNext className="text-primary text-2xl" /> Columbus
            </p>
          </div>
          <div>
            <p className="flex items-center text-xl">
              <MdNavigateNext className="text-primary text-2xl" /> Columbus
            </p>
          </div>
          <div>
            <p className="flex items-center text-xl">
              <MdNavigateNext className="text-primary text-2xl" /> Columbus
            </p>
          </div>
          <div>
            <p className="flex items-center text-xl">
              <MdNavigateNext className="text-primary text-2xl" /> Columbus
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-5 h-full  ">
        {/* <div ref={prevRef} className="cursor-pointer">
          Hello
        </div>
        <div ref={nextRef} className="cursor-pointer">
          next
        </div> */}

        <Swiper
          //   slidesPerView={'auto'}
          slidesPerView={1}
          spaceBetween={20}
          //   loop={true}
          autoplay={{
            delay: 3200,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current ? prevRef.current : undefined,
            nextEl: nextRef.current ? nextRef.current : undefined,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <PhotoGrid />
          </SwiperSlide>
          <SwiperSlide className="lg:-mx-24">
            <PhotoGrid />
          </SwiperSlide>
          <SwiperSlide className="lg:-mx-24">
            <PhotoGrid />
          </SwiperSlide>
          <SwiperSlide className="lg:-mx-24">
            <PhotoGrid />
          </SwiperSlide>
          <SwiperSlide className="lg:-mx-24">
            <PhotoGrid />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CampusLife;
