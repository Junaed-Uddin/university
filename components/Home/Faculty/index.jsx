
const Faculty = () => {
    return (
        <div className=" text-center bg-background p-10">
            <p>EVERYTHING YOU NEED</p>
            <h2 className=" text-4xl font-bold ">Faculty And Staff Resource</h2>
            <br />
            <p>Use these quick links to find the systems and sites need most.</p>
            <div className=" flex justify-center mt-6">

            <div className="grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1    gap-3 ">
                <div className=" text-white bg-red-600 w-72 p-3">EMAIL</div>
                <div className=" text-white bg-red-600 w-72 p-3">MYHR</div>
                <div className=" text-white bg-red-600 w-72 p-3">NEXUS</div>
                <div className=" text-white bg-red-600 w-72 p-3">WEBADVISOR</div>
                <div className=" text-white bg-red-600 w-72 p-3">FORMS</div>
                <div className=" text-white bg-red-600 w-72 p-3">LIBRARY</div>
                <div className=" text-white bg-red-600 w-72 p-3">TECHNOLOGY</div>
                <div className=" text-white bg-red-600 w-72 p-3">FACULTY & STAFF DIRECTORY</div>

            </div>

            </div>
            

            
        </div>
    );
};

export default Faculty;