import React from "react";
// import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown} from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const MobileNav = () => {
  return (
    <>
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-zomato-400 text-white px-3 py-2 rounded-full">
          Use App
        </button>
      </div>
    </div>
    </>
  )
};

const LargeNav = () => {

    return (
      <>
<div className="hidden lg:inline container px-20 mx-auto">
          <div className="hidden lg:flex gap-4 w-full items-center justify-around  ">
            <div className="w-28">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div className=" w-full bg-white shadow-md p-3 flex items-center gap-3 border-none rounded">
              <div className="flex items-center gap-2 border-r-2 border-gray-100/50 pr-2">
                <span className="text-zomato-400">
                  <HiLocationMarker  />
                </span>
                <input
                  type="text"
                  placeholder="Chennai"
                  className=" focus:outline-none"
                />
                <IoMdArrowDropdown className="w-5 h-5 " style={{color:'#cbccd0'}} />
              </div>
              <div className="flex w-full items-center gap-2">
                <RiSearch2Line className="w-5 h-6 " style={{color:'#cbccd0'}} />
                <input
                  type="search"
                  placeholder="Search for restaurant, cusine or a dish"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>

            <div className="ml-24 mr-10 flex gap-5 text-gray-400">
                      <button
                        className="text-xl hover:text-gray-600">
                              Login
                            </button>
                            <button className="text-xl hover:text-gray-600">
                              Signup
                            </button>
                            </div>
          </div>
</div>
      </>
    );
  };


const Navbar = () => {
  return (
    <>
    <nav className="p-4 bg-white shadow-md lg:shadow-none -px-4 flex items-center">
          <MobileNav />
          <LargeNav className=""/>
        </nav>
    </>
  )
};

export default Navbar;
