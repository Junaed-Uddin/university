import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaRegDotCircle, FaUserGraduate } from "react-icons/fa";
import scholarship from "../../../public/assets/images/scholarship/scholarship.jpg";
import Image from "next/image";
import styles from "../../../styles/scholarship.module.css";
import Accordion from "./Accordion";

const Scholarship = () => {
    return (
        <div className="pb-5 gip">
            <div className=" pb-12">
                <h2 className=" font-bold text-3xl text-primary my-4 flex gap-4 pb-6">
                    <FaUserGraduate />
                    Scholarships Sources
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div
                        className={`shadow-xl hover:shadow-blue-500/30 hover:shadow-2xl transition-all p-7 ${styles.modifyBorder}`}
                    >
                        <h2 className=" text-primary text-lg font-semibold pb-5">
                            Peace Ambassador Scholarship
                        </h2>
                        <p className="pb-5">
                            Applications are now open for the European
                            Commission Peace Ambassador Scholarship. This
                            scholarship will be given to students aged 18 to 30
                            years from more than 190 countries of the world
                            including Bangladesh. Scholarship students under
                            this program will have the opportunity to
                            participate in The One Young World Summit to be held
                            in Manchester
                        </p>
                        <Link
                            href=""
                            className="flex items-center gap-2 text-primary font-semibold"
                        >
                            Read More{" "}
                            <HiOutlineArrowNarrowRight className="text-xl" />
                        </Link>
                    </div>
                    <div
                        className={`shadow-xl p-7 hover:shadow-blue-500/30 hover:shadow-2xl transition-all ${styles.modifyBorder}`}
                    >
                        <h2 className=" text-primary text-lg font-semibold pb-5">
                            Commonwealth Scholarship
                        </h2>
                        <p className="pb-5">
                            The Commonwealth offers scholarships. Generally,
                            Commonwealth Scholarships allow students from low-
                            and middle-income countries to study Master on
                            scholarships at various UK universities. The
                            Commonwealth Scholarship for Masters is funded by
                            the UK Department for International Development
                            (DFID).
                        </p>
                        <Link
                            href=""
                            className="flex items-center gap-2 text-primary font-semibold"
                        >
                            Read More{" "}
                            <HiOutlineArrowNarrowRight className="text-xl" />
                        </Link>
                    </div>
                    <div
                        className={`shadow-xl hover:shadow-blue-500/30 hover:shadow-2xl transition-all p-7 ${styles.modifyBorder}`}
                    >
                        <h2 className=" text-primary text-lg font-semibold pb-5">
                            Fulbright Scholarship
                        </h2>
                        <p className="pb-5">
                            A prestigious scholarship for higher education in
                            the United States is the Fulbright Foreign Student
                            Program. Through various selection processes, those
                            selected for this scholarship are given all the
                            necessary expenses, starting from the study fee at
                            the university of the United States, including the
                            accommodation, food, and transportation of the
                            students.
                        </p>
                        <Link
                            href=""
                            className="flex items-center gap-2 text-primary font-semibold"
                        >
                            Read More{" "}
                            <HiOutlineArrowNarrowRight className="text-xl" />
                        </Link>
                    </div>
                </div>
            </div>
            <h2 className="mt-5 text-3xl font-bold text-primary">Frequently Asked a Question</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-10">
                <div className="mr-0 lg:mr-5">
                    <div className="pb-4">
                        <p className=" text-xl text-primary pb-6">
                            We offer our scholarships to selected students. You
                            have to fulfill certain conditions to get our
                            scholarship. Below are some conditions.
                        </p>
                        <div>
                            <Accordion title="What kind of student should you be?">
                                <p>
                                    You must be an international student. You
                                    must provide your national identity card at
                                    the embassy. Also, you have to provide your
                                    resume.
                                </p>
                            </Accordion>
                            <Accordion title="How many scores should I have in IELTS?">
                                <p>
                                    Generally, a band score of at least 6 is
                                    required for admission to a university or
                                    college, while a band score of 7 or above is
                                    often required for postgraduate studies. But
                                    in our University, your mast the minimum
                                    score required for the IELTS is 7.0.
                                </p>
                            </Accordion>
                            <Accordion title="Have you get any scholarships before?">
                                <p>
                                    Must be an international student and not
                                    previously nominated for this scholarship.
                                    If you have received any scholarship before
                                    then this scholarship is not for you. We
                                    offer a one-time scholarship to a student.
                                    We offer scholarships to as many students as
                                    possible.
                                </p>
                            </Accordion>
                            <Accordion title="Do you do social work?">
                                <p>
                                    Social work is very important for our
                                    scholarship. We want our students to be
                                    leaders in social work. Preference will be
                                    given to those who have worked with
                                    environment and animals.
                                </p>
                            </Accordion>
                            <Accordion title="What was your score in the previous semester?">
                                <p>
                                    A CGPA of less than 3.5 in the previous
                                    semester will not apply. We give importance
                                    to the CGPA of our students. We want our
                                    students to continue their studies alongside
                                    social work. But CGPA will not matter much
                                    if you have some special qualities.
                                </p>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="ml-0 lg:ml-5 relative">
                    <div className="pt-1 pl-0 lg:pt-16 lg:pl-3">
                        <Image
                            src={scholarship}
                            alt="alumni-association"
                            quality={100}
                            width="100%"
                            height="100%"
                            className="sm:px-5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scholarship;
