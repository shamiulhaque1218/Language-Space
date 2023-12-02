import { FaAward } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import CountUp from 'react-countup';

const Extra3 = () => {
    return (
        <container className="gFont3 grid lg:grid-cols-4 grid-cols-2 lg:mx-16 mx-3 lg:pb-20 pb-10 gap-8 lg:gap-2"> 
           <div className="flex gap-2">
           <FaAward className="text-blue-950 lg:text-5xl text-4xl" />
           <strong>
           <p className="lg:text-3xl text-2xl font-bold"> <CountUp duration={4} end={15} />+</p>
           <p className="lg:text-base text-sm">TOTAL  ACHIEVEMENT</p>
           </strong>
           </div>

           <div className="flex gap-2">
           <PiStudentBold className="text-blue-950 lg:text-5xl text-4xl" />
           <strong>
           <p className="lg:text-3xl text-2xl font-bold"> <CountUp duration={4} end={95} />+</p>
           <p className="lg:text-base text-sm">TOTAL STUDENTS</p>
           </strong>
           </div>

           <div className="flex gap-2">
           <GiTeacher className="text-blue-950 lg:text-5xl text-4xl" />
           <strong>
           <p className="lg:text-3xl text-2xl font-bold"> <CountUp duration={4} end={12} />+</p>
           <p className="lg:text-base text-sm">TOTAL  INSTRUCTOR</p>
           </strong>
           </div>

           <div className="flex gap-2">
           <TfiWorld className="text-blue-950 lg:text-5xl text-4xl" />
           <strong>
           <p className="lg:text-3xl text-2xl font-bold"> <CountUp duration={4} end={55} />+</p>
           <p className="lg:text-base text-sm">OVER THE WORLD</p>
           </strong>
           </div>
        </container>
    );
};

export default Extra3;