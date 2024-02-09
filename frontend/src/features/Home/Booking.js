import React from "react";
import Modal from "../../Common/Modal";
import { useModal } from "../../Common/ModalContext";
const Booking = () => {
  const { setOpen } = useModal();
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <>
      <Modal />
      <section className="bg-gray-100" id="appoinment">
        <div className="mx-auto max-w-screen-xl px-2 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 place-content-start gap-x-14 gap-y-8 lg:grid-cols-5">
            <div className="rounded-sm bg-blue p-3 shadow-lg lg:col-span-3  lg:p-12">
              <p className="text-white">WE ARE HERE FOR YOU</p>
              <p className="text text-3xl text-white font-medium mb-6">
                Make An Appointment
              </p>
              <form action="" className="space-y-8 mt-20">
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
                    onClick={(e) => handleClick(e)}
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium bg-white text-blue sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg text-blue font-bold text-[14px]">
                LEARN ANYTHING
              </p>
              <p className="text-4xl font-medium w-[535px] ">
                We Offer Best Dental Services
              </p>
              <div className="mt-7  ">
                <div className="w-[535px] h-[180px] flex gap-6 group bg-[#E9F6FB] hover:bg-blue transition-all  px-6">
                  <div className="logo flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-14 h-14 text-blue group-hover:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col border-1 justify-center gap-5  items-start ">
                    <p className="font-medium text-xl text-[#323232]">
                      Easy Booking
                    </p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8  ">
                <div className="w-[535px] h-[180px] group flex gap-6 bg-[#E9F6FB] hover:bg-blue transition-all  px-6">
                  <div className="logo flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-14 h-14 text-blue group-hover:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col border-1 justify-center gap-5  items-start ">
                    <p className="font-medium text-xl text-[#323232]">
                      Team Dentist
                    </p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8  ">
                <div className="w-[535px] group h-[180px] flex gap-6 bg-[#E9F6FB] hover:bg-blue transition-all  px-6">
                  <div className="logo flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-14 h-14 text-blue group-hover:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col border-1 justify-center gap-5  items-start ">
                    <p className="font-medium text-xl text-[#323232]">
                      Best Price Guarantee
                    </p>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
