import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaRegDotCircle, FaUserGraduate } from "react-icons/fa";
import scholarship from "../../../public/assets/images/scholarship/scholarship.jpg";
import Image from "next/image";

const Scholarship = () => {
    return (
        <div className="pb-5">
            <div className=" pb-12">
                <h2 className=" font-bold text-3xl text-txt-primary py-10 flex gap-4 pb-4">
                    <FaUserGraduate />
                    Scholarships Sources
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                        <h2 className=" text-txt-secondary text-lg font-semibold pb-5">
                            Kingsters Scholarships
                        </h2>
                        <p className="pb-5">
                            Kingster University offers a variety of scholar
                            ships and fellowships designed to help you and your
                            family pay for university. Scholarships and grants
                            are types of gift.
                        </p>
                        <Link href="" className="flex items-center gap-2">
                            Read More{" "}
                            <HiOutlineArrowNarrowRight className="text-xl" />
                        </Link>
                    </div>
                    <div>
                        <h2 className=" text-txt-secondary text-lg font-semibold pb-5">
                            Federal Grant Programs
                        </h2>
                        <p className="pb-5">
                            Kingster University offers a variety of scholar
                            ships and fellowships designed to help you and your
                            family pay for university. Scholarships and grants
                            are types of gift.
                        </p>
                        <Link href="" className="flex items-center gap-2">
                            Read More{" "}
                            <HiOutlineArrowNarrowRight className="text-xl" />
                        </Link>
                    </div>
                    <div>
                        <h2 className=" text-txt-secondary text-lg font-semibold pb-5">
                            State Scholarships
                        </h2>
                        <p className="pb-5">
                            Kingster University offers a variety of scholar
                            ships and fellowships designed to help you and your
                            family pay for university. Scholarships and grants
                            are types of gift.
                        </p>
                        <Link href="" className="flex items-center gap-2">
                            Read More{" "}
                            <HiOutlineArrowNarrowRight className="text-xl" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="mr-5">
                    <div className="border-b-2 border-txt-secondary pb-4">
                        <h2 className=" text-2xl font-semibold text-txt-primary pb-8">
                            Requirements
                        </h2>
                        <p className=" text-xl text-txt-secondary pb-6">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                        </p>
                        <ul>
                            <li className="flex gap-4 pb-4">
                                <span className=" text-lg mt-1 text-txt-secondary">
                                    <FaRegDotCircle />
                                </span>
                                <p>
                                    You are a full-time student (at least 12
                                    points).
                                </p>
                            </li>
                            <li className="flex gap-4 pb-4">
                                <span className=" text-lg mt-1 text-txt-secondary">
                                    <FaRegDotCircle />
                                </span>
                                <p>You applied for financial aid on time.</p>
                            </li>
                            <li className="flex gap-4 pb-4">
                                <span className=" text-lg mt-1 text-txt-secondary">
                                    <FaRegDotCircle />
                                </span>
                                <p>
                                    You are meeting the Satisfactory Academic
                                    Progress standards.
                                </p>
                            </li>
                            <li className="flex gap-4 pb-4">
                                <span className=" text-lg mt-1 text-txt-secondary">
                                    <FaRegDotCircle />
                                </span>
                                <p>
                                    You have approximately the same amount of
                                    financial need that you had in prior years.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-10">
                        <h2 className=" text-2xl font-semibold text-txt-primary pb-8">
                            Guidance and Advice
                        </h2>
                        <p className=" text-xl pb-6">
                            Separated they live in Bookmarksgrove right at the
                            coast of the Semantics, a large language ocean. A
                            small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth. Even the all-powerful
                            Pointing has no control about the blind texts it is
                            an almost unorthographic life.
                        </p>
                    </div>
                </div>
                <div className="ml-5 relative">
                    <div className=" border-b-2 border-txt-secondary pt-16 pl-10 bg-gray-200">
                        <Image
                            src={scholarship}
                            alt="alumni-association"
                            quality={100}
                            width="100%"
                            height="100%"
                            className="px-5"
                        />
                        <div className="pt-10">
                            <h2 className=" text-2xl font-semibold text-txt-primary pb-8">
                                Featured Student (Scholarship)
                            </h2>
                            <p className=" text-xl pb-6">
                                Far far away, behind the word mountains,
                                far.there live the blind texts. Separated they
                                live in Bookmarksgrove right at the coast of the
                                Semantics, a large language ocean. A small river
                                named Duden flows by their place and supplies it
                                with the necessary regelialia. It is a
                                paradisematic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scholarship;
