import React from "react";
import { ArrowUpRight } from "lucide-react";
import img1 from "../../../Assest/sukraj.JPG";
import { Link } from "react-router-dom";
const Doctors = () => {
  return (
    <>
      <div className="flex gap-5 flex-wrap justify-center">
        {[...Array(5)].map((_, index) => (
          <div className="w-[300px] rounded-md border mt-10" key={index}>
            <img
              src={img1}
              alt="Laptop"
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                Dr:Sukraj Chaudhary &nbsp; <ArrowUpRight className="h-4 w-4" />
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                He is one of the Famous Doctor
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
              <Link to="/makeappoinments/6">
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
