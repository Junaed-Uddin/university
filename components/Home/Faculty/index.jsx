import styles from "@/styles/faculty.module.css";
const Faculty = () => {
    return (
        <div className=" text-center bg-background gip sm:pt-10 mb-5">
            <p>EVERYTHING YOU NEED</p>
            <div className="relative py-2">
                <h2 className={`text-4xl text-txt-primary text-center font-bold relative`}>
                    Faculty Resource
                    <span className={`${styles.textUnderline}`}></span>
                </h2>
            </div>

            <p className="mt-5">Use these quick links to find the systems and sites need most.</p>
            <div className=" flex justify-center mt-10">

                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-12 gap-y-3 ">
                    <div>
                        <div className=" w-80 ">
                            <img className={`w-80 h-52 ${styles.imgShadow}`} src="https://images.pexels.com/photos/6755058/pexels-photo-6755058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=" " />

                        </div>
                        <div className=" -translate-y-5">

                        <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-56 p-3 `}>Computer Science</button>

                        </div>
                    </div>



             
                    <div>
                        <div className=" w-80">
                            <img className={`w-80 h-52 ${styles.imgShadow}`} src="https://images.pexels.com/photos/3672355/pexels-photo-3672355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=" " />

                        </div>
                        <div className=" -translate-y-5">

                        <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>Electrical Engineering</button>

                        </div>
                    </div>
                    <div>
                        <div className=" w-80">
                            <img className={`w-80 h-52 ${styles.imgShadow}`} src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=" " />

                        </div>
                        <div className=" -translate-y-5">

                        <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>Civil Engineering</button>

                        </div>
                    </div>


                    {/* <div>
                        <div className=" w-72">
                            <img className={`w-72 h-40 ${styles.imgShadow}`} src="https://images.pexels.com/photos/7777182/pexels-photo-7777182.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" " />

                        </div>
                        <div className=" -translate-y-5">

                        <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>ENGLISH</button>

                        </div>
                    </div> */}
                    <div>
                        <div className=" w-80">
                            <img className={`w-80 h-52 sm:w-full ${styles.imgShadow}`}  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=" " />

                        </div>
                        <div className=" -translate-y-5">

                        <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>DBA</button>

                        </div>
                    </div>
                    <div>
                        <div className=" w-80">
                            <img className={`w-80 h-52 ${styles.imgShadow}`} src="https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=" " />

                        </div>
                        <div className=" -translate-y-5">

                        <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>LAW</button>

                        </div>
                    </div>
                    <div>
                        <div className=" w-80">
                            <img className={`w-80 h-52 ${styles.imgShadow}`} src="https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=" " />

                        </div>
                        <div className=" -translate-y-5">

                        <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>MECHANICS</button>

                        </div>
                    </div>
                    <div>
                        <div className=" w-80">
                            <img className={`w-80 h-52 ${styles.imgShadow}`} src="https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" " />

                        </div>
                        <div className=" -translate-y-5">

                        <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>Physics</button>

                        </div>
                    </div>
                    <div>
                        <div className=" w-80">
                            <img className={`w-80 h-52 ${styles.imgShadow}`} src="https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=" " />

                        </div>
                        <div className=" -translate-y-5">

                        <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>Chemistry</button>

                        </div>
                    </div>
                    
                    
                    
                    
                    
              
                    
                    

                </div>

            </div>



        </div>
    );
};

export default Faculty;