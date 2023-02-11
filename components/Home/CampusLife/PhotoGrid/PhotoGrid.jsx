import Image from 'next/image';
import React from 'react';

const PhotoGrid = () => {
  return (
    <div className="w-full lg:w-11/12  min-h-[300px] lg:min-h-[500px] grid grid-rows-1 lg:grid-rows-2 grid-cols-1 lg:grid-cols-3 gap-4">
      <div className=" row-span-2 col-span-2">
        <Image
          src="/assets/images/campus-life/home-explore-columbus1.jpg"
          width={800}
          height={800}
          alt="imag"
          className="w-full h-full "
        />
      </div>
      <div className=" hidden lg:block">
        <Image
          src="/assets/images/campus-life/home-explore-columbus1.jpg"
          width={650}
          height={600}
          alt="imag"
          className="w-full h-full"
        />
      </div>
      <div className="hidden lg:block ">
        <Image
          src="/assets/images/campus-life/home-explore-columbus1.jpg"
          width={650}
          height={600}
          alt="imag"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default PhotoGrid;
