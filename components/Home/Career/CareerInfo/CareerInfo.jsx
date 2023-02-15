import Image from "next/image";
import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import styles from "../../../../styles/career.module.css";

const CareerInfo = ({ careerInfo }) => {
  const { heading, imageURL, description, buttonName } = careerInfo;
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className={`${styles.imgHover} img`}>
        <Image
          className="rounded-full object-cover w-[300px] h-[300px]"
          src={imageURL}
          alt="career-facilities"
          quality={100}
        />
      </div>
      <div className="mt-10 w-full text-center max-w-[350px]">
        <h2 className="text-2xl font-bold mb-3">{heading}</h2>
        <p className="mb-3 sm:h-20">{description}</p>
        <div className="flex justify-center items-center mb-5 sm:mb-0">
          <button className="flex justify-center items-center text-primary font-semibold mt-2">
            <span>{buttonName}</span>
            <HiArrowSmRight></HiArrowSmRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerInfo;
