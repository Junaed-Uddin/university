import Image from "next/image";


const Card = ({program}) => {
    return (
        <div className="bg-white shadow-lg">
            <Image src={program.imageURL} alt="programImage" className="w-full object-contain" />
            <div className="mt-2 p-6">
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