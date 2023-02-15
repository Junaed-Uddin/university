import styles from "@/styles/faculty.module.css";
const Faculty = () => {
    return (
        <div className=" text-center bg-background sm:p-10 mb-5">
            <p>EVERYTHING YOU NEED</p>
            <div className="relative py-2">
                <h2 className={`text-4xl text-txt-primary text-center font-bold relative`}>
                    Faculty Resource
                    <span className={`${styles.textUnderline}`}></span>
                </h2>
            </div>

            <p className="mt-5">Use these quick links to find the systems and sites need most.</p>
            <div className=" flex justify-center mt-10">

                <div className="grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1    gap-7 ">
                    <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>CSE</button>
                    <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>EEE</button>
                    <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>CIVIL</button>
                    <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>ENGLISH</button>
                    <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>DBA</button>
                    <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>LIBRARY</button>
                    <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>LAW</button>
                    <button className={`${styles.opt} ${styles.optHover} text-white bg-blue-600 w-60 p-3 `}>MECHANICS</button>

                </div>

            </div>



        </div>
    );
};

export default Faculty;