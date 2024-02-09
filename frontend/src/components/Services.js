import React from "react";
import img1 from "../../src/Assest/sukraj.JPG";
const Services = () => {
  return (
    <>
      <div className="bg-[#F0F0F0] md:w-full">
        <div className="mx-auto max-w-screen-xl px-2 py-16 sm:px-6 lg:px-8 ">
          <div className="flex flex-col justify-center items-center">
            <p className="text-blue font-bold text-sm">Services</p>
            <p className="font-medium text-4xl text-[#000000CC]">
              Toothcare Services
            </p>
          </div>

          <div className="grid md:grid-cols-4  gap-7 mt-16">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="h-96 w-72 group bg-white flex flex-col justify-center items-center gap-5 p-10 hover:bg-blue transition-all hover:text-white"
              >
                <div className="h-28 w-28 rounded-full border-2 flex justify-center items-center bg-blue overflow-hidden">
                  <img src={img1} className="h-28 w-28 object-cover" alt="" />
                </div>
                <div className="flex justify-start flex-col items-center gap-4">
                  <p className="font-semibold text-xl text-[#333333] group-hover:text-white">
                    Tooth Protection
                  </p>
                  <p className="text-center text-[#9D9D9D] group-hover:text-white">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
