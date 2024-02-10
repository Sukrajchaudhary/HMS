import React from "react";
import img1 from "../../../Assest/sukraj.JPG";
import { Link } from "react-router-dom";
const MakeAppoinments = () => {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-2 py-16 sm:px-6 lg:px-5">
          <div className="flex flex-col justify-center items-center gap-x-5 gap-y-5 ">
            {/*  */}

            <div className="w-full  border-2 border-[gray] rounded-lg bg-white ">
              <p className="text-center font-bold text-lg text-blue underline">
                !!Your Selected Doctor!!
              </p>
              <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <Link to="#" className="block shrink-0">
                  <img
                    alt=""
                    src={img1}
                    className="size-14 rounded-lg object-cover"
                  />
                </Link>

                <div>
                  <h3 className="font-medium sm:text-lg">
                    <p className="hover:underline"> Dr:Sukraj Chaudhary</p>
                  </h3>
                  <p className="line-clamp-2 text-sm text-gray-700">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusamus, accusantium temporibus iure delectus ut totam
                    natus nesciunt ex? Ducimus, enim.
                  </p>
                  <div className="mt-4">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-blue px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #MD
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-blue px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #PRO Dentish Surgen
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-blue px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #PHD SCHOLOR
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-[green] px-3 py-1.5 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>

                  <span className="text-[10px] font-medium sm:text-xs">
                    Avilable
                  </span>
                </strong>
              </div>
            </div>
            {/*  */}
            <div className="rounded-lg w-full bg-blue p-3 shadow-lg ">
              <p className="text-white">WE ARE HERE FOR YOU</p>
              <p className="text text-3xl text-white font-medium mb-6">
                Make An Appointment
              </p>
              <form action="" className="space-y-8 mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Enter Your Full Name"
                      type="text"
                      id="name"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Enter your Email Address"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Phone Number
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder=" Phone Number"
                      type="text"
                      id="phone"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      APPOINTMENT DATE
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="APPOINTMENT DATE"
                      type="date"
                      id="date"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      APPOINTMENT TIME
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="APPOINTMENT TIME"
                      type="time"
                      id="email"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      SELECT A DOCTOR
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="SELECT A DOCTOR"
                      type="text"
                      id="DOCTOR"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows={8}
                    id="message"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium bg-white text-blue sm:w-auto"
                  >
                    Comform
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeAppoinments;
