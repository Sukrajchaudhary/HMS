import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginResponse, createUserAsync, error } from "../authSlice";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const user = useSelector(loginResponse);
  console.log(user);
  const Sgnuperror = useSelector(error);
  console.log(Sgnuperror);
  const loginToken = localStorage.getItem("token");
  const admin=JSON.parse(loginToken)
  if (admin) {
    if (admin.role === "admine") {
      navigate("/admin/dashboard");
    } else if (admin.role === "user") {
      navigate("/user");
    }
  }
  return (
    <>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <p className="text-2xl font-bold text-pink-600">
                  {" "}
                  0151 475 4450{" "}
                </p>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form
                noValidate
                onSubmit={handleSubmit((data) => {
                  dispatch(createUserAsync(data));
                  reset();
                })}
                className="space-y-4"
              >
                <div>
                  <label className="sr-only" htmlFor="name">
                    Enter your Full Name:
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Full Name"
                    type="text"
                    {...register("username", {
                      required: "Please Enter  your username:",
                    })}
                  />
                  {errors.username && (
                    <p className="text-red">{errors.username.message}</p>
                  )}
                </div>

                <div>
                  <label className="sr-only" htmlFor="name">
                    Enter your Email Address:
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Enter your Email Addresses:"
                    type="email"
                    {...register("email", {
                      required: "Please Enter your Email Address:",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Enter your Email Address:
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Enter your Phone Number:"
                    type="text"
                    {...register("phone", {
                      required: "Please Enter your Phone Number::",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Enter your Password:
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Enter your password:"
                    type="password"
                    {...register("password", {
                      required: "Please Enter your Password:",
                    })}
                  />
                  {errors.password && (
                    <p className="text-red">{errors.password.message}</p>
                  )}
                </div>
                <div className="relative">
                  <p className="mt-1 text-pretty text-sm text-gray-700">
                    Select Gender:
                  </p> 
               <Link to='/Forget'>
               <p className="absolute right-0 top-0 text-blue  font-bold cursor-pointer">Forget Password ?</p></Link>
                  <select
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    {...register("gender", {
                      required: "Please Select Your Gender:",
                    })}
                    defaultValue=""
                  >
                    <option value="">Please Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                  {errors.gender && (
                    <p className="text-[red]">{errors.gender.message}</p>
                  )}
                </div>
                {Sgnuperror && (
                  <p className="text-red">{Sgnuperror?.message}</p>
                )}
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-500 text-blue">
                    Already Have an Account?
                    <Link class="underline" to="/Login">
                      Login
                    </Link>
                  </p>

                  <button
                    type="submit"
                    class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white bg-blue"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
