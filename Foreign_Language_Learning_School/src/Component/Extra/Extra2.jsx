import { FaHandPointRight } from "react-icons/fa";
const Extra2 = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 mr-12 pt-10 lg:pt-12">
            <div className="lg:ml-16 ml-3">
            <img className="h-96 w-96 rounded-xl" src="education3.png" alt="baby" />
          <img className="h-48 w-60 rounded-lg relative top-[-7rem] lg:left-64 left-36 sm:left-32" src="/education.png" alt="image" />
          
            </div>
            <div className="ml-3 lg:ml-0 pb-8 lg:pb-0 gFont3">
                <p className="lg:text-3xl text-xl font-semibold"> Welcome to the Online Learning Center </p>
                <p className="lg:text-lg text-md text-gray-500 mt-5 pl-3 border-blue-600 border-l-2"> Our website is a hub for curious minds seeking to expand their horizons. Dive into a world of comprehensive learning resources designed to fuel your intellect and curiosity. </p>
                <div className="pt-5">
                    <p className="pt-8 flex gap-5">
                    <FaHandPointRight className="text-blue-600 mt-2" />
                    <small className="lg:text-lg text-md font-semibold">
                        Unlock Your Potential with Learning
                        </small>
                    </p>
                    
                    <p className="pt-8 flex gap-5">
                    <FaHandPointRight className="text-blue-600 mt-2" />
                    <small className="lg:text-lg text-md font-semibold">
                    Elevate Your Mind, Expand Your Skills
                        </small>
                    </p>

                    <p className="pt-8 flex gap-5">
                    <FaHandPointRight className="text-blue-600 mt-2" />
                    <small className="lg:text-lg text-md font-semibold">
                    Dive into Limitless Learning
                        </small>
                    </p>


                    <p className="pt-8 flex gap-5">
                    <FaHandPointRight className="text-blue-600 mt-2" />
                    <small className="lg:text-lg text-md font-semibold">
                    The Learning Revolution Awaits
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Extra2;