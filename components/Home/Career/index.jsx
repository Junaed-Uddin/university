import styles from "../../../styles/alumni.module.css";
import opportunity from "../../../public/assets/images/career/opportunity.jpg";
import apply from "../../../public/assets/images/career/apply.jpg";
import reward from "../../../public/assets/images/career/reward.jpg";
import CareerInfo from "./CareerInfo/CareerInfo";

const Career = () => {
  const careerInfos = [
    {
      id: 1,
      heading: "Current Opportunities",
      imageURL: opportunity,
      description:
        "UniCamp is right for you? We seek people committed to excellence and driven to make the world a better place.",
      buttonName: "Learn More",
    },
    {
      id: 2,
      heading: "Applying with US",
      imageURL: apply,
      description:
        "You’ve come to the right place. Learn about our application process here.",
      buttonName: "Learn More",
    },
    {
      id: 3,
      heading: "Benefits and Rewards",
      imageURL: reward,
      description:
        "You'll be able to access a range of benefits and rewards to support every stage of your career and life.",
      buttonName: "Learn More",
    },
  ];

  return (
    <section className="mb-10 mt-10 sm:mt-14 gip">
      <div className="relative">
        <h2
          className={`text-4xl text-txt-primary text-center font-display font-bold relative`}
        >
          Carrier
          <span className={`${styles.textUnderline}`}></span>
        </h2>
        <p className="text-center text-xl mt-10">Explore the opportunities and begin your application</p>
      </div>

      {/* Career Images  */}
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1 mt-16">
        {careerInfos.map((careerInfo) => (
          <CareerInfo
            key={careerInfo.id}
            careerInfo={careerInfo}
          ></CareerInfo>
        ))}
      </div>
    </section>
  );
};

export default Career;
