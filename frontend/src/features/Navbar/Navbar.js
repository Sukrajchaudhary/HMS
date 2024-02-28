import { Link } from "react-router-dom";
import Home from "../Home/Home";
import Booking from "../Home/Booking";
import Services from "../../components/Services";
import Features from "../../components/Features";
import Doctors from "../../components/Doctors";
import PricingSections from "../../components/PricingSections";
import Footer from "../../components/Footer";
import Blog from "../../components/Blog";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Dentist", href: "#doctor", current: false },
  { name: "About", href: "#about", current: false },
  { name: "Services", href: "#services", current: true },
  { name: "Blog", href: "#Blog", current: false },
  { name: "Pricing", href: "#pricing", current: false },
  { name: "Contact", href: "#contact", current: false },
];

export default function Navbar({ children }) {
  return (
    <>
      <header>
        <div className="mx-auto max-w-screen-xl p-7">
          <div className="sm:flex justify-start sm:items-center sm:justify-between">
            <Link to="/">
              <div className="flex flex-col justify-center  items-center text-blue font-serif font-bold">
                <div className="text-blue text-[24px]">TOOTHCARE</div>
                <div className="text-[12px] text-[#AAAAAA]">
                  DENTAL CLINIC SERVICES
                </div>
              </div>
            </Link>
            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center justify-start">
              <div className=" flex ">
                <div className="flex mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="w-8 h-8 md:w-12 md:h-12 text-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="text-blue text-[14px] font-normal">
                    Monday-Friday
                  </p>
                  <p className="text-[14px] text-[#AAAAAA] font-bold">
                    8:00AM-8:00pm
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 md:w-12 md:h-12 text-blue"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <p className="text-blue text-[14px] font-normal">Call Us</p>
                  <p className="text-[14px] text-[#AAAAAA] font-bold">
                    +977-9809521702
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="w-8 h-8 md:w-12 md:h-12 text-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="text-blue text-[14px] font-normal">Location</p>
                  <p className="text-[14px] text-[#AAAAAA] font-bold">Dang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Disclosure
        as="nav"
        className="bg-[#5E16EB] shadow-md sticky top-0 z-50 "
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto rounded-lg cursor-pointer"
                      src="https://t4.ftcdn.net/jpg/03/02/68/13/240_F_302681399_JAWdWlL5WaAfzNcteq6jE6yCKYHf0iDA.webp"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`bg-gray-900 text-white text-gray-300 rounded-lg px-3 py-2 text-md font-medium"
                          `}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-2 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link to="/Signup">
                    <button className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1  focus:outline-none  active:text-opacity-75">
                      <span className="block rounded-full bg-blue text-white px-8 py-3 text-md font-medium group-hover:bg-transparent">
                        Signup
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>

      {children ? (
        children
      ) : (
        <>
          <section id="about">
            <Home></Home>
          </section>
          <section id="services">
            <Services></Services>
          </section>
          <Features></Features>
          <section id="doctor">
            <Doctors></Doctors>
          </section>
          <section id="Blog">
            <Blog></Blog>
          </section>
          <section id="pricing">
            <PricingSections></PricingSections>
          </section>
        </>
      )}
      <section id="contact">
        <Footer></Footer>
      </section>
    </>
  );
}
