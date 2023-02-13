import React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';

const NewsLetter = () => {
    return (
        <section className='mt-10'>
            <div className='bg-gray-500 h-72 flex flex-col justify-center items-center '>
                <h2 className='text-4xl font-body text-center max-w-[400px] leading-snug text-on-secondary font-bold'>Get the latest news delivered to you inbox</h2>
                <div className='flex justify-center items-center w-full mt-5'>
                    <input className='h-11 w-2/6 pl-4' type="text" placeholder='Your Email'/>
                    <button className='flex justify-center items-center gap-2 text-on-primary bg-primary h-11 px-8 text-md'>
                        <span>Subscribe</span>
                        <HiArrowSmRight size={18}></HiArrowSmRight>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;