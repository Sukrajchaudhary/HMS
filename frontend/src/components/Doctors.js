import React from "react";
import img1 from "../Assest/jonny.jpg";
const Doctors = () => {
  return (
    <div>
      <div className=" md:w-full bg-blue">
        <div className="mx-auto max-w-screen-xl px-2 py-16 sm:px-6 lg:px-8 ">
          <div className="flex flex-col justify-center items-center">
            <p className="text-white font-bold text-sm">OUR DOCTORS</p>
            <p className="font-medium text-4xl text-[#000000CC]">
              Qualified Dentist
            </p>
          </div>

          <div className="grid md:grid-cols-4  gap-7 mt-16">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
              >
                <div className="flex justify-center -mt-16 md:justify-center">
                  <img
                    className="object-cover w-28 h-28 border-2 border-blue-500 rounded-full dark:border-blue-400"
                    alt="Testimonial avatar"
                    src={img1}
                  />
                </div>
                <h2 className="mt-2 text-xl font-medium text-center text-blue dark:text-white md:mt-0">
                  Dr.jonny
                </h2>
                <h2 className="mt-2 text-xl font-semibold text-center text-gray-800 dark:text-white md:mt-0">
                  Design Tools
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
