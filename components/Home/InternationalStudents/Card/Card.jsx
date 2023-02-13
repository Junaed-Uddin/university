import Image from "next/image";


const Card = ({program}) => {
    const color= {
        backgroundColor: `${program.color}`
    }
    return (
        <div className="bg-white shadow-lg">
            <Image src={program.imageURL} alt="programImage" className="w-full object-contain" />
            <div className="mt-2 p-6">
                <h4 className="uppercase text-gray-400 text-[14px}"> 
                <span style={color} className={`mr-2 w-2 h-2 inline-block rounded-full`}></span>
                {program.category}</h4>
                <h2 className="text-3xl capitalize font-semibold">
                    {program.heading}
                </h2>
                <p className="mt-4">
                    {program.description}
                </p>
            </div>
        </div>
    );
};

export default Card;