import React from "react";
import { useForm } from "react-hook-form";
import {CreateDoctorAccountAsync,CreatedDoctor} from '../adminSlice'
import { useDispatch,useSelector } from "react-redux";
const DoctorAccount = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch=useDispatch();
  const CreatedDoctorstatus=useSelector(CreatedDoctor);
  if(CreatedDoctorstatus){
    alert(CreatedDoctorstatus.message)
  }
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")',
            }}
          ></div>
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Create free Doctor account now.
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>
              <div className="mt-6">
                <div className="mt-3 md:flex md:items-center md:-mx-2">
                  <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue border border-blue rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="mx-2">Doctor</span>
                  </button>
                </div>
              </div>
              <form
                onSubmit={handleSubmit((data) => {
                  dispatch(CreateDoctorAccountAsync(data))
                  reset()
                })}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    UserName:
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    {...register("username", {
                      required: "Please Enter Username !",
                    })}
                  />
                  {errors.username && (
                    <p className="text-red font-mono text-md">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="XXX-XX-XXXX-XXX"
                    {...register("phone", { required: "Please Enter Phone !" })}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.phone && (
                    <p className="text-red font-mono text-md">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johnsnow@example.com"
                    {...register("email", { required: "Please Enter Email !" })}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.phone && (
                    <p className="text-red font-mono text-md">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    SpecialiZation:
                  </label>
                  <input
                    type="text"
                    {...register("specilization", {
                      required: "Please Enter specilization !",
                    })}
                    placeholder="Enter SpecialiZation"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.specilization && (
                    <p className="text-red font-mono text-md ">
                      {errors.specilization.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Please Enter password !",
                    })}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.password && (
                    <p className="text-red font-mono text-md ">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    {...register("comformpassword", {
                      required: "Please Comform your password !",
                    })}
                    placeholder="Enter your comform password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.comformpassword && (
                    <p className="text-red font-mono text-md ">
                      {errors.comformpassword.message}
                    </p>
                  )}
                </div>
                <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>Sign Up </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorAccount;
