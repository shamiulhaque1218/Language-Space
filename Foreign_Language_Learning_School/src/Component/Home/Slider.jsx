
const Slider = () => {
  return (
    <div>
      <div className="carousel w-full"> 
      
        <p data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className="absolute gFont2 text-slate-600 lg:top-80 top-80 lg:left-24 left-10 lg:px-10 px-5 lg:py-6 py-3 bg-white rounded-md lg:text-3xl text-xl" >Learn today <br /> for a <br /> better tomorrow <br /> <span className=" mt-2 text-base">Education for all</span> </p>
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://burst.shopifycdn.com/photos/crayons-pencils-flatlay.jpg?width=925&format=pjpg&exif=1&iptc=1"
            className="lg:sliderImg h-96 w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://burst.shopifycdn.com/photos/numbers-pencils-chalkboard.jpg?width=925&format=pjpg&exif=1&iptc=1"
            className="lg:sliderImg h-96 w-full "
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
            src="https://img.freepik.com/free-vector/language-word-concept-background_23-2147868616.jpg?w=740&t=st=1686204416~exp=1686205016~hmac=9e72ccffad7b335b9a8b3b8e22de59d8751f93d8ade728dc62ae7310e6d3df3f"
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
