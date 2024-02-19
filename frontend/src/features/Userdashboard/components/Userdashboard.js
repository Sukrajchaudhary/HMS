import React, { useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import img1 from "../../../Assest/sukraj.JPG";
import { Link, Navigate } from "react-router-dom";
import Doctors from "../../Doctors/components/Doctors";
import { useLocation } from "react-router-dom";
import { getUsersAsync, userinfo } from "../../Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
const Userdashboard = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const pathName = location.pathname; 
  const userDetail = useSelector(userinfo);
  const loginToken = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAsync());
  }, [loginToken]);

  return (
    <>
      {!loginToken && <Navigate to="/" replace={true}></Navigate>}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="flex ms-2 md:me-24">
                <div className="flex flex-col justify-start text-blue font-serif font-bold">
                  <div className="text-blue text-[24px]">TOOTHCARE</div>
                  <div className="text-[12px] text-[#AAAAAA]">
                    DENTAL CLINIC SERVICES
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div className="w-full max-w-sm px-4">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={`
                ${open ? "text-white" : "text-blue"}
                group inline-flex items-center rounded-md  px-3 py-2 text-base font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                        >
                          <button
                            type="button"
                            className="flex text-sm bg-gray-800 border-2 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            aria-expanded="false"
                            data-dropdown-toggle="dropdown-user"
                          >
                            <span className="sr-only">Open user menu</span>
                            {userDetail?.pic ? (
                              <img
                                className="w-12 h-12 rounded-full object-cover justify-center"
                                src={userDetail?.pic}
                                alt="user photo"
                              />
                            ) : (
                              <span className="w-12 h-12 rounded-full object-cover justify-center flex items-center font-bold text-lg">
                                {userDetail?.username.charAt(0)}
                              </span>
                            )}
                          </button>
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute right-0 z-10 mt-3 w-64 max-w-sm  px-4 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                              <div className="relative  bg-white   lg:grid-cols-2">
                                <div class="px-4 py-3" role="none">
                                  <p
                                    class="text-sm font-medium text-[black] dark:text-white"
                                    role="none"
                                  >
                                    Hi : {userDetail?.username}
                                  </p>
                                  <p
                                    class="text-sm font-medium text-blue  dark:text-white"
                                    role="none"
                                  >
                                    {userDetail?.email}
                                  </p>

                                  {userDetail?.role === "admine" ? (
                                    <p
                                      class="text-sm bg-[green] text-white border-2 rounded-lg flex justify-center items-center text-md font-medium  truncate dark:text-gray-300"
                                      role="none"
                                    >
                                      {userDetail?.role}
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <ul class="py-1" role="none">
                                  <Link to="/user/update/profile">
                                    <li>
                                      <p
                                        class="block px-4 py-2 hover:bg-blue text-sm text-gray-700 hover:bg-gray-100 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                        role="menuitem"
                                      >
                                        Upload Profile Picture
                                      </p>
                                    </li>
                                  </Link>
                                  <li>
                                    <p
                                      class="block px-4 py-2  hover:bg-blue text-sm text-[black] cursor-pointer "
                                      role="menuitem"
                                    >
                                      Sign out
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? "-translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          {/* Sidebar content */}
          <ul className="space-y-2 mt-4 font-medium">
            <li>
              <Link
                to="/doctors"
                className={`flex ${
                  pathName === "/doctors" || pathName === "/user"
                    ? "bg-gray text-white"
                    : ""
                } transition-all active:text-white items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-blue transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Doctors</span>
              </Link>
            </li>
            <li className={`bg-blue-800 text-white}`}>
              <Link
                to="/appoinments"
                className={`flex ${
                  pathName === "/appoinments" ? "bg-gray" : ""
                } transition-all active:text-white items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-blue "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  View Appoinment
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-blue"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  CHAT with Doctors
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <main>
        <div className="mx-auto max-w-7xl py-4 sm:px-3 lg:px-4">
          <div
            className="p-4 sm:ml-64 mt-10"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div className="mx-auto ">
              {children ? children : <Doctors></Doctors>}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Userdashboard;
