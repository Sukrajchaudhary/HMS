import { Link } from "react-router-dom";
import Home from "../Home/Home";
import Booking from "../Home/Booking";
import Services from "../../components/Services";
import Features from "../../components/Features";
import Doctors from "../../components/Doctors";
import PricingSections from "../../components/PricingSections";
import Footer from "../../components/Footer";
import  Blog from "../../components/Blog";

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
      <section className=" w-screen relative bg-[#F8F8F8] max-md:hidden">
        <div className="mx-auto flex justify-around items-center  h-[97px] ">
          <Link to="/">
            <div className="flex flex-col justify-center  items-center text-blue font-serif font-bold">
              <div className="text-blue text-[24px]">TOOTHCARE</div>
              <div className="text-[12px] text-[#AAAAAA]">
                DENTAL CLINIC SERVICES
              </div>
            </div>
          </Link>
          <div className="flex justify-center items-center">
            <div className="flex mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-blue "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-blue text-[14px] font-normal">Monday-Friday</p>
              <p className="text-[14px] text-[#AAAAAA] font-bold">
                8:00AM-8:00pm
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 text-blue"
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

          <div className="flex justify-center items-center">
            <div className="flex mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-blue"
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
      </section>
      <header className="sticky top-0 z-10">
        <nav className="bg-nav-bg   drop-shadow-lg ">
          <div className="flex justify-around items-center mr-auto h-[73px]">
            <div className="px-3 h-[100%] flex justify-center items-center bg-blue order-1">
              <a href="#appoinment">
                <p className="flex text-[#FFFFFF] font-bold text-[13px] cursor-pointer">
                  MAKE AN APPOINTMENT
                </p>
              </a>
            </div>
            <div className="flex w-screen justify-around cursor-pointer max-md:hidden ">
              {navigation.map((item, index) => (
                <a href={item.href} key={index}>
                  <div className="relative">
                    <div className="text-text font-medium relative group uppercase">
                      {item.name}
                      <div className="absolute bottom-0 left-0 w-full h-0 bg-blue transition-all  group-hover:h-[2px]"></div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
      {children ? (
        children
      ) : (
        <>
          <section id="about">
            <Home></Home>
          </section>
          <div id="appoinment">
            <Booking></Booking>
          </div>
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
