import React from "react";
import { useForm } from "react-hook-form";
import {ResetPasswordAsync,Mail} from "../authSlice"
import {useDispatch,useSelector} from "react-redux"
const Forget = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
const dispatch=useDispatch();
const mailentStatus=useSelector(Mail);
console.log(mailentStatus)
  const onSubmit = (data) => {
    console.log(data);
    dispatch(ResetPasswordAsync(data))
    reset();
  };

  return (
    <div className="h-screen w-full flex mt-32 justify-center">
      <form
        className="flex flex-col  space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full">
          <input
            className="h-10 w-full rounded-md border border-black/30 bg-transparent px-3 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Please enter your email address!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address format",
              },
            })}
          />
          {errors.email && (
            <p className="text-xs text-red">{errors.email.message}</p>
          )}
          {mailentStatus && (
            <p className="text-sm text-[green] font-bold ">Reset Mail have been sent SuccessFully please check your Mail</p>
          )}
        </div>
        <button
          type="submit"
          className="rounded-md w-56 bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Send Mail
        </button>
      </form>
    </div>
  );
};

export default Forget;
