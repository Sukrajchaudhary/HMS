import React from "react";
import { ArrowRight } from "lucide-react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ResetNewPasswordAsync, Mail } from "../authSlice";
const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const dispatch = useDispatch();
  const status = useSelector(Mail);
  return (
    <div>
      {status && <Navigate to="/login"></Navigate>}
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Reset your Password
            </h2>
            <form
              onSubmit={handleSubmit((data) => {
                dispatch(
                  ResetNewPasswordAsync({
                    resetToken: token,
                    email: email,
                    newPassword: data.password,
                  })
                );
                reset();
              })}
              className="mt-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    New Password:{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="password"
                      {...register("password", {
                        required: "Please Enter your password:",
                      })}
                    ></input>
                    {errors.password && (
                      <p className="text-red">{errors.password.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Comfrom New Password:{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Comform Password"
                      {...register("cpassword", {
                        required: "Please Enter  Comform Password",
                        validate: (val) => {
                          if (watch("password") != val) {
                            return "Your passwords do no match";
                          }
                        },
                      })}
                    ></input>
                    {errors.cpassword && (
                      <p className="text-red">{errors.cpassword.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-blue px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Comfrom <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
