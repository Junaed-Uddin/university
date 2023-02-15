import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FaRegDotCircle, FaUserGraduate } from 'react-icons/fa';
import scholarship from '../../../public/assets/images/scholarship/scholarship.jpg';
import Image from 'next/image';

const Scholarship = () => {
  return (
    <div className="pb-5 px-5">
      <div className=" pb-12">
        <h2 className=" font-bold text-3xl text-txt-primary py-10 flex gap-4 pb-4">
          <FaUserGraduate />
          Scholarships Sources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <h2 className=" text-primary text-lg font-semibold pb-5">
              Peace Ambassador Scholarship
            </h2>
            <p className="pb-5">
              Applications are now open for the European Commission Peace
              Ambassador Scholarship. This scholarship will be given to students
              aged 18 to 30 years from more than 190 countries of the world
              including Bangladesh. Scholarship students under this program will
              have the opportunity to participate in The One Young World Summit
              to be held in Manchester
            </p>
            <Link
              href=""
              className="flex items-center gap-2 text-primary font-semibold"
            >
              Read More <HiOutlineArrowNarrowRight className="text-xl" />
            </Link>
          </div>
          <div>
            <h2 className=" text-primary text-lg font-semibold pb-5">
              Commonwealth Scholarship
            </h2>
            <p className="pb-5">
              The Commonwealth offers scholarships. Generally, Commonwealth
              Scholarships allow students from low- and middle-income countries
              to study Master on scholarships at various UK universities. The
              Commonwealth Scholarship for Masters is funded by the UK
              Department for International Development (DFID).
            </p>
            <Link
              href=""
              className="flex items-center gap-2 text-primary font-semibold"
            >
              Read More <HiOutlineArrowNarrowRight className="text-xl" />
            </Link>
          </div>
          <div>
            <h2 className=" text-primary text-lg font-semibold pb-5">
              Fulbright Scholarship
            </h2>
            <p className="pb-5">
              A prestigious scholarship for higher education in the United
              States is the Fulbright Foreign Student Program. Through various
              selection processes, those selected for this scholarship are given
              all the necessary expenses, starting from the study fee at the
              university of the United States, including the accommodation,
              food, and transportation of the students.
            </p>
            <Link
              href=""
              className="flex items-center gap-2 text-primary font-semibold"
            >
              Read More <HiOutlineArrowNarrowRight className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mr-0 lg:mr-5">
          <div className="border-b-2 border-txt-secondary pb-4">
            <h2 className=" text-2xl font-semibold text-txt-primary pb-8">
              Requirements
            </h2>
            <p className=" text-xl text-txt-secondary pb-6">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in
            </p>
            <ul>
              <li className="flex gap-4 pb-4">
                <span className=" text-lg mt-1 text-txt-secondary">
                  <FaRegDotCircle />
                </span>
                <p>You must be an international student.</p>
              </li>
              <li className="flex gap-4 pb-4">
                <span className=" text-lg mt-1 text-txt-secondary">
                  <FaRegDotCircle />
                </span>
                <p>The minimum score required for the IELTS is 7.0.</p>
              </li>
              <li className="flex gap-4 pb-4">
                <span className=" text-lg mt-1 text-txt-secondary">
                  <FaRegDotCircle />
                </span>
                <p>
                  Must be an international student and not previously nominated
                  for this scholarship.
                </p>
              </li>
              <li className="flex gap-4 pb-4">
                <span className=" text-lg mt-1 text-txt-secondary">
                  <FaRegDotCircle />
                </span>
                <p>
                  Must have leadership ability and social work experience is
                  preferred.
                </p>
              </li>
            </ul>
          </div>
          <div className="pt-10">
            <h2 className=" text-2xl font-semibold text-txt-primary pb-8">
              Guidance and Advice
            </h2>
            <p className=" text-lg pb-6">
              To apply for our scholarship you need to fill out the form.
              Besides, an essay on the related subject and other materials have
              to be submitted. Again, the requirements to apply for a private
              scholarship depend on our institution. For this reason, the
              application eligibility and other necessary matters should be read
              carefully. It should be confirmed whether the applicant fulfills
              all those qualifications.
            </p>
          </div>
        </div>
        <div className="ml-0 lg:ml-5 relative">
          <div className="pt-5 pl-0 lg:pt-16 lg:pl-10">
            <Image
              src={scholarship}
              alt="alumni-association"
              quality={100}
              width="100%"
              height="100%"
              className="px-5"
            />
            <div className="pt-10 px-5 border-b-2 border-txt-secondary">
              <h2 className=" text-2xl font-semibold text-txt-primary pb-8">
                Featured Student (Scholarship)
              </h2>
              <p className=" text-lg pb-6">
                After the applicant finds the scholarship according to his/her
                eligibility, he/she should pay attention to what documents and
                subjects are required to apply. It is best to make a list of the
                scholarships that the applicant is eligible for, the application
                deadlines, and the application requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
