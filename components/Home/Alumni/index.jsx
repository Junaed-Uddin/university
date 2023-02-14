import styles from "../../../styles/alumni.module.css";
import alumni from "../../../public/assets/images/alumni/alumni.jpg";
import Image from "next/image";
import { HiArrowSmRight } from "react-icons/hi";

const Alumni = () => {
  return (
    <section className="mt-10 mb-10">
      <div className="relative">
        <h2
          className={`text-4xl text-txt-primary text-center font-bold relative`}
        >
          Alumni
          <span className={`${styles.textUnderline}`}></span>
        </h2>
      </div>

      {/* Alumni Flex Container */}
      <div className="flex flex-col-reverse sm:flex-row justify-center items-center mt-16 relative w-full">
        {/* Text container  */}
        <div
          className={`bg-white p-10 md:p-20 md:h-[400px] shadow-xl relative -translate-y-8 sm:translate-y-0 sm:translate-x-16 lg:translate-x-24 z-20 sm:w-1/2 mx-6`}
        >
          <div className={`${styles.borderBox}`}>
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl text-center font-display font-semibold relative w-full`}
            >
              Global Alumni Events
              <span className={`${styles.textUnderline}`}></span>
            </h2>
            <p className={`${styles.alumniText} text-lg sm:text-xl mt-7 md:max-w-[500px]`}>
              From virtual to in-person, the Alumni Office organizes
              exclusive events throughout the year and around the world.
              You can find also find information on University wide events.
            </p>
            <div className="flex justify-center items-center mt-5 w-full">
              <button className="flex justify-center items-center gap-1 sm:text-lg font-display bg-primary px-4 py-2 sm:w-[150px] text-paper">
                <span>Learn More</span>
                <HiArrowSmRight></HiArrowSmRight>
              </button>
            </div>
          </div>
        </div>

        {/* Image Container  */}
        <div className="mx-3 md:mx-5 sm:w-1/2">
          <Image
            src={alumni}
            alt="alumni-association"
            quality={100}
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default Alumni;
