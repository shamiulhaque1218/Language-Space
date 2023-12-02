

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full"> 
      
        
        <div id="item1" className="carousel-item w-full">
        <img
            src="https://images.hdqwalls.com/download/cycling-to-school-vibes-qh-1440x900.jpg"
            className="lg:sliderImg h-96 w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.hdqwalls.com/download/ninja-adidas-photoshoot-8e-1440x900.jpg"
            className="lg:sliderImg h-96 w-full"
          />
        </div>
        {/* <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-vector/flat-international-mother-language-day-illustration_23-2149219243.jpg?w=740&t=st=1686204361~exp=1686204961~hmac=0aa243d41719645c0e9a468a05ec2b9139fa436bf9be68afd83d57d73d8059af"
            className="sliderImg w-full "
          />
        </div> */}
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.hdqwalls.com/download/computer-laptop-desk-light-lamp-dark-room-fa-2560x1700.jpg"
            className="lg:sliderImg h-96 w-full "
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        {/* <a href="#item3" className="btn btn-xs">
          3
        </a> */}
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Slider;
