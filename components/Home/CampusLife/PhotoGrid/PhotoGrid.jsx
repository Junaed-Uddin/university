import Image from 'next/image';
import React from 'react';

const PhotoGrid = ({ img1, img2, img3 }) => {
  return (
    <div className="w-full lg:w-full  min-h-[300px] lg:min-h-[500px] grid grid-rows-1 lg:grid-rows-2 grid-cols-1 lg:grid-cols-3 gap-3">
      <div className=" row-span-2 col-span-2 relative group">
        <Image
          src={img1}
          width={800}
          height={800}
          alt="imag"
          objectFit="cover"
          className="w-full h-full cursor-pointer lg:h-[510px] "
        />
        <div className="bg-white w-full lg:w-[70%] absolute bottom-0 right-0 p-4 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
          <p className="text-gray-900 text-sm cursor-pointer">
            A popular study spot is creatively illuminated at the Chemical and
            Biomolecular Engineering and Chemistry building.
          </p>
        </div>
      </div>
      <div className=" hidden lg:block relative group">
        <Image
          src={img2}
          width={650}
          height={600}
          alt="imag"
          objectFit="cover"
          className="w-full h-full cursor-pointer"
        />
        <div className="bg-white w-full  absolute bottom-0 right-0 p-4 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
          <p className="text-gray-900 text-sm cursor-pointer">
            A popular study spot is creatively illuminated at the Chemical.
          </p>
        </div>
      </div>
      <div className="hidden lg:block relative group">
        <Image
          src={img3}
          width={650}
          height={600}
          alt="imag"
          className="w-full h-full cursor-pointer"
          objectFit="cover"
        />
        <div className="bg-white w-full  absolute bottom-0 right-0 p-4 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
          <p className="text-gray-900 text-sm cursor-pointer">
            A popular study spot is creatively illuminated at the Chemical.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
