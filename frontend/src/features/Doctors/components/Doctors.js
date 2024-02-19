import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import img1 from "../../../Assest/sukraj.JPG";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {  AllDoctors } from "../doctorSlice";
const Doctors = () => {
  const Doctor = useSelector(AllDoctors);
  return (
    <>
      <div className="flex gap-5 flex-wrap justify-center">
        {Doctor?.map((doctor, index) => (
          <div
            className="w-[300px] rounded-md border mt-10 relative"
            key={index}
          >
            <img
              src={doctor.pic?doctor.pic:img1}
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="rounded-full border-2 border-blue h-5 w-5 bg-[green] absolute top-0 right-0 "></div>
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {doctor.username} &nbsp; <ArrowUpRight className="h-4 w-4" />
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                {doctor.email}
              </p>
              <p className="mt-3 text-sm text-gray-600">
                {doctor.phone}
              </p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-blue px-3 py-1 text-[10px] font-semibold text-gray-900">
                 {doctor.specialization}
                </span>
                {/* <span className="mb-2 mr-2 inline-block rounded-full bg-blue px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #PRO Dentish Surgen
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-blue px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #PHD SCHOLOR
                </span> */}
              </div>
              <Link to={`/makeappoinments/${doctor._id}`}>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-blue px-2 py-1.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Take Appoinments
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Doctors;
