import { FaArrowRight } from "react-icons/fa";
import opportunity from "../../../public/assets/images/career/opportunity.jpg";
import apply from "../../../public/assets/images/career/apply.jpg";
import reward from "../../../public/assets/images/career/reward.jpg";
import Card from "./Card/Card";
import Event from "./Event/Event";
import Swiper from "swiper";

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
      const events = [
        {
            id:1,
            date: "13 feb",
            time: "10:00- 15:00",
            title: "spring fair"
        },
        {
            id:2,
            date: "14 feb",
            time: "10:00- 15:00",
            title: "valentine celebration"
        },
        {
            id:3,
            date: "14 apr",
            time: "10:00- 15:00",
            title: "bangla new year fest"
        },
        {
            id:4,
            date: "21 apr",
            time: "10:00- 15:00",
            title: "students community fair"
        },
        {
            id:5,
            date: "23 may",
            time: "10:00- 12:00",
            title: "international affiliation fair"
        },
      ]
    return (
        <section className="my-4 flex flex-col lg:flex-row gap-x-8 justify-center items-center lg:items-start">
            <div className="mt-3 w-3/4">
                <div className="flex flex-col md:flex-row gap-x-2 items-center">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl">International Students</h2>
                    <p className="text-primary font-semibold text-xl flex gap-x-1 items-center cursor-pointer">
                    view all <FaArrowRight/>
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    {
                        internationalPrograms.map(program=><Card key={program.id} program={program}></Card>)
                    }
                </div>  
            </div>
            <div className="w-1/2 mx-auto mt-4 md:mt-0 lg:w-1/4 bg-white p-8">
                    <h2 className="text-lg md:text-3xl capitalize mb-4">upcoming events</h2>
                    <div className="flex flex-col gap-y-4">
                        {
                            events.map(event=><Event key={event.id} event={event}></Event>)
                        }
                    </div>
            </div>
        </section>
    );
};

export default InternationalStudents;