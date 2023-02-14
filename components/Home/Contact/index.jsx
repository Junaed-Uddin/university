import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import styles from "../../../styles/alumni.module.css";

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
        <section className='bg-blue-100 p-12 md:p-20'>
            <div className='text-center'>
                <h2
                    className={`text-4xl text-txt-primary text-center font-display font-bold relative`}
                    >
                    Contact Us
                    <span className={`${styles.textUnderline}`}></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white mt-14">
                    <div className="bg-blue-600 py-6 hover:scale-105 duration-1000 hover:mt-[-10px]">
                        <FaPhoneAlt className="w-12 h-10 mx-auto" />
                        <p className="text-[20px] mt-6">+88017********</p>
                    </div>
                    <div className="bg-blue-600 py-6 hover:scale-105 duration-1000 hover:mt-[-10px] ">
                        <HiOutlineMail className="w-12 h-12 mx-auto" />
                        <p className="text-[20px] mt-6">summerfu@gmail.com</p>
                    </div>
                    <div className="bg-blue-600 py-6 hover:scale-105 duration-1000 hover:mt-[-10px]">
                    <FaMapMarkerAlt className="w-12 h-12 mx-auto" />
                        <p className="text-[20px] mt-6">B-234, Sector-1, Uttora, Dhaka</p>
                    </div>
                </div>
            </div>
            {/* form section  */}
            <div className="mt-14">
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
    );
};

export default Contact;