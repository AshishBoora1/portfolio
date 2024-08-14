import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import client_img from "../assets/images/png/client_img.png";
import download_icon from "../assets/images/svg/download_icon.svg";
import flower_imges from "../assets/images/png/flower_imges.png";
import {
  Bottom_Line_img,
  Call_icon,
  Christmas_star,
  Developer_text,
  Email_icon,
  Flower_img,
  Githubicon,
  Insta_icon,
 
} from "../svgimages/Svgcode";
import Progressbar from "../Components/Progressbar";
import workbook_right_img from "../assets/images/png/workbook_right_img.png";
import workbook_left_img from "../assets/images/png/workbook_left_img.png";


function Resume() {
  let data = [
    {
      comany_name: "UI/UX Deigning",
    },
    {
      comany_name: "Marketing",
    },
    {
      comany_name: "Team Leading Skills",
    },
    {
      comany_name: "Conversation skills",
    },
  ];
  return (
    <div className=" relative">
      <img
        className=" absolute bottom-0 right-0 z-40 hidden lg:block"
        src={flower_imges}
        alt="flower_imges"
      />
      <nav>
        <div className="bg_img min-h-screen relative pb-10 pe-3 bg-no-repeat bg-cover border-[20px] md:border-[35px] border-black  pt-3">
          <img
            className=" absolute left-[30%] sm:left-[50%] xl:left-[60%] top-[4%] md:top-[6%] xl:top-[10%]"
            src={workbook_right_img}
            alt="workbook_right_img"
          />
          <img className=" absolute right-0 sm:right-10 top-[38%] sm:top-[45%] md:top-[35%] xl:top-[40%]" src={workbook_left_img} alt="workbook_left_img" />
          <div>
            {" "}
            <Navbar />
          </div>
          <div className=" max-w-[1240px] mx-auto px-3">
            <div className=" flex justify-center gap-4 sm:gap-5 relative md:gap-0 pt-10 md:pt-0 md:justify-between flex-wrap md:flex-nowrap items-center">
              <button className=" absolute right-[70%] md:right-10 xxl:-right-[8%] -top-20 xxl:top-0">
                {" "}
                <img src={download_icon} alt="download_icon" />
              </button>
              <div className=" w-full sm:w-10/12 md:w-[38%]">
                <img width={"100%"} src={client_img} alt="client_img" />
              </div>
              <div className=" w-full sm:w-10/12 md:w-7/12 pt-8">
                <h2 className=" text-lg sm:text-[28px] lg:text-[34px]">
                  Profile Info
                </h2>
                <p className=" text-base md:text-lg mt-3 sm:mt-4  relative xxl:w-[92%]">
                  Assists the Department head in carrying out web develpment &
                  works closely with the skills heads and promoting and showing
                  our skills . My communication skills are excellent , and i
                  have a strong commitment to research
                </p>
                <div className=" flex sm:items-center flex-col sm:flex-row gap-6 sm:gap-0 sm:justify-between mt-4 md:mt-8 xl:mt-12">
                  <div>
                    <h1 className=" text-3xl mt-2 sm:mt-0 sm:text-2xl lg:text-4xl  xl:text-[54px] font-normal">
                      Vikash Boora
                    </h1>
                    <p className=" text-base lg:text-lg xl:text-2xl font-normal mt-2  md:mt-5">
                      32 Year Old Full Stack Developer
                    </p>
                  </div>
                  <div className=" flex flex-col gap-3 md:gap-4 ">
                    <Link to="" className="opacity-60 hover:opacity-100 duration-500 flex gap-2 items-center">
                      {" "}
                      <Email_icon />
                      <span className="   text-xs md:text-base opacity-60">
                        thevikash34@gmail.com
                      </span>
                    </Link>
                    <Link to="" className="opacity-60 hover:opacity-100 duration-500 flex gap-2 items-center">
                      {" "}
                      <Call_icon />
                      <span className="text-xs md:text-base opacity-60">
                        +91 85421 10055
                      </span>
                    </Link>
                    <Link to="" className="opacity-60 hover:opacity-100 duration-500 flex gap-2 items-center">
                      {" "}
                      <Insta_icon />
                      <span className="text-xs md:text-base opacity-60">
                        @vikash boora
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-start flex-wrap lg:flex-nowrap gap-10 sm:gap-16 lg:gap-0 justify-around lg:pt-10">
              <div className=" w-full sm:w-11/12 lg:w-4/12 pt-10">
                <h2 className=" text-[#FCFF78]  text-3xl  xl:text-[44px]">
                  My Skills
                </h2>
                <p className=" text-base sm:text-lg md:text-xl font-normal mt-4">
                  I have some skills to showcase my Talent with this : -
                </p>
                <div className=" mt-8 lg:mt-12">
                  <p className=" text-xl sm:text-2xl font-normal">
                    Personal Skills
                  </p>
                  <div className=" flex flex-wrap lg:flex-col gap-10 mt-6">
                    {data
                      .map((value, index) => {
                        return (
                          <div
                            key={index}
                            className=" flex items-center lg:gap-2 w-[42%] sm:w-[45%] lg:w-full"
                          >
                            <div className=" w-[10px] sm:w-auto">
                              <Christmas_star />
                            </div>
                            <div>
                              <div className=" flex">
                                <h4 className=" text-sm text-nowrap sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl xx::text-[38px]">
                                  {value.comany_name}
                                </h4>
                                <div className="w-4 ms-2">
                                  <Christmas_star />
                                </div>
                              </div>
                              <p className=" text-xs sm:text-base xl:text-xl sm:mt-2 xl:mt-4">
                                Jan 2020 - Nov 2021
                              </p>
                            </div>
                          </div>
                        );
                      })
                      .slice(0, 4)}
                  </div>
                </div>
                <div className=" mt-8 lg:mt-12">
                  <h2 className=" text-[#FCFF78]  text-3xl  xl:text-[44px]">
                    language’s
                  </h2>
                  <div className=" flex  flex-wrap lg:flex-col justify-between mt-3">
                    {data.map((value, index) => {
                      return (
                        <div
                          key={index}
                          className="flex opacity-60 hover:opacity-100 duration-500 items-center mt-4 gap-4 sm:mt-5 w-[45%] lg:w-full"
                        >
                          <div>
                            <Progressbar />
                          </div>
                          <h4 className=" text-sm sm:text-base md:text-lg text-nowrap">
                            Java Script
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className=" w-full sm:w-11/12 lg:w-6/12 flex flex-wrap sm:flex-nowrap justify-center relative sm:justify-between">
                <div className=" w-11/12 sm:w-7/12">
                  <div>
                    <h2 className=" text-[#FCFF78]  text-3xl  xl:text-[44px]">
                      Work Experience
                    </h2>
                    <div className=" flex flex-col gap-6 xl:gap-12">
                      <div>
                        <p className=" text-xl xl:text-[28px] font-normal my-6">
                          Senior Web Developer
                        </p>
                        <ul className=" flex flex-col gap-3 list-disc">
                          <li className=" text-base xl:text-xl opacity-60">
                            Degree Holder in Web Development
                          </li>
                          <li className=" text-base xl:text-xl opacity-60">
                            Gained Extensive Traning
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className=" text-xl xl:text-[28px] font-normal my-5">
                          Senior Web Developer
                        </p>
                        <ul className=" flex flex-col gap-3 list-disc">
                          <li className=" text-base xl:text-xl opacity-60">
                            Degree Holder in Web Development
                          </li>
                          <li className=" text-base xl:text-xl opacity-60">
                            Gained Extensive Traning
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className=" text-xl xl:text-[28px] font-normal my-5">
                          Senior Web Developer
                        </p>
                        <ul className=" flex flex-col gap-3 list-disc">
                          <li className=" text-base xl:text-xl opacity-60">
                            Degree Holder in Web Development
                          </li>
                          <li className=" text-base xl:text-xl opacity-60">
                            Gained Extensive Traning
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-8 lg:mt-12">
                    <h2 className=" text-[#FCFF78]  text-3xl  xl:text-[44px]">
                      Education
                    </h2>
                    <div className=" flex flex-col gap-5 lg:gap-8">
                      <div>
                        <p className=" text-xl xl:text-[28px] font-normal my-5">
                          Senior Web Developer
                        </p>
                        <ul className=" flex flex-col gap-3 list-disc">
                          <li className=" text-base xl:text-xl opacity-60">
                            Degree Holder in Web Development
                          </li>
                          <li className=" text-base xl:text-xl opacity-60">
                            Gained Extensive Traning
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className=" text-xl xl:text-[28px] font-normal my-5">
                          Senior Web Developer
                        </p>
                        <ul className=" flex flex-col gap-3 list-disc">
                          <li className=" text-base xl:text-xl opacity-60">
                            Degree Holder in Web Development
                          </li>
                          <li className=" text-base xl:text-xl opacity-60">
                            Gained Extensive Traning
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" absolute flex right-[-10px] sm:right-0 flex-col sm:w-2/12 h-[85%] top-[43px] sm:top-0 sm:h-auto sm:relative justify-between sm:justify-around sm:after:content-[''] sm:after:h-full sm:after:w-[2px] sm:after:bg-white sm:after:absolute sm:after:-left-20 sm:after:top-0">
                  <div className=" relative z-50">
                    <div className=" absolute -top-4 sm:top-[50%] -translate-y-[50%] left-4 sm:-left-[99px] xl:-left-[97%] rotate-[40deg]">
                      <Flower_img />
                    </div>
                    <p className=" text-base font-normal">
                      Jan 2020 <span className=" block">Nov 2021</span>
                    </p>
                  </div>
                  <div className=" relative z-50">
                    <div className=" absolute -top-4 sm:top-[50%] -translate-y-[50%] left-4 sm:-left-[99px] xl:-left-[97%] rotate-[40deg]">
                      <Flower_img />
                    </div>
                    <p className=" text-base font-normal">
                      Jan 2020 <span className=" block">Nov 2021</span>
                    </p>
                  </div>
                  <div className=" relative z-50">
                    <div className=" absolute -top-4 sm:top-[50%] -translate-y-[50%] left-4 sm:-left-[99px] xl:-left-[97%] rotate-[40deg]">
                      <Flower_img />
                    </div>
                    <p className=" text-base font-normal">
                      Jan 2020 <span className=" block">Nov 2021</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Resume;
