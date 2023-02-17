import { FaArrowRight } from "react-icons/fa";
import opportunity from "../../../public/assets/images/career/opportunity.jpg";
import apply from "../../../public/assets/images/career/apply.jpg";
import reward from "../../../public/assets/images/career/reward.jpg";
import Card from "./Card/Card";
import Event from "./Event/Event";
import { Swiper, SwiperSlide } from 'swiper/react';
import  "../../../styles/internationalStudents.module.css"
import SwiperCore, {Autoplay, navigation, pagination} from "swiper"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const InternationalStudents = () => {
  SwiperCore.use([Autoplay])
    const internationalPrograms = [
        {
          id: 1,
          author: "nick jonas",
          date: "23 march 2023",
          category: "student's service",
          color: "#00e676",
          heading: "dedicated residency",
          imageURL: opportunity,
          description:
            "UniCamp is right for you? We seek people committed to excellence and driven to make the world a better place.",
          buttonName: "Learn More",
        },
        {
          id: 2,
          author: "nick jonas",
          date: "23 march 2023",
          category: "visa",
          color: "#2196f3",
          heading: "easy to apply for PR",
          imageURL: apply,
          description:
            "You’ve come to the right place. Learn about our application process here.",
          buttonName: "Learn More",
        },
        {
          id: 3,
          author: "nick jonas",
          date: "23 march 2023",
          category: "student's service",
          color: "#ff9100",
          heading: "a better community support",
          imageURL: reward,
          description:
            "You'll be able to access a range of benefits and rewards to support every stage of your career and life.",
          buttonName: "Learn More",
        },
       
          
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
        }
      ]
    return (
        <section className="my-4 mx-4 gip flex flex-col lg:flex-row gap-x-8 justify-center items-center lg:items-start">
            <div className="mt-3 w-3/4">
                <div className="flex flex-col md:flex-row gap-x-2 items-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">International Students</h2>
                    <p className="text-primary font-semibold text-xl flex gap-x-1 items-center cursor-pointer">
                    view all <FaArrowRight/>
                    </p>
                </div>
                <div className="grid swiper-container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    
                    
                    {
                        internationalPrograms.map(program=><Card key={program.id}  program={program}></Card>
                          )
                    }
                   
                </div>  
            </div>
            <div className="w-1/2 mx-auto mt-4 md:mt-0 lg:w-1/4 bg-white p-8 py-10">
                    <h2 className="text-lg md:text-3xl capitalize mb-4">upcoming events <span className="text-primary font-semibold mt-1 text-lg flex gap-x-1 items-center cursor-pointer">view all <FaArrowRight/> 
                    </span>
                    </h2>
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