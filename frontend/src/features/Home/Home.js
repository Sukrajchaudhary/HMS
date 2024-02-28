import React from "react";
import { Slide } from "react-slideshow-image";
import { ArrowRight } from "lucide-react";
import "react-slideshow-image/dist/styles.css";
import img1 from "../../Assest/images.jpg";
import img2 from "../../Assest/img.jpeg";
import img3 from "../../Assest/img2.jpeg";
// import "./styles.css"; // Make sure to import your CSS file

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
    <>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <div className="w-full bg-[#B1B3B7] bg-opacity-75 h-[100%] flex flex-col p-5 gap-4 justify-center items-center">
                  <div className="flex justify-start items-center flex-col ">
                    <p className="text-[#FFFFFF] font-normal text-6xl">
                      Dentist Services <br /> that You Can Trust
                    </p>
                    <p className="font-normal text-[#FFFFFF] text-base">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia <br /> and Consonantia, there live the
                      blind texts.
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-blue px-6 py-3 text-sm font-semibold text-white hover:bg-black/80"
                    >
                      Gets Starts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default Home;
