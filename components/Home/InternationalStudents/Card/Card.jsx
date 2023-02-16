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
                <h2 className="text-2xl capitalize font-semibold mt-2">
                    {program.heading}
                </h2>
                <p className="mt-4">
                    {program.description}
                </p>
                <div className="flex justify-center items-center gap-3 my-3">
                    <p className="font-semibold  capitalize">{program.author}</p>
                    <hr className="border-[1px] w-1/4 bg-black" />
                    <p>{program.date}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;