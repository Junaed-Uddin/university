import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaUniversity as UniversityIcon,
  FaUserGraduate as GraduateIcon,
} from "react-icons/fa";
import { MdSportsTennis as SportIcon } from "react-icons/md";
import { TbSocial as SocialIcon } from "react-icons/tb";
// import { motion, AnimatePresence } from "framer-motion";

// const slideVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// const elVariants = {
//   hidden: { x: -100, opacity: 0 },
//   visible: { x: 0, opacity: 1 },
// };

function HeroSection() {
  return (
    <section>
      <Swiper slidesPerView={1} className="w-full" effect="fade">
        <SwiperSlide className="relative w-full min-h-[calc(100vh-113px)] -z-10 h-full bg-gradient-to-r from-blue-900/50 to-black/50 !flex text-white flex-col justify-center gip">
          <img
            src="/assets/images/hero/campus.jpg"
            alt="Hero 1"
            className="absolute w-full h-full object-cover top-0 left-0 -z-[2]"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-blue-900/50 to-black/50 -z-[1]" />
          <h2 className="text-xl lg:text-2xl mb-2 px-8 xl:px-14 font-bold">
            SummerField has more than
          </h2>
          <h1 className="text-4xl xl:text-7xl mb-8 px-8 xl:px-16 font-black">
            180 Majors & Minors
          </h1>
          <button className="relative mx-8 xl:mx-14 capitalize text-xl text-primary bg-white px-5 py-2 w-fit after:content-[''] after:absolute after:w-2 after:h-full after:bg-primary after:top-0 after:left-0 after:transition-[width] hover:after:w-full after:-z-[1] hover:text-white z-10 transition">
            Take a tour
          </button>
        </SwiperSlide>

        <SwiperSlide className="relative w-full min-h-[calc(100vh-113px)] -z-10 h-full bg-gradient-to-r from-blue-900/50 to-black/50 !flex text-white flex-col justify-center  gip">
          <img
            src="/assets/images/hero/1.jpg"
            alt="Hero 1"
            className="absolute w-full h-full object-cover top-0 left-0 -z-[2]"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-blue-900/50 to-black/50 -z-[1]" />
          <h2 className="text-2xl mb-2 font-bold">SummerField has more than</h2>
          <h1 className="text-6xl mb-8 font-black">180 Majors & Minors</h1>
          <button className="relative capitalize text-xl text-primary bg-white px-5 py-2 w-fit after:content-[''] after:absolute after:w-2 after:h-full after:bg-primary after:top-0 after:left-0 after:transition-[width] hover:after:w-full after:-z-[1] hover:text-white z-10 transition">
            Take a tour
          </button>
        </SwiperSlide>
      </Swiper>
      {/* <div className="w-full flex h-[calc(100vh-113px)] bg-[url(/assets/images/hero/1.jpg)] bg-no-repeat bg-center bg-cover">
        <div className="w-full h-full bg-gradient-to-r from-blue-900/50 to-black/50 flex  text-white flex-col justify-center  p-6">
          <h2 className="text-2xl mb-2 font-bold">SummerField has more than</h2>
          <h1 className="text-6xl mb-8 font-black">180 Majors & Minors</h1>
          <button className="relative capitalize text-xl text-primary bg-white px-5 py-2 w-fit after:content-[''] after:absolute after:w-2 after:h-full after:bg-primary after:top-0 after:left-0 after:transition-[width] hover:after:w-full after:-z-[1] hover:text-white z-10 transition">
            Take a tour
          </button>
        </div>
      </div> */}
      <div className="relative w-80% xl:w-[calc(1300px)] mx-6 xl:mx-auto bg-paper border -translate-y-[60px] z-10 shadow-lg shadow-blue-600/20 rounded-lg grid sm:grid-cols-2 xl:grid-cols-4 px-10 py-4 md:py-10 gap-10 ">
        {/* University Life */}
        <div className="flex gap-5">
          <UniversityIcon size={60} className="text-blue-500" />
          <div>
            <p className="text-2xl text-primary uppercase font-semibold">
              University Life
            </p>
            <p className="text-txt-secondary">Overall in here</p>
          </div>
        </div>
        {/* Graduation */}
        <div className="flex gap-5">
          <GraduateIcon size={60} className="text-blue-500" />
          <div>
            <p className="text-2xl text-primary">Graduation</p>
            <p className="text-txt-secondary">Getting Diploma</p>
          </div>
        </div>
        {/* University Life */}
        <div className="flex gap-5">
          <SportIcon size={60} className="text-blue-500" />
          <div>
            <p className="text-2xl text-primary">Athletics</p>
            <p className="text-txt-secondary">Sport Clubs</p>
          </div>
        </div>
        {/* University Life */}
        <div className="flex gap-5">
          <SocialIcon size={60} className="text-blue-500" />
          <div>
            <p className="text-2xl text-primary">Social</p>
            <p className="text-txt-secondary">Overall in here</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// function HeroSection() {
//   return (
//     <section className="min-h-[300px] py-10 sm:py-8 px-6 relative text-white">
//       {/* Parent Box */}
//       <img
//         src="/assets/images/footer/university.jpg"
//         alt="Hero Image"
//         className="absolute w-full h-full object-cover top-0 left-0 brightness-50 z-[-1]"
//       />
//       <div className="absolute w-full h-full object-cover top-0 left-0 bg-gradient-to-r from-blue-600/20 via-purple-500/0 to-blue-500/0" />
//       <div className="relative w-[300px] h-[400px] sm:h-[300px]  border-[10px] border-secondary border-r-0 sm:ml-10 md:ml-[10vw]">
//         {/* content box */}
//         <div className="absolute h-[380] w-[80vw] md:w-[600px] top-[50%] p-4 -translate-y-[50%]">
//           <h1 className="capitalize text-md font-semibold">
//             Learn from the best
//           </h1>
//           <h2 className="uppercase text-2xl font-bold">
//             {" "}
//             The <span className="text-blue-400">best university</span> of the
//             state
//           </h2>
//           <p className="">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut
//             consequatur impedit cumque consequuntur perspiciatis nesciunt minima
//           </p>
//           <button className="capitalize text-xl px-4 py-2 bg-primary mt-3 rounded-md hover:shadow-lg hover:shadow-blue-600/30 transition">
//             Take a tour
//           </button>
//         </div>
//         {/*top right border */}
//         <div className="absolute w-[10px] h-20 sm:h-[60px] top-0 bg-secondary right-0" />
//         {/* bottom right border */}
//         <div className="absolute w-[10px] h-20 sm:h-[60px] bottom-0 bg-secondary right-0" />
//       </div>
//     </section>
//   );
// }

export default HeroSection;
