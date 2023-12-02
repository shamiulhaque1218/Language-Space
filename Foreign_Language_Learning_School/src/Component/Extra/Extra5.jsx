/* eslint-disable react/no-unescaped-entities */
import { MdOutlineDateRange } from "react-icons/md";

const Extra5 = () => {
    return (
        <div className="lg:pt-20 pt-8 pb-5"> 
        <strong className="text-blue-950 font-semibold lg:text-4xl text-2xl lg:px-10 px-3">Our Blog & Article</strong>

        <container className="grid lg:grid-cols-3 grid-cols-1 lg:px-10 px-3 gap-5">
            {/* blog - 01  */}
    <div className="lg:pt-10 pt-8">
           <img src="https://images.pexels.com/photos/914931/pexels-photo-914931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           className="h-60 w-full rounded-md mb-2" alt="" />

           <small className="text-gray-500"> <MdOutlineDateRange className="inline" /> March 08, 2023 </small>
           <p className="text-blue-950 hover:text-blue-800 font-semibold lg:text-2xl text-xl py-3"> Tech Trends and Insights Staying Ahead of the Curve in the Ever Evolving Tech Landscape</p>
          <small className="text-gray-500 flex text-justify">
          Technology's impact extends far beyond the realm of gadgets and software. It is transforming various sectors, from healthcare to finance, education to entertainment, and fundamentally altering the way we live, work, and interact with the world around us.

           In the healthcare sector, technology is driving innovation in areas such as precision medicine, wearable devices, and telemedicine, improving patient care and outcomes. In the financial world, fintech companies are disrupting traditional banking services, offering innovative solutions for payments, investing, and lending.
          </small>
           </div>
            {/* blog - 02 */}
           <div className="lg:pt-10 pt-8">
           <img src="https://images.pexels.com/photos/3769532/pexels-photo-3769532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           className="h-60 w-full rounded-md mb-2" alt="" />

           <small className="text-gray-500 pt-5"> <MdOutlineDateRange className="inline" /> March 08, 2023 </small>
           <p className="text-blue-950 hover:text-blue-800 font-semibold text-2xl py-3"> Travel Escapades Uncovering Hidden Gems and Embracing New Cultures Around the Globe</p>
          <small className="text-gray-500 flex text-justify">
          The world is a vast and wondrous place, filled with countless destinations that beckon to be explored. From the bustling streets of cosmopolitan cities to the serene beauty of untouched landscapes, each corner of the globe holds its own unique charm and allure. For those seeking an escape from the ordinary, a journey of self-discovery and cultural immersion, travel offers an unparalleled opportunity to broaden horizons and deepen one's understanding of the world.
         
          Venture beyond the familiar and embark on an extraordinary escapade, where hidden gems await to be unearthed and new perspectives emerge.
          </small>
           </div>
    
     {/* blog - 03 */}
     <div className="lg:pt-10 pt-8">
           <img src="https://images.pexels.com/photos/1571734/pexels-photo-1571734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           className="h-60 w-full rounded-md mb-2" alt="" />

           <small className="text-gray-500"> <MdOutlineDateRange className="inline" /> March 08, 2023 </small>
           <p className="text-blue-950 hover:text-blue-800 font-semibold text-2xl py-3"> Unleashing Creativity Embarking on a Journey of Artistic Expression and Self Discovery</p>
          <small className="text-gray-500 flex text-justify">
          Artistic expression is not about following a set of rules or achieving perfection. It is about finding your unique voice, that authentic expression of your inner self. It is about allowing yourself to be vulnerable, to be open to the world, and to express your emotions, thoughts, and experiences through the medium of art.

          There is no right or wrong way to express yourself creatively. Whether you find your voice through painting, writing, music, dance, or any other form of art, the key is to allow your creativity to flow freely and unhindered. Experiment with different techniques, explore new ideas, and don't be afraid to make mistakes.
          </small>
           </div>

       </container>
        </div>
    );
};

export default Extra5;