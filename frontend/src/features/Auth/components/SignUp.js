import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
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
              onSubmit={handleSubmit((data) => console.log(data))}
              className="space-y-4"
            >
              <div>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    {...register("username", {
                      required: "Please Enter  your username:",
                    })}
                  />
                </div>
                {errors.username && (
                  <p className="text-red">{errors.username.message}</p>
                )}
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    {...register("email", {
                      required: "Please Enter  your email Address:",
                      pattern: {
                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                        message: "Email is Not Validate:",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "Please Enter your Phone Number:",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    APPOINTMENT DATE
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="APPOINTMENT DATE"
                    type="date"
                    {...register("appoinmenttimedate", {
                      required: "Please Enter your appoinmenttimedate:",
                    })}
                  />
                   {errors.appoinmenttimedate && (
                    <p className="text-red">{errors.appoinmenttimedate.message}</p>
                  )}
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    APPOINTMENT TIME
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="APPOINTMENT TIME"
                    type="time"
                    {...register("appoinmenttime", {
                      required: "Please Enter your appoinmenttime:",
                    })}
                  />
                    {errors.appoinmenttime && (
                    <p className="text-red">{errors.appoinmenttime.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  {...register("message", {
                    required: "Please Enter your message:",
                  })}
                ></textarea>
                  {errors.message && (
                    <p className="text-red">{errors.message.message}</p>
                  )}
              </div>

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
  );
};

export default SignUp;
