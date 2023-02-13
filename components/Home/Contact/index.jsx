
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
        <section className=' bg-[url(/assets/images/contact/map23.jpg)] bg-no-repeat bg-cover opacity-90 p-12 md:p-20'>
            <div className='text-center text-white mb-12'>
                <h1 className='text-3xl text-white font-semibold uppercase mb-12'>Contact Us</h1>
                <p>Phone: +88017********</p>
                <p>Email: <span className='text-blue-300'>kingstaruniversity@gmail.com</span></p>
                <p>Address: B-234, Sector-1, Uttora, Dhaka</p>
            </div>
            {/* form section  */}
            <div>
                <div className='md:flex gap-8'>
                    <div className='md:w-1/2 mx-auto'>
                        <input type="text" name="name" id="" placeholder='NAME' className='w-full border-none outline-none rounded-md p-3 mb-5' required />
                        <input type="email" name="email" id="" placeholder='EMAIL' className='w-full border-none outline-none rounded-md p-3 mb-5' required />
                        <input type="text" name="phone" id="" placeholder='PHONE' className='w-full border-none outline-none rounded-md p-3 mb-5' required />
                        <input type="text" name="subject" id="" placeholder='SUBJECT' className='w-full border-none outline-none rounded-md p-3 mb-5' required />
                    </div>
                    <div className='md:w-1/2 mx-auto'>
                        <textarea name="messege" id="" rows={9} placeholder='MESSEGE' className='w-full border-none outline-none rounded-md p-5 mb-4' required />
                    </div>
                </div>
                <div className="flex justify-center items-center mt-5 w-full">
                <button className="flex justify-center items-center gap-1 sm:text-lg font-display bg-primary px-4 py-2 sm:w-[150px] text-paper">
                    <input type="submit" value="Submit" />
                </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;