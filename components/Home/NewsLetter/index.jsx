import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

const NewsLetter = () => {
  return (
    <section className="mt-10">
      <div className=" h-72 flex flex-col justify-center items-center mx-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-sans max-w-[450px] text-on-secondary tracking-wider font-bold">
          Get the latest news delivered to you inbox
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-0 justify-center items-center w-full mt-8">
          <input
            className="h-11 w-[440px] sm:w-[450px] pl-4 outline-none border-none"
            type="text"
            placeholder="Your Email"
          />
          <button className="flex w-[160px] md:w-[180px] justify-center items-center gap-2 text-on-primary bg-primary h-11 text-md">
            <span>Subscribe</span>
            <HiArrowSmRight size={18}></HiArrowSmRight>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
