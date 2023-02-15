import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import styles from "../../../styles/alumni.module.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

const Contact = () => {
    


    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const phone = form.phone.value;
    //     const messege = form.messege.value;

    //     const info = {name, email, phone, messege};

    //     console.log(info);
    // }
    return (
        <div className="bg-blue-100 pb-12 m-0">
            <Swiper slidesPerView={1} className="w-full h-full" effect="fade">
                <SwiperSlide className="relative w-full min-h-[calc(100vh-113px)] -z-10 h-full bg-gradient-to-r from-blue-900/50 to-black/50 !flex text-white flex-col justify-center  p-6">
                <img
                    src="/assets/images/contact/getIntouch.png"
                    alt="contact"
                    className="absolute w-full h-full object-cover top-0 left-0 -z-[2]"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-blue-900/50 to-black/50 -z-[1]" />
                <h1 className="text-4xl xl:text-7xl text-center xl:px-16 font-black">
                    Get In Touch
                </h1>
                <p className="text-center mt-8">For any requirement contact us through below given information</p>
                </SwiperSlide>

                <SwiperSlide className="relative w-full min-h-[calc(100vh-113px)] -z-10 h-full bg-gradient-to-r from-blue-900/50 to-black/50 !flex text-white flex-col justify-center  p-6">
                <img
                    src="/assets/images/contact/getIntouch.png"
                    alt="contact"
                    className="absolute w-full h-full object-cover top-0 left-0 -z-[2]"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-blue-900/50 to-black/50 -z-[1]" />
                <h1 className="text-6xl mb-8 font-black">180 Majors & Minors</h1>
                <p className="text-center mt-8">For any requirement contact us through below given information</p>
                </SwiperSlide>
            </Swiper>
            <section>
                <div className='text-center'>
                        <div className="relative mx-6 xl:mx-auto -translate-y-[120px] z-10 rounded-lg grid sm:grid-cols-2 xl:grid-cols-3 px-12 md:px-20 gap-6 ">
                            <div className="bg-blue-100 top:shadow-lg  py-6">
                                <FaPhoneAlt className="w-12 h-10 mx-auto" />
                                <p className="text-[20px] mt-6">+5-8435-8255-632</p>
                                <p className="p-4">Contact via direct Phone call. And get the information you need.</p>
                            </div>
                            <div className="bg-blue-100 top:shadow-lg py-6">
                                <HiOutlineMail className="w-12 h-12 mx-auto" />
                                <p className="text-[20px] mt-6">summer@field.com</p>
                                <p className="p-4">Or contact via E-mail. And get the information you need.</p>
                            </div>
                            <div className="bg-blue-100 top:shadow-lg py-6">
                            <FaMapMarkerAlt className="w-12 h-12 mx-auto" />
                                <p className="text-[20px] mt-6">B-234, Sector-1, Uttora, Dhaka</p>
                                <p className="p-4">Or contact the Office directly. And get the information you need.</p>
                            </div>
                        </div>
                    </div>
            </section>
            <section className='px-12 md:px-20 relative mt-[-50px]'>
                {/* form section  */}
                <div className="">
                    <div className='md:flex gap-8'>
                        <div className='md:w-1/2 mx-auto'>
                            <input type="text" name="name" id="" placeholder='NAME' className='w-full shadow-md border-none outline-none rounded-md p-4 mb-3' required />
                            <input type="email" name="email" id="" placeholder='EMAIL' className='w-full shadow-md border-none outline-none rounded-md p-4 mb-3' required />
                            <input type="text" name="phone" id="" placeholder='PHONE' className='w-full shadow-md border-none outline-none rounded-md p-4 mb-3' required />
                            <input type="text" name="subject" id="" placeholder='SUBJECT' className='w-full shadow-md border-none outline-none rounded-md p-4 mb-3' required />
                        </div>
                        <div className='md:w-1/2 mx-auto'>
                            <textarea name="messege" id="" rows={9} placeholder='MESSEGE' className='w-full shadow-md border-none outline-none rounded-md p-5 mb-4' required />
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-5 w-full">
                    <button className="flex justify-center items-center gap-1 sm:text-lg md:text-xl font-display bg-primary p-4 sm:w-[150px] text-paper">
                        <input type="submit" value="Send Message" />
                    </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;