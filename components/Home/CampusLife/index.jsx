import { MdNavigateNext } from 'react-icons/md';
import PhotoGrid from './PhotoGrid/PhotoGrid';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useRef, useState } from 'react';
import Image from 'next/image';

const CampusLife = () => {
  const [isDefaultOpen, setIsDefaultOpen] = useState(false); //default collapse State
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
    <section className=" lg:h-full w-full py-5 gip bg-background grid grid-cols-1 lg:grid-cols-6 lg:px-9 lg:pt-20 mb-20 lg:mb-0">
      <div className="space-y-0 lg:space-y-5 cursor-pointer  ">
        <div className="space-y-3 pb-8 px-3 lg:p-0">
          <h1 className="text-3xl lg:text-4xl text-gray-800 font-bold">
            Explore campus
          </h1>
          <p className="text-sm lg:hidden">
            Explore our Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        {/* large screen Cards */}
        <div className="hidden lg:block  lg:space-y-5 ">
          <div>
            <p
              id="clp1"
              onClick={() => handleCollapse('clp1')}
              className={`flex items-center text-primary font-semibold text-xl ${
                !isOpen && collapseId === 'clp1'
                  ? 'pt-7 w-full lg:w-[320px] px-7 bg-white relative z-20'
                  : ''
              }     `}
            >
              <MdNavigateNext className="text-primary text-2xl" /> Faculty of
              Arts
            </p>
            <div
              className={` ${
                !isOpen && collapseId === 'clp1' ? 'block' : 'hidden'
              } w-full lg:w-[320px] pb-8 px-8 text-sm leading-7 bg-white relative z-20 pt-2`}
            >
              <p className="">
                This is the Faculty where you can find from Law and Literary
                Studies to Journalism and Hotel Management.
              </p>
            </div>
          </div>
          <div>
            <p
              id="3"
              onClick={() => handleCollapse('clp3')}
              className={`flex items-center text-primary font-semibold text-xl ${
                isOpen && collapseId === 'clp3'
                  ? 'pt-7  w-full lg:w-[320px] px-7 bg-white relative z-20'
                  : ''
              }     `}
            >
              <MdNavigateNext className="text-primary text-2xl" /> Our library
            </p>
            <div
              className={` ${
                isOpen && collapseId === 'clp3' ? 'block' : 'hidden'
              } w-full lg:w-[320px] pb-8 px-8 text-sm leading-7 bg-white relative z-20 pt-2 `}
            >
              <p className="">
                We have one of the richest and oldest library Of our country
                more than 1000 students can enjoy their time hare together
              </p>
            </div>
          </div>

          <div>
            <p
              id="2"
              onClick={() => handleCollapse('clp2')}
              className={`flex items-center text-primary font-semibold text-xl ${
                !isOpen && collapseId === 'clp2'
                  ? 'pt-7  w-full lg:w-[320px] px-7 bg-white relative z-20'
                  : ''
              }     `}
            >
              <MdNavigateNext className="text-primary text-2xl" /> Acquisition
            </p>
            <div
              className={` ${
                !isOpen && collapseId === 'clp2' ? 'block' : 'hidden'
              } w-full lg:w-[320px] pb-8 px-8 text-sm leading-7 bg-white relative z-20 pt-2 `}
            >
              <p className="">
                A journey of every document in the Library to reach its readers
                starts from the acquition section
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* slide Images */}
      <div className="lg:col-span-5 h-full relative">
        <Swiper
          //   slidesPerView={'auto'}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3200,
          }}
          breakpoints={{
            800: {
              slidesPerView: 1.1,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="">
            <PhotoGrid
              img1={`/assets/images/campus-life/campus1.jpg`}
              img2={`/assets/images/campus-life/campus2.jpg`}
              img3={`/assets/images/campus-life/campus3.jpg`}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <PhotoGrid
              img1={`/assets/images/campus-life/campus4.jpg`}
              img2={`/assets/images/campus-life/campus5.jpg`}
              img3={`/assets/images/campus-life/campus6.jpg`}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <PhotoGrid
              img1={`/assets/images/campus-life/campus7.jpg`}
              img2={`/assets/images/campus-life/campus8.jpg`}
              img3={`/assets/images/campus-life/campus2.jpg`}
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <PhotoGrid
              img1={`/assets/images/campus-life/campus6.jpg`}
              img2={`/assets/images/campus-life/campus2.jpg`}
              img3={`/assets/images/campus-life/campus3.jpg`}
            />
          </SwiperSlide>
        </Swiper>

        {/* small screen cards */}
        <div className="absolute -bottom-24 left-4 z-20 block lg:hidden w-11/12  bg-white p-5 text-center shadow-xl ">
          <p className="text-lg font-semibold pb-2">
            Explore Three different quadrangle
          </p>
          <ul className="list-none space-y-1">
            <li>
              <p>Columbus - The Biggest quadrangle</p>
            </li>
            <li>
              <p>Lima - The Oldest and Greatest</p>
            </li>
            <li>
              <p>Anderson - New and Most Advance</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
