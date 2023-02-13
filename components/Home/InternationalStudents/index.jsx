import { FaArrowRight } from "react-icons/fa";
import opportunity from "../../../public/assets/images/career/opportunity.jpg";
import apply from "../../../public/assets/images/career/apply.jpg";
import reward from "../../../public/assets/images/career/reward.jpg";
import Card from "./Card/Card";

const InternationalStudents = () => {
    const internationalPrograms = [
        {
          id: 1,
          heading: "dedicated residency",
          imageURL: opportunity,
          description:
            "UniCamp is right for you? We seek people committed to excellence and driven to make the world a better place.",
          buttonName: "Learn More",
        },
        {
          id: 2,
          heading: "easy to apply for PR",
          imageURL: apply,
          description:
            "You’ve come to the right place. Learn about our application process here.",
          buttonName: "Learn More",
        },
        {
          id: 3,
          heading: "a better community support",
          imageURL: reward,
          description:
            "You'll be able to access a range of benefits and rewards to support every stage of your career and life.",
          buttonName: "Learn More",
        },
        {
            id: 4,
            heading: "a better community support",
            imageURL: reward,
            description:
              "You'll be able to access a range of benefits and rewards to support every stage of your career and life.",
            buttonName: "Learn More",
          }
      ];
    return (
        <section className="my-4 flex justify-center">
            <div className="mt-3">
                <div className="flex flex-col md:flex-row gap-x-2 items-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl">International Students</h2>
                    <p className="text-primary font-semibold text-xl flex gap-x-1 items-center cursor-pointer">
                    view all <FaArrowRight/>
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        internationalPrograms.map(program=><Card key={program.id} program={program}></Card>)
                    }
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default InternationalStudents;