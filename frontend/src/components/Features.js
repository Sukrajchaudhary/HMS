import React from "react";
import img1 from "../../src/Assest/newdent.jpg";
const Features = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 relative -z-10">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src={img1}
                className="absolute inset-0 h-full w-full object-cover z-0"
              />
            </div>
          </div>
          <div className="relative flex justify-start bg-gray-100">
            <div className="p-8 flex flex-col gap-4 sm:p-16 lg:p-24">
              <p className="font-bold text-blue text-sm">
                WELCOME TO OUR DENTAL CLINIC
              </p>
              <p className="text-[#000000CC] text-4xl font-medium">
                Toothcare is a Dental Clinic and Innovative Approach to
                Treatment
              </p>
              <p className="text-[#999999] font-normal text-base">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>

              <div className="grid md:grid-cols-3 ">
                <div class="border-2 border-blue h-28 w-40 rounded flex justify-evenly items-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-14 h-14 text-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                    />
                  </svg>

                  <p className="font-medium text-2xl text-blue p-3">
                    3000 <br />{" "}
                    <span className="font-normal text-base text-[#999999]">
                      Happy Patients
                    </span>
                  </p>
                </div>

                <div class="border-2 border-blue h-28 w-40 rounded flex justify-evenly items-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-14 h-14 text-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                    />
                  </svg>

                  <p className="font-medium text-2xl text-blue p-3">
                    3000 <br />{" "}
                    <span className="font-normal text-base text-[#999999]">
                      Happy Patients
                    </span>
                  </p>
                </div>

                <div class="border-2 border-blue h-28 w-40 rounded flex justify-evenly items-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-14 h-14 text-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>

                  <p className="font-medium text-2xl text-blue p-3">
                   24 <br />{" "}
                    <span className="font-normal text-base text-[#999999]">
                      Years of Experiences
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
