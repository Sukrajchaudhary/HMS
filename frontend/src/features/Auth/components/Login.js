import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginUserAsync, error, loginResponse } from "../authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const LoginUser = useSelector(loginResponse);
  const loginerror = useSelector(error);
  const loginToken = localStorage.getItem("token");
  const admin = JSON.parse(loginToken);
  console.log("login",LoginUser?.role)
  // if (admin) {
  //   if (admin.role === "admine") {
  //     navigate("/admin/dashboard");
  //   } else if (admin.role === "user") {
  //     navigate("/user");
  //   }
  // }

  return (
    <>
      {LoginUser?.role==="user" && <Navigate to="/user"></Navigate>}
       {LoginUser?.role==="admine" &&<Navigate to='/admin/dashboard'></Navigate>}
      <section className="relative flex  flex-wrap lg:h-screen lg:items-center ">
        <div className="w-full px-4 py-5 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Get started today!
            </h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form
            className="mx-auto mb-32  mt-5 max-w-md space-y-4"
            noValidate
            onSubmit={handleSubmit((data) => {
              dispatch(LoginUserAsync(data));
              reset();
            })}
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "Please Enter  Email Address:",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "Email is Not Validate:",
                    },
                  })}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
                {errors.email && (
                  <p className="text-red">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Please Enter Your password:",
                  })}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
                {errors.password && (
                  <p className="text-red">{errors.password.message}</p>
                )}
              </div>
            </div>
            {loginerror && (
              <p className="text-red">
                {typeof loginerror === "object"
                  ? loginerror.message
                  : loginerror}
              </p>
            )}

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                No account?
                <Link
                  className="underline cursor-pointer text-blue"
                  to="/Signup"
                >
                  Sign up
                </Link>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue px-5 py-3 text-sm font-medium text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="relative h-full w-full sm:h-96 lg:h-full lg:w-1/2 -z-10">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-[500px] mt-5 w-[500px] object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Login;
