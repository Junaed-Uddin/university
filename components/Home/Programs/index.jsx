import Image from "next/image";
import chose from "../../../public/assets/images/programChose/program.png"
import { BiTimer  } from 'react-icons/bi';
import { BsFillFileEarmarkArrowDownFill ,BsLayersFill  } from 'react-icons/bs';
import {SlBadge } from 'react-icons/sl';


const Programs = () => {
    return (
        <div className=" mt-10 bg-background   pb-10 mx-3">

            <div>
                <div className=" flex justify-center pt-10 ">
                    <div className="  grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 ">
                        <div className=" lg:col-span-2 pb-10">
                            <div className=" grid lg:grid-cols-2 md:grid-cols-2 max-w-[660px] gap-3  h-60 shadow-2xl p-3 rounded-lg bg-white ">
                                <div className=" pl-3 ">
                                    <h1 className=" text-3xl font-bold pt-3">Why You Choose <br /> Our Program</h1>
                                    <p className=" pt-2 text-sm">I was design to assist users with a wide range of texts and answer questions to the best of my ability</p>
                                    <button className=" p-3 mt-3 bg-violet-400  text-white rounded-lg">Learn More</button>
                                </div>
                                <div className=" flex justify-center p-6  ml-2 lg:visible  md:visible invisible">
                                    <Image
                                        src={chose}
                                        alt=''
                                        className=" w-44"
                                    />

                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center mb-6">
                            <div className=" w-80 h-60 rounded-lg  backdrop-blur-xl bg-white/50 p-8 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow-xl ease-in-out duration-500 ">

                                <BiTimer className=" text-white text-5xl bg-cyan-400 shadow-lg shadow-cyan-500/50 p-2 rounded-lg"></BiTimer>
                                <h3 className=" mt-4 text-lg font-bold">Flexible Time</h3>
                                <p className=" mt-3 text-sm">Flexible time, also known as flextime or flexi-time, refers to a work schedule.</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex justify-center">
                    <div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
                        <>
                            <div className="  w-80 h-60 rounded-lg  backdrop-blur-xl bg-white/50 p-8 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow-xl ease-in-out duration-500">

                                <BsFillFileEarmarkArrowDownFill className=" text-white text-5xl bg-violet-400 shadow-lg shadow-violet-400 p-2 rounded-lg"></BsFillFileEarmarkArrowDownFill>
                                <h3 className=" mt-4 text-lg font-bold">Access Any Where</h3>
                                <p className=" mt-3 text-sm">Flexible time, also known as flextime or flexi-time, refers to a work schedule.</p>

                            </div>
                        </>
                        <>
                            <div className="  w-80 h-60 rounded-lg  backdrop-blur-xl bg-white/50 p-8 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow-xl ease-in-out duration-500">

                                <BsLayersFill className=" text-white text-5xl bg-red-400 p-2 rounded-lg shadow-lg shadow-red-400"></BsLayersFill>
                                <h3 className=" mt-4 text-lg font-bold">Organize Program</h3>
                                <p className=" mt-3 text-sm">Flexible time, also known as flextime or flexi-time, refers to a work schedule.</p>

                            </div>
                        </>
                        <>
                            <div className="  w-80 h-60 rounded-lg  backdrop-blur-xl bg-white/50 p-8 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow-xl ease-in-out duration-500">

                                <SlBadge className=" text-white text-5xl bg-amber-400 shadow-lg shadow-amber-400 p-2 rounded-lg"></SlBadge>
                                <h3 className=" mt-4 text-lg font-bold">Certificate</h3>
                                <p className=" mt-3 text-sm">Flexible time, also known as flextime or flexi-time, refers to a work schedule.</p>

                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;