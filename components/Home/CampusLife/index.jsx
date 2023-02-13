import { MdNavigateNext } from 'react-icons/md';
import PhotoGrid from './PhotoGrid/PhotoGrid';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useRef, useState } from 'react';
import Image from 'next/image';

const CampusLife = () => {
  const [isOpen, setIsOpen] = useState(false); //collapse State
  const [collapseId, setCollapseId] = useState('clp1'); //collapse State
  // const swiper = useSwiper();
  // const prevRef = useRef(null);    // custom navigation refs
  // const nextRef = useRef(null);

  // handling collapse
  const handleCollapse = (id) => {
    setCollapseId(id);
    setIsOpen(!isOpen);
  };

  return (
    <section className=" h-screen w-full py-5 bg-background grid grid-cols-1 lg:grid-cols-6 lg:px-9 lg:pt-20">
      <div className="space-y-5 cursor-pointer ">
        <h1 className="text-4xl text-gray-800 font-bold">Explore campus</h1>
        <div className="space-y-2 lg:space-y-5">
          <div>
            <p
              id="clp1"
              onClick={() => handleCollapse('clp1')}
              className={`flex items-center text-xl ${
                !isOpen && collapseId === 'clp1'
                  ? 'pt-7   w-[320px] px-7 bg-white relative z-20'
                  : ''
              }     `}
            >
              <MdNavigateNext className="text-primary text-2xl" /> Columbus
            </p>
            <div
              className={` ${
                !isOpen && collapseId === 'clp1' ? 'block' : 'hidden'
              }  w-[320px] pb-8 px-8 leading-9 bg-white relative z-20 `}
            >
              <p className="">
                The Buckeye heart of The Ohio State University, located right in
                the heart of Ohio
              </p>
            </div>
          </div>

          <div>
            <p
              id="3"
              onClick={() => handleCollapse('clp3')}
              className={`flex items-center text-xl ${
                isOpen && collapseId === 'clp3'
                  ? 'pt-7  w-full lg:w-[320px] px-7 bg-white relative z-20'
                  : ''
              }     `}
            >
              <MdNavigateNext className="text-primary text-2xl" /> Lima
            </p>
            <div
              className={` ${
                isOpen && collapseId === 'clp3' ? 'block' : 'hidden'
              }  w-full lg:w-[320px] pb-8 px-8 leading-9 bg-white relative z-20 `}
            >
              <p className="">
                Developing leaders with the resources and strength of the
                state’s top university
              </p>
            </div>
          </div>
          <div>
            <p
              id="clp2"
              onClick={() => handleCollapse('clp2')}
              className={`flex items-center text-xl ${
                isOpen && collapseId === 'clp2'
                  ? 'pt-7   w-full lg:w-[320px] px-7 bg-white relative z-20'
                  : ''
              }     `}
            >
              <MdNavigateNext className="text-primary text-2xl" /> Anderson
            </p>
            <div
              className={` ${
                isOpen && collapseId === 'clp2' ? 'block' : 'hidden'
              } w-full lg:w-[320px] pb-8 px-8 leading-9 bg-white relative z-20 `}
            >
              <p className="">
                The Buckeye heart of The Ohio State University, located right in
                the heart of Ohio
              </p>
            </div>
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
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3200,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.1,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="lg:-mx-16">
            <PhotoGrid
              img1={`/assets/images/campus-life/campus1.jpg`}
              img2={`/assets/images/campus-life/campus2.jpg`}
              img3={`/assets/images/campus-life/campus3.jpg`}
            />
          </SwiperSlide>
          <SwiperSlide className="lg:-mx-16">
            <PhotoGrid
              img1={`/assets/images/campus-life/campus4.jpg`}
              img2={`/assets/images/campus-life/campus5.jpg`}
              img3={`/assets/images/campus-life/campus6.jpg`}
            />
          </SwiperSlide>
          <SwiperSlide className="lg:-mx-16">
            <PhotoGrid
              img1={`/assets/images/campus-life/campus7.jpg`}
              img2={`/assets/images/campus-life/campus8.jpg`}
              img3={`/assets/images/campus-life/campus2.jpg`}
            />
          </SwiperSlide>
          <SwiperSlide className="lg:-mx-16">
            <PhotoGrid
              img1={`/assets/images/campus-life/campus6.jpg`}
              img2={`/assets/images/campus-life/campus2.jpg`}
              img3={`/assets/images/campus-life/campus3.jpg`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CampusLife;
