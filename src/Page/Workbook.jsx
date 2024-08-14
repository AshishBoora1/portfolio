import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Sliders from "../Components/Slider";
import send_btn_img from "../assets/images/png/send_btn_img.png";
import { Bottom_Line_img, Perecentage_circle, Top_Line_img } from "../svgimages/Svgcode";
import Progressbar from "../Components/Progressbar";
import workbook_btn_img from "../assets/images/svg/workbook_btn_img.svg";
import workbook_btn_small_img from "../assets/images/svg/workbook_btn_small_img.svg";
import workbook_left_img from "../assets/images/png/workbook_left_img.png";
import workbook_right_img from "../assets/images/png/workbook_right_img.png";

function Workbook() {
  let data = [
    {
      comany_name: "JS",
    },
    {
      comany_name: "CSS",
    },
    {
      comany_name: "HTML",
    },
    {
      comany_name: "Node",
    },
    {
      comany_name: "React",
    },
  ];
  return (
    <div>
      <div className="bg_img relative min-h-screen xxl:h-screen  pb-5 pe-3 bg-no-repeat bg-cover border-[20px] xxl:border-[30px] border-black  pt-3">
        <Navbar />
        <div className=" max-w-[1440px] mx-auto px-3">
          <h6 className="ms-3 absolute text-white font-normal  left-3 top-[14%] inline text-base border-b pr-3 border-white after:content-[''] after:w-[6px] after:bg-white after:h-[6px] after:absolute after:bottom-[-3px] after:right-0 after:rounded-full text-nowrap">
            <sup className=" text-base">*</sup> 2020 / 2024
          </h6>
          <div className=" absolute top-24 left-[20%] hidden md:block animation">
            <img src={workbook_right_img} alt="workbook_right_img" />
          </div>
          <div>
            <Sliders />
          </div>
          <div className="flex justify-center relative my-5 lg:my-0 ">
            <div className=" absolute right-0 lg:right-[15%] -top-10  hidden md:block">
              <img src={workbook_left_img} alt="workbook_left_img" />
            </div>
            <div className=" relative">
              <img
                className=" absolute -top-12 sm:-top-10 -left-10"
                src={workbook_btn_img}
                alt="workbook_btn_img"
              />
              <img
                className=" absolute -bottom-8 -right-8"
                src={workbook_btn_small_img}
                alt="workbook_btn_small_img"
              />
              <Link
                to="/Detailpage"
                className=" flex items-center justify-center gap-3  py-4 px-10 md:px-12 bg-white rounded-[10px] sm:w-[303px] text-start "
              >
                <span className="text-[23px] font-normal text-black text-nowrap">
                  {" "}
                  View Project
                </span>{" "}
                <img width={"40%"} src={send_btn_img} alt="send_btn_img" />
              </Link>
            </div>
          </div>
          <div className=" flex items-center gap-5 sm:gap-0  flex-wrap sm:flex-nowrap justify-end sm:justify-between mt-8">
            <div className=" flex gap-3 gap-y-5 lg:gap-10 flex-wrap lg:flex-nowrap xxl:gap-16 items-center ">
              {data.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 w-[30%] sm:w-[30%] lg:w-full opacity-60 hover:opacity-100 duration-500"
                  >
                    <div>
                      <Progressbar />
                    </div>
                    <h4 className=" text-sm sm:text-base md:text-lg text-nowrap">
                      {value.comany_name}
                    </h4>
                  </div>
                );
              })}
            </div>
            <div className=" flex gap-8">
              <div className="h-[11px] w-[11px] bg-[white] rotate-45"></div>
              <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
              <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
              <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workbook;
