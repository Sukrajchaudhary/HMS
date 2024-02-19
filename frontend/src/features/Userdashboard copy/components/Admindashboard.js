import { useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, useLocation} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import AllUsersAppoinment from "./AllUsersAppoinment";
import {userinfo,getUsersAsync} from '../../Auth/authSlice'
const Admindashboard = ({ children }) => {
  const UserDetails=useSelector(userinfo);
  const dispatch=useDispatch()
  console.log(UserDetails)
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(()=>{
dispatch(getUsersAsync())
  },[])
  return (
    <>
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
                          {/* <button
                            type="button"
                            className="flex text-sm bg-gray-800 border-2 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            aria-expanded="false"
                            data-dropdown-toggle="dropdown-user"
                          >
                            <span className="sr-only">Open user menu</span>

                            <img
                              className="w-12 h-12 rounded-full object-cover justify-center"
                              src={null}
                              alt="user photo"
                            />
                          </button> */}
                          <button
                              type="button"
                              className="flex text-sm bg-gray-800 border-2 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                              aria-expanded="false"
                              data-dropdown-toggle="dropdown-user"
                            >
                              <span className="sr-only">Open user menu</span>
                              {UserDetails?.pic ? (
                                <img
                                  className="w-12 h-12 rounded-full object-cover justify-center"
                                  src={UserDetails?.pic}
                                  alt="user photo"
                                />
                              ) : (
                                <span className="w-12 h-12 rounded-full object-cover justify-center flex items-center font-bold text-lg">
                                  {UserDetails?.username.charAt(0)}
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
                                    Hi : {UserDetails?.username} 
                                  
                                  </p>
                                  <p
                                    class="text-sm font-medium text-blue truncate dark:text-gray-300"
                                    role="none"
                                  >
                                  {UserDetails?.email}
                                 
                                  </p>
                                  {UserDetails?.role === "admine" ? (
                                    <p
                                      class="text-sm bg-[green] text-white border-2 rounded-lg flex justify-center items-center text-md font-medium  truncate dark:text-gray-300"
                                      role="none"
                                    >
                                      {UserDetails?.role}
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
          <ul class="space-y-3 mt-6 font-medium">
            <Link to="/admin/dashboard/alluserappoinment">
              <li
                className={`${
                  location.pathname === "/admin/dashboard" ||
                  location.pathname === "/admin/dashboard/alluserappoinment"
                    ? "bg-[#f1e7e7]"
                    : ""
                } rounded-md`}
              >
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <span class="flex-1 ms-3 whitespace-nowrap text-sm font-bold">
                    View All Appoinments
                  </span>
                </a>
              </li>
            </Link>
            <Link to="/admin/dashboard/addblog">
              <li
                className={`${
                  location.pathname === "/admin/dashboard/addblog"
                    ? "bg-[#f1e7e7]"
                    : ""
                } rounded-md`}
              >
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <span class="flex-1 ms-3 whitespace-nowrap">Add Blog</span>
                </a>
              </li>
            </Link>
            {/* <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </a>
            </li> */}
            <Link to="/admin/dashboard/doctor/create/account">
              <li
                className={`${
                  location.pathname === "/admin/dashboard/doctor/create/account"
                    ? "bg-[#f1e7e7]"
                    : ""
                } rounded-md`}
              >
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-blue transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    Create Doctor Account
                  </span>
                </a>
              </li>
            </Link>
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
              {children ? children : <AllUsersAppoinment></AllUsersAppoinment>}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Admindashboard;
