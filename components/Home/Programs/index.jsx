import Image from "next/image";
import chose from "../../../public/assets/images/programChose/program.png"
import { FaUserGraduate } from 'react-icons/fa';
import { GiArchiveResearch} from 'react-icons/gi';
import { GiTeacher } from 'react-icons/gi';
import { GiRank3} from 'react-icons/gi';
import styles from "@/styles/program.module.css";


const Programs = () => {
    return (
        <div className=" mt-10 bg-background   pb-10 mx-3">

            <div className="relative">
                <h2 className={`text-4xl text-txt-primary text-center font-bold relative`}>
                Why You Choose <br /> Our Program
                    <span className={`${styles.textUnderline}`}></span>
                </h2>
                
            </div>
            <div className="  flex justify-center">
            <p className=" mt-4 p-3 text-center max-w-[700px]">The main purpose of the us , Is to provide an environment In which faculty and students Can discover and transmit The knowledge, wisdom, and values. </p>

            </div>
            

            <div>
                <div className=" flex justify-center pt-10 ">
                    <div className="  grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 ">
                        <div className=" lg:col-span-2 pb-10">
                            <div className=" grid lg:grid-cols-2 md:grid-cols-2 max-w-[660px] gap-3  h-60 shadow-2xl p-3 rounded-lg bg-white ">
                                <div className=" pl-3 ">
                                    <h1 className=" text-3xl font-bold pt-3">Start Chat with Us</h1>
                                    <p className=" pt-2 text-sm">I was design to assist users with a wide range of texts and answer questions to the best of my ability</p>
                                    <button className=" p-3 mt-3 bg-blue-500 shadow-lg shadow-blue-400 text-white rounded-lg">Start Chat</button>
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

                                <FaUserGraduate className=" text-white text-5xl bg-cyan-400 shadow-lg shadow-cyan-500/50 p-2 rounded-lg"></FaUserGraduate>
                                <h3 className=" mt-4 text-lg font-bold">Graduate Education</h3>
                                <p className=" mt-3 text-sm">We offer Undergraduate and Postgraduate education <a className=" text-blue-500  cursor-pointer">see more</a></p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex justify-center">
                    <div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
                        <>
                            <div className="  w-80 h-60 rounded-lg  backdrop-blur-xl bg-white/50 p-8 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow-xl ease-in-out duration-500">

                                <GiArchiveResearch className=" text-white text-5xl bg-violet-400 shadow-lg shadow-violet-400 p-2 rounded-lg"></GiArchiveResearch>
                                <h3 className=" mt-4 text-lg font-bold">Research</h3>
                                <p className=" mt-3 text-sm">We provide wide range of research materials.<a className=" text-blue-500  cursor-pointer">see more</a></p>

                            </div>
                        </>
                        <>
                            <div className="  w-80 h-60 rounded-lg  backdrop-blur-xl bg-white/50 p-8 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow-xl ease-in-out duration-500">

                                <GiTeacher className=" text-white text-5xl bg-red-400 p-2 rounded-lg shadow-lg shadow-red-400"></GiTeacher>
                                <h3 className=" mt-4 text-lg font-bold">Graduate & Professional</h3>
                                <p className=" mt-3 text-sm">We have arrange workshops to make students more professional.<a className=" text-blue-500  cursor-pointer">see more</a> </p>

                            </div>
                        </>
                        <>
                            <div className="  w-80 h-60 rounded-lg  backdrop-blur-xl bg-white/50 p-8 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:shadow-xl ease-in-out duration-500">

                                <GiRank3 className=" text-white text-5xl bg-amber-400 shadow-lg shadow-amber-400 p-2 rounded-lg"></GiRank3>
                                <h3 className=" mt-4 text-lg font-bold">Rankings</h3>
                                <p className=" mt-3 text-sm">We made top 5 in last year. <a className=" text-blue-500  cursor-pointer">see more</a></p>

                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;