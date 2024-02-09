import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../../Assest/images.jpg";
import img2 from "../../Assest/img.jpeg";
import img3 from "../../Assest/img2.jpeg";

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  height: "700px",
};

const slideImages = [
  {
    url: img1,
    caption: "Slide 1",
  },
  {
    url: img2,
    caption: "Slide 2",
  },
  {
    url: img3,
    caption: "Slide 3",
  },
];

const Home = () => {
  return (
    <div className="slide-container ">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <div className="w-[700px] bg-[#B1B3B7] bg-opacity-75 h-[100%] flex flex-col gap-4 justify-center items-center ">
                <div className="flex justify-start items-center flex-col  w-[100%]">
                  <p className="text-[#FFFFFF] font-normal text-6xl">
                    Dentist Services <br /> that You Can Trust
                  </p>
                  <p className="font-normal text-[#FFFFFF] text-base">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia <br /> and Consonantia, there live the
                    blind texts.
                  </p>
                </div>
                <div className="flex flex-row gap-5 justify-center items-center ">
                  <button className="border-1 cursor-pointer border-transparent bg-[#00BCD4] w-60 h-12 rounded text-[#FFFFFF] font-normal text-[18px]">
                    See All Services
                  </button>
                  <button className="border-1 border-transparent cursor-pointer bg-[#FFFFFF] w-60 h-12 rounded text-blue font-normal text-[18px]">
                    View Cources
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Home;
