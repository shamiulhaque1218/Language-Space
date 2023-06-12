import  { useEffect, useRef } from 'react';
import anime from 'animejs';

anime({
  targets: '.motion-path-demo .el',
  easing: 'linear',
  duration: 2000,
  loop: true
});
const ExtraSection = () => {

    const elementRef = useRef(null);

  useEffect(() => {
    anime({
      targets: elementRef.current,
      translateX: 250,
      rotate: '2turn',
      duration: 1000,
      easing: 'easeInOutSine',
    });
  }, []);

  return (
    <div className="mt-5">
        
      <div className="hero min-h-screen bgpic">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
       <div className='bg-yellow-100 roundMd bg-opacity-60'>
       <img className='h-56 w-56 m-5' src="omg.png" alt="" />
       </div>
          <div className="max-w-lg rounded-md round p-10 bg-blue-900" ref={elementRef}>
            <h1 className="mb-5 text-5xl font-bold">We give you a better learning process</h1>
            <p  className="mb-5">
            Course Objectives: The course description typically outlines the specific objectives of the course, such as improving oral communication skills, developing grammar proficiency, expanding vocabulary, or enhancing cultural understanding.
            </p>
            <p className="mb-5"> Levels and Progression: Language courses often have different levels to accommodate learners of various proficiency levels, such as beginner, intermediate, and advanced. The course description may provide details on the progression from one level to the next. 
                 </p>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
