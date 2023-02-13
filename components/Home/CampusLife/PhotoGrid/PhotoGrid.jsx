import Image from 'next/image';
import React from 'react';

const PhotoGrid = ({ img1, img2, img3 }) => {
  return (
    <div className="w-full lg:w-11/12  min-h-[300px] lg:min-h-[500px] grid grid-rows-1 lg:grid-rows-2 grid-cols-1 lg:grid-cols-3 gap-5">
      <div className=" row-span-2 col-span-2">
        <Image
          src={img1}
          width={800}
          height={800}
          alt="imag"
          objectFit="cover"
          className="w-full h-full lg:h-[500px] "
        />
      </div>
      <div className=" hidden lg:block">
        <Image
          src={img2}
          width={650}
          height={600}
          alt="imag"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="hidden lg:block ">
        <Image
          src={img3}
          width={650}
          height={600}
          alt="imag"
          className="w-full h-full"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default PhotoGrid;
