import React, { useState } from "react";
import {
  Flower_img,
  Githubicon,
  Linkdinicon,
  Logo,
  Slickicon,
  Vectoricon,
} from "../svgimages/Svgcode";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
function Navbar() {
  const loaction = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>
      <div>
        <div className="  flex items-start justify-between md:gap-[72px] pe-3">
          <div className="flex items-center justify-between md:pe-12 px-5 py-1 xxl:py-[10px] navbar_linear_gradinent rounded-e-[50px] w-[80%] md:w-full duration-1000">
            <div className=" w-[60%] sm:w-[40%] md:w-[157px]">
              <Logo />
            </div>
            <div
              className={` ${
                showNavbar
                  ? "fixed top-[12%] py-5  left-0 flex gap-5 md:gap-12 z-[9999] bg-black flex-col items-center navbar_linear_gradinent  px-10 "
                  : "hidden md:flex gap-5 md:gap-12 items-center"
              }`}
            >
              <Link
                className={` ${
                  loaction.pathname === "/"
                    ? "after:content-['']  text-white after:w-full after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-white"
                    : null
                } font-normal relative text-xl text-[#717171] after:content-['']  hover:text-white hover:after:w-full after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-white`}
                to="/"
              >
                Home
              </Link>
              <Link
                className={` ${
                  loaction.pathname === "/Workbook" ||
                  loaction.pathname === "/Detailpage"
                    ? "after:content-['']  text-white after:w-full after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-white"
                    : null
                } font-normal relative text-xl text-[#717171] after:content-['']  hover:text-white hover:after:w-full after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-white`}
                to="/Workbook"
              >
                Workbook
              </Link>
              <Link
                className={` ${
                  loaction.pathname === "/Resume"
                    ? "after:content-['']  text-white after:w-full after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-white"
                    : null
                } font-normal relative text-xl text-[#717171] after:content-['']  hover:text-white hover:after:w-full after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-white`}
                to="/Resume"
              >
                Resume
              </Link>
            </div>
            <div
              className=" flex flex-col md:hidden cursor-pointer"
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <span className="h-[1px] w-[50px] bg-white"></span>
              <span className="h-[1px] w-[50px] bg-white my-4"></span>
              <span className="h-[1px] w-[50px] bg-white"></span>
            </div>
          </div>
          <div>
            <div className=" flex flex-col gap-4">
              <Link to={"/"}>
                {" "}
                <Linkdinicon />
              </Link>
              <Link to={"/"}>
                {" "}
                <Vectoricon />
              </Link>
              <Link to={"/"}>
                {" "}
                <Githubicon />
              </Link>
              <Link to={"/"}>
                {" "}
                <Slickicon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
