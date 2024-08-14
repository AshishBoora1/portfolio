import React, { useState } from "react";
import Slider from "react-slick";
import slider_img from "../assets/images/png/slider_img.png";

function Sliders() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
    slidesToScroll: 1,
    arrows: false,
    speed: 800,
    pauseOnHover: true,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024, // For screens below 1024px
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768, // For screens below 768px
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480, // For screens below 480px
        settings: {
          slidesToShow: 1,
          centerPadding: "5px",
        },
      },
    ],
  };

  return (
    <div className="slider-container p-4">
      <Slider {...settings}>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`p-2 transform transition-transform ease-out duration-1000 ${
              index === currentSlide
                ? "scale-110 z-10 shadow-2xl"
                : "scale-90 opacity-80 shadow-md"
            }`}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <img
              width={"90%"}
              src={slider_img}
              alt={`slider_img_${index + 1}`}
              className="rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sliders;
