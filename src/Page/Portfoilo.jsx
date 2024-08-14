import React from "react";
import group from "../assets/images/png/Group.png";
import { Link } from "react-router-dom";
import client_img from "../assets/images/png/client_img.png";
import {
  Bottom_Line_img,
  Call_icon,
  Christmas_star,
  Developer_text,
  Email_icon,
  Flower_img,
  Githubicon,
  Insta_icon,
  Linkdinicon,
  Logo,
  Perecentage_circle,
  Slickicon,
  Top_Line_img,
  Vectoricon,
} from "../svgimages/Svgcode";
import man_img from "../assets/images/png/man_img.png";
import over_the_year from "../assets/images/png/over_the_year.png";
import canteen_app from "../assets/images/png/canteen_app.png";
import hand_massege from "../assets/images/png/hand_massege.png";
import mobile_man_img from "../assets/images/png/mobile_man_img.png";
import send_message_text from "../assets/images/png/send_message_text.png";
import meassage_img from "../assets/images/png/meassage_img.png";
import half_circle from "../assets/images/png/half_circle.png";
import over_the_year_right_img from "../assets/images/png/over_the_year_right_img.png";
import over_the_year_card_img from "../assets/images/png/over_the_year_card_img.png";
import over_the_year_img from "../assets/images/png/over_the_year_img.png";
import OverYear_img from "../assets/images/svg/OverYear_img.svg";
import btn_img from "../assets/images/svg/btn_img.svg";
import pin_img from "../assets/images/svg/pin_img.svg";
import small_pin_img from "../assets/images/svg/small_pin_img.svg";
import send_btn_img from "../assets/images/png/send_btn_img.png";
import Navbar from "../Components/Navbar";
import Progressbar from "../Components/Progressbar";

function Portfoilo() {
  let data = [
    {
      comany_name: "company name",
    },
    {
      comany_name: "company name",
    },
    {
      comany_name: "company name",
    },
    {
      comany_name: "company name",
    },
  ];

  return (
    <div>
      <header className="bg_img pb-5 min-h-screen xl:h-screen flex  bg-no-repeat bg-cover  border-[20px]  xxl:border-[35px] xxl:border-b-[20px] border-black  pt-3 ">
        <div className=" container mx-auto flex flex-col">
          <div>
            {" "}
            <Navbar />
          </div>
          <div className=" flex justify-center xl:justify-between grow flex-wrap xl:flex-nowrap gap-20 xl:gap-0 py-10 md:py-20 xl:py-0  px-3 md:px-0">
            <div className=" w-full md:w-10/12 lg:w-9/12 xl:w-5/12 xxl:w-7/12 flex flex-col justify-between  lg:ps-20 relative -top-4">
              <div className=" absolute right-[65%] sm-right-10 md:right-0 -top-4 -md:top-6  xl:-right-28 xl:top-0 -rotate-45 block">
                <Top_Line_img />
              </div>
              <div className=" absolute -left-3 md:-left-10  lg:left-8 h-[100%]  bottom-0 block">
                <div className="h-[10px] w-[10px] bg-white rounded-full absolute bottom-0 -right-1"></div>
                <div className="h-full w-[2px] bg-white "></div>
                <div className=" absolute -top-4 -right-[17px]">
                  <Flower_img />
                </div>
              </div>
              <div className=" ps-3 md:ps-0">
                <h1 className="ff_Boogaloo text-white text-2xl sm:text-[34px] xxl:text-[54px] font-normal">
                  Hello !
                </h1>
                <h5 className=" ff_Boogaloo font-normal text-white text-lg md:text-[28px] text-end">
                  i am
                </h5>
                <div className="xxl:w-full  sm:h-auto">
                  <Developer_text />
                </div>
                <div className=" relative">
                  <p className=" text-base  xxl:text-lg mt-2 xxl:mt-5 mb-6 sm:mb-8">
                    I Like to Visualize my every Single Component of my
                    Developing Sinerio where i have Freedom to get solutions
                    which our digital world need’s I Like to Visualize my every
                    Single Component of my Developing Sinerio where i
                  </p>
                  <div className=" absolute -bottom-44 sm:-bottom-28 left-[5%] sm:left-2/4 ">
                    <Bottom_Line_img />
                  </div>
                </div>
              </div>
              <div className=" flex">
                <div className=" relative ">
                  <img
                    className=" absolute top-[-20px] xl:-top-[45px] -right-[30px] block"
                    src={btn_img}
                    alt="btn_img"
                  />
                  <button className="scroll_btn shadows rounded-[20px] relative z-10 text-base py-[15px] xxl:px-[42px] px-[40px] xxl:py-[22px] mt-6 sm:mt-10 xl:mt-0">
                    Scroll Down
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-10/12 lg:w-9/12 xl:w-6/12 xxl:w-6/12 self-end relative">
              <h6 className=" absolute text-white font-normal right-0 xl:right-20 xxl:right-10 -top-10 md:-top-8 inline text-base border-b pr-3 border-white after:content-[''] after:w-[6px] after:bg-white after:h-[6px] after:absolute after:bottom-[-3px] after:right-0 after:rounded-full text-nowrap">
                <sup className=" text-base">*</sup> 2020 / 2024
              </h6>
              <div className=" relative xl:w-[80%] xxl:w-[95%]">
                <img
                  className=" absolute right-4 xl:-right-1 top-16 xl:top-14  hidden sm:block "
                  src={half_circle}
                  alt="half_circle"
                />
                <img
                  className=" hidden sm:block relative z-10"
                  width="100%"
                  src={man_img}
                  alt="man_img"
                />
                <img
                  width={"100%"}
                  className=" sm:hidden"
                  src={mobile_man_img}
                  alt="mobile_man_img"
                />
                <div className=" absolute bottom-4 sm:bottom-[30px] left-6 sm:left-5 md:bottom-[40px] z-20 lg:bottom-[40px]  xl:bottom-[20px] xxl:left-8">
                  <ul className="  flex flex-col w-8/12 opacity-60">
                    <li className="text-xs lg:text-base xl:text-xs tracking-widest">
                      Highly skilled at progressive enhancement,systems{" "}
                    </li>
                    <li className="text-xs lg:text-base xl:text-xs mt-2 tracking-widest opacity-60">
                      Proven experience building successful products{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex gap-8 justify-end me-5">
            <div className="h-[11px] w-[11px] bg-[white] rotate-45"></div>
            <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
            <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
            <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
          </div>
        </div>
      </header>

      <section>
        <div className="bg_img min-h-screen pb-5 xxl:h-screen bg-no-repeat bg-cover xxl:border-x-[35px] border-[20px]  xxl:border-b-[20px] border-black  pt-3 relative">
          <div className=" relative xxl:absolute -left-8 -top-4 w-[55%] sm:w-[40%] lg:w-[20%]">
            <img src={group} alt="group" />
          </div>

          <div className=" container mx-auto px-3">
            <div className=" flex xxl:gap-7 justify-between pt-16 md:pt-0">
              <div className=" xxl:w-4/12 xxl:flex xxl:gap-10   xxl:flex-col xxl:justify-between">
                <div className=" xxl:pt-20  hidden xxl:block">
                  <img
                    className=" w-full xxl:w-[95%]"
                    src={client_img}
                    alt="client_img"
                  />
                </div>
                <div className=" flex flex-col gap-3 sm:gap-4 xxl:gap-3 ps-2 sm:ps-8 absolute -right-3 sm:right-0 -top-[15px] bg-black py-4 xxl:py-0 xxl:relative xxl:bg-transparent">
                  <Link
                    to=""
                    className=" flex gap-2 items-center opacity-60 hover:opacity-100 duration-500"
                  >
                    {" "}
                    <Email_icon />
                    <span className="   text-xs md:text-base">
                      thevikash34@gmail.com
                    </span>
                  </Link>
                  <Link
                    to=""
                    className="flex gap-2 items-center opacity-60 hover:opacity-100 duration-500"
                  >
                    {" "}
                    <Call_icon />
                    <span className="text-xs md:text-base">
                      +91 85421 10055
                    </span>
                  </Link>
                  <Link
                    to=""
                    className=" flex gap-2 items-center opacity-60 hover:opacity-100 duration-500"
                  >
                    {" "}
                    <Insta_icon />
                    <span className="text-xs md:text-base">@vikash boora</span>
                  </Link>
                </div>
              </div>
              <div className=" w-full xxl:w-8/12 xxl:pt-5 relative">
                <div className=" absolute right-5 h-[85%] top-10 hidden xxl:block">
                  <div className="h-[10px] w-[10px] bg-white rounded-full absolute top-0 -right-1"></div>
                  <div className="h-full w-[2px] bg-white"></div>
                  <div className=" absolute bottom-0 -right-4">
                    <Flower_img />
                  </div>
                </div>
                <div className=" flex items-center gap-10 md:gap-2 flex-wrap md:flex-nowrap  sm:gap-16 lg:gap-10 xxl:block">
                  <div className=" w-full md:w-5/12 xxl:hidden">
                    <img width={"100%"} src={client_img} alt="client_img" />
                  </div>
                  <div className=" w-full md:w-7/12 xxl:w-auto relative">
                    <h2 className=" text-lg sm:text-2xl md:text-[35px] lg:text-[30px]">
                      Namaste ,
                    </h2>
                    <p className=" text-base sm:text-lg mt-2   relative xxl:w-[92%]">
                      <div className=" absolute -bottom-8 right-0 rotate-[30deg]">
                        <Top_Line_img />
                      </div>
                      I am{" "}
                      <span className=" text-xs sm:text-lg  lg:text-[24px] text-[#FF0000]">
                        {" "}
                        Vikash Boora
                      </span>{" "}
                      , pursuing my passionate work at{" "}
                      <span className=" text-[#FFEB7F]">
                        Hexabird Private Limited
                      </span>{" "}
                      as Head Manager. I’ve Discovered a passion for using
                      development as a powerful too for solving the Digital
                      Problem’s and explore the depth of my imagination and
                      Handling . fueled by a love for storytelling . i aspire to
                      create impactful narratives that resonate with my
                      student;s and audiences, even if they simple evoke a
                      smile. Recognizing the power of stories to connect and
                      share experiences, i anm dedicated to honing my skills and
                      mastering the art of creating vision into reality through
                      lens of coding
                    </p>
                  </div>
                </div>
                <div className="mt-10 relative lg:mt-16 xxl:mt-5 flex flex-col md:flex-row justify-between">
                  <div className=" absolute -right-4 sm:right-0 h-[95%] bottom-0  xxl:hidden">
                    <div className="h-[10px] w-[10px] bg-white rounded-full absolute top-0 -right-1"></div>
                    <div className="h-full w-[2px] bg-white"></div>
                    <div className=" absolute bottom-0 -right-4">
                      <Flower_img />
                    </div>
                  </div>

                  {/* Experiences */}
                  <div className=" w-full md:w-4/12">
                    <div>
                      <h2 className=" text-[#FCFF78] md:text-white text-xl sm:text-3xl md:text-[30px]">
                        Experiences
                      </h2>
                      <p className=" mt-1 sm:mt-4 text-lg xxl:w-[80%]">
                        Worked as Web Developer and Designer
                      </p>
                    </div>
                    <div className=" flex flex-wrap md:flex-col gap-4 sm:gap-3 mt-3 ">
                      {data.map((value, index) => {
                        return (
                          <div
                            key={index}
                            className=" flex items-center gap-2 md:w-full w-[47%] sm:w-[45%]"
                          >
                            <div className=" w-[10px] sm:w-auto">
                              <Christmas_star />
                            </div>
                            <div>
                              <div className=" flex">
                                <h4 className=" text-sm sm:text-base md:text-lg pt-1 pe-1">
                                  {value.comany_name}
                                </h4>
                                <div className=" w-4">
                                  <Christmas_star />
                                </div>
                              </div>
                              <p className="   text-sm  ">
                                Jan 2020 - Nov 2021
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/*    Also as uI/UX designer at : */}
                    <div className="mt-4">
                      <p className=" mt-4 text-base sm:text-lg">
                        Also as uI/UX designer at :
                      </p>
                    </div>
                    <div className=" flex flex-wrap md:flex-col gap-4 sm:gap-5 mt-3 ">
                      {data
                        .map((value, index) => {
                          return (
                            <div
                              key={index}
                              className=" flex items-center gap-2 md:w-full w-[48%]"
                            >
                              <div className=" w-[10px] sm:w-auto">
                                <Christmas_star />
                              </div>
                              <div>
                                <div className=" flex">
                                  <h4 className=" text-sm sm:text-base md:text-lg">
                                    {value.comany_name}
                                  </h4>
                                  <div className="w-4 ms-2">
                                    <Christmas_star />
                                  </div>
                                </div>
                                <p className="text-sm">Jan 2020 - Nov 2021</p>
                              </div>
                            </div>
                          );
                        })
                        .slice(0, 1)}
                    </div>
                  </div>
                  {/* Know About */}
                  <div className=" w-full md:w-7/12 flex flex-col mt-8 md:mt-0  gap-5">
                    <div>
                      <h2 className=" text-[#FCFF78] md:text-white text-xl sm:text-3xl md:text-[30px]">
                        Know About
                      </h2>
                      <div className=" flex  flex-wrap gap-x-2 gap-y-4 sm:gap-y-5 justify-between sm:justify-start mt-4">
                        {data.map((value, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center gap-3 w-[48%] sm:w-[45%] opacity-60 hover:opacity-100 duration-500 "
                            >
                              <div>
                                <Progressbar />
                              </div>
                              <h4 className=" text-sm sm:text-base md:text-lg text-nowrap text-[#ffffff]">
                                Java Script
                              </h4>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* Designing  */}
                    <div className=" mt-5">
                      <h2 className=" text-[#FCFF78] md:text-white text-xl sm:text-3xl md:text-[30px] mt-2 sm:mt-0">
                        Designing{" "}
                      </h2>
                      <div className=" flex  flex-wrap gap-2 sm:gap-y-4 justify-between sm:justify-start mt-4">
                        {data
                          .map((value, index) => {
                            return (
                              <div
                                key={index}
                                className=" flex items-center gap-3 mt-1  w-[48%] sm:w-[45%] opacity-60 hover:opacity-100 duration-500"
                              >
                                <Progressbar />
                                <h4 className=" text-xs sm:text-base ">
                                  Figma{" "}
                                  <span className=" block">
                                    User Experience
                                  </span>
                                </h4>
                              </div>
                            );
                          })
                          .slice(0, 2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex gap-8 justify-end mt-10 xxl:mt-0">
              <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
              <div className="h-[11px] w-[11px] bg-[white] rotate-45"></div>
              <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
              <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg_img min-h-screen xxl:h-screen bg-no-repeat bg-cover flex items-center border-[20px] md:border-x-[35px] border-b-[35px] border-black  pe-3 pt-3 relative pb-6 ">
          <div className=" lg:rotate-[140deg] absolute top-0 lg:top-10 left-[0%] lg:left-2/4 lg:-translate-x-2/4">
            <Bottom_Line_img />
          </div>
          <img
            className=" absolute xl:top-[58%] top-[94%] lg:top-[90%] md:left-[92%] -rotate-[30deg] xl:rotate-0 xl:left-0"
            src={over_the_year_img}
            alt="over_the_year_img"
          />
          <img
            className=" absolute -top-4  -right-5 sm:-right-4 md:-right-8 w-[50%] sm:w-[38%] md:w-[30%] lg:w-[18%]"
            src={over_the_year}
            alt="over_the_year"
          />

          <div className=" container mx-auto px-3">
            <div className="pt-20 lg:pt-8 relative">
              <div className=" flex flex-wrap mt-5 lg:mt-0 lg:flex-nowrap justify-center xl:gap-10  items-end lg:justify-between xl:justify-start">
                <div className="w-full sm:w-10/12 lg:w-[38%] relative ">
                  <img
                    className=" absolute  -top-[50px] left-2/4 -translate-x-2/4"
                    src={over_the_year_right_img}
                    alt="over_the_year_right_img"
                  />
                  <img
                    className="xl:w-[86%] md::w-auto mx-auto lg:mx-0 relative z-20"
                    src={canteen_app}
                    alt="canteen_app"
                  />
                  <div className=" absolute top-[8%] sm:top-2 md:top-[15px] lg:top-[18px] xl:top-[10px] xxl:top-4 left-[50%] -translate-x-[34%] lg:-translate-x-[30%] xl:-translate-x-[55%] text-center z-30">
                    <h5 className=" font-normal  lg:mb-0 text-[11px] sm:text-lg lg:text-xs xl:text-base text-black leading-3 xxl:leading-normal">
                      2010-2022
                    </h5>
                    <p className=" text-[11px] sm:text-sm md:text-base lg:text-xs xl:text-base font-normal text-black">
                      <span className=" text-[11px] sm:text-xs text-black">
                        ( Hexabites )
                      </span>{" "}
                      Canteen App{" "}
                    </p>
                  </div>
                </div>
                <div className=" w-full sm:w-10/12 mt-4 lg:w-6/12">
                  <h3 className="text-xl text-center lg:text-end">
                    2010-2012 : Social Network Platform
                  </h3>
                  <p className="text-base opacity-65 mt-4 text-center lg:text-end w-full lg:w-[91%] ms-auto">
                    Project: Worked on developing a social networking platform
                    that connected users through shared interests and
                    activities. Eleanor was responsible for creating interactive
                    user interfaces and developing backend APIs for user
                    authentication and data management.
                  </p>
                </div>
              </div>
              <div className=" flex flex-wrap mt-5 lg:mt-0 lg:flex-nowrap justify-center xl:gap-10 items-center lg:justify-between xl:justify-start">
                <div className="w-full sm:w-10/12 lg:w-[44%]  relative  ps-5">
                  <img
                    className=" absolute  -top-[28px] xl:top-[-0px] lg:left-[-13px] -rotate-45"
                    src={over_the_year_card_img}
                    alt="over_the_year_card_img"
                  />
                  <img
                    className=" xl:w-[86%] md::w-auto mx-auto lg:ms-auto relative z-20"
                    src={canteen_app}
                    alt="canteen_app"
                  />
                  <div className=" absolute top-[8%] sm:top-2 md:top-[15px] lg:top-[18px] xl:top-[10px] xxl:top-4 left-[50%] -translate-x-[30%] xl:-translate-x-[24%] text-center z-30">
                    <h5 className=" font-normal  lg:mb-0 text-[11px] sm:text-lg lg:text-xs xl:text-base text-black leading-3 xxl:leading-normal">
                      2010-2022
                    </h5>
                    <p className=" text-[11px] sm:text-sm md:text-base lg:text-xs xl:text-base font-normal text-black">
                      <span className=" text-[11px] sm:text-xs text-black">
                        ( Hexabites )
                      </span>{" "}
                      Canteen App{" "}
                    </p>
                  </div>
                </div>

                <div className=" w-full sm:w-10/12 lg:w-[46%]">
                  <div className=" mt-4">
                    <h3 className="text-xl text-center lg:text-end">
                      2010-2012 : Social Network Platform
                    </h3>
                    <p className="text-base opacity-65 mt-4 text-center lg:text-end w-[100%] ms-auto">
                      Project: Worked on developing a social networking platform
                      that connected users through shared interests and
                      activities. Eleanor was responsible for creating
                      interactive user interfaces and developing backend APIs
                      for user authentication and data management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mt-5 lg:mt-0 lg:flex-nowrap justify-center xl:gap-10 lg:justify-between xl:justify-start">
                <div className="w-full sm:w-10/12 lg:w-[38%] relative">
                  <img
                    className=" absolute lg:bottom-[-50px] bottom-[-20px] -right-[50px] md:right-[25px]"
                    src={over_the_year_card_img}
                    alt="over_the_year_card_img"
                  />
                  <img
                    className=" xl:w-[86%] md::w-auto mx-auto lg:m-0 relative z-20"
                    src={canteen_app}
                    alt="canteen_app"
                  />
                  <div className=" absolute top-[8%] sm:top-2 md:top-[15px] lg:top-[18px] xl:top-[10px] xxl:top-4 left-[50%] -translate-x-[34%] lg:-translate-x-[30%] xl:-translate-x-[55%] text-center z-30">
                    <h5 className=" font-normal  lg:mb-0 text-[11px] sm:text-lg lg:text-xs xl:text-base text-black leading-3 xxl:leading-normal">
                      2010-2022
                    </h5>
                    <p className=" text-[11px] sm:text-sm md:text-base lg:text-xs xl:text-base font-normal text-black">
                      <span className=" text-[11px] sm:text-xs text-black">
                        ( Hexabites )
                      </span>{" "}
                      Canteen App{" "}
                    </p>
                  </div>
                </div>
                <div className=" w-full sm:w-10/12 mt-4 lg:w-6/12">
                  <h3 className="text-xl text-center lg:text-end">
                    2010-2012 : Social Network Platform
                  </h3>
                  <p className="text-base opacity-65 mt-4 text-center lg:text-end w-full lg:w-[91%] ms-auto">
                    Project: Worked on developing a social networking platform
                    that connected users through shared interests and
                    activities. Eleanor was responsible for creating interactive
                    user interfaces and developing backend APIs for user
                    authentication and data management.
                  </p>
                </div>
              </div>

              <img
                className=" absolute hidden xl:block bottom-[6%] -right-[5%] xxl:bottom-[10%] xxl:-right-[4%]"
                src={OverYear_img}
                alt="img"
              />
            </div>
            <div className=" flex gap-8 justify-end mt-10 md:mt-5 xl:mt-0">
              <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
              <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
              <div className="h-[11px] w-[11px] bg-[white] rotate-45"></div>
              <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg_img min-h-screen xxl:h-screen bg-no-repeat bg-cover flex items-center border-x-[20px] md:border-x-[35px] border-b-[20px] border-black  pe-3  relative pb-5">
          <div className="md:-left-10 -left-6 -top-2 absolute w-[60%] sm:w-[30%] xl:w-[25%]">
            <img src={send_message_text} alt="send_message_text" />
          </div>

          <div className=" container mx-auto px-3">
            <div className=" flex items-center gap-10 xl:gap-8  lg:justify-end flex-col-reverse justify-center lg:flex-row sm:pt-40 pt-24 xl:pt-24 xxl:pt-28">
              <div className=" w-full md:w-10/12 lg:w-5/12 xxl:w-5/12 relative">
                <div className=" absolute  -left-12 h-[118%] -bottom-[50px] xxl:block hidden">
                  <div className="h-[10px] w-[10px] bg-white rounded-full absolute top-0 -right-1"></div>
                  <div className="h-full w-[2px] bg-white"></div>
                  <div className=" absolute bottom-0 -right-4">
                    <Flower_img />
                  </div>
                </div>
                <div>
                  <p className=" text-white font-normal text-lg sm:text-2xl opacity-85 text-center lg:text-start">
                    Got a question or proposal, or just want to say hello? Go
                    ahead.
                  </p>
                  <div className=" relative">
                    <img
                      className=" relative z-20"
                      src={hand_massege}
                      alt="hand_massege"
                    />
                    <button className=" relative lg:absolute flex items-center bottom-6 sm:bottom-10 lg:-bottom-10  gap-3  py-5 px-12 bg-white rounded-[10px] sm:w-[370px] text-start mx-auto">
                      <span className=" text-lg md:text-[23px] font-normal text-black text-nowrap">
                        {" "}
                        Send Message
                      </span>{" "}
                      <img
                        width={"40%"}
                        src={send_btn_img}
                        alt="send_btn_img"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-full md:w-10/12 relative lg:w-7/12 xxl:w-6/12 ">
                <div className=" absolute -top-20 -rotate-45 ">
                  <Top_Line_img />
                </div>
                <div className=" absolute -bottom-8 -left-2 md:-bottom-8 xl:bottom-0  md:-left-10 xl:-left-16 ">
                  <Bottom_Line_img />
                </div>
                <img
                  className=" absolute right-10 -top-[85px] sm:block hidden"
                  src={pin_img}
                  alt="pin_img"
                />
                <img
                  className=" absolute left-12 -top-[25px] sm:block hidden"
                  src={small_pin_img}
                  alt="small_pin_img"
                />
                <div className=" absolute  -right-0 h-[100%] bottom-[10px] xxl:hidden">
                  <div className="h-[10px] w-[10px] bg-white rounded-full absolute top-0 -right-1"></div>
                  <div className="h-full w-[2px] bg-white"></div>
                  <div className=" absolute bottom-0 -right-4">
                    <Flower_img />
                  </div>
                </div>
                <img width={"100%"} src={meassage_img} alt="meassage_img" />
                <div className=" absolute top-[46%] xl:top-2/4 left-8 sm:left-12 xl:left-16  -translate-y-2/4 w-[75%]  flex flex-col gap-[30px] xxl:gap-[40px] overflow-auto sm:overflow-visible h-[220px] sm:h-auto">
                  <div>
                    <label
                      className=" text-black text-base sm:text-xl font-normal"
                      htmlFor="Name"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      className=" text-xs py-1  sm:p-4 xxl:p-5 mt-1 xxl:mt-2 w-full bg-transparent border-b-[1px] border-black outline-none placeholder:text-black placeholder:font-normal placeholder:text-xs sm:placeholder:text-xl placeholder:opacity-50 text-black sm:text-xl font-normal"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      className="  text-black text-base sm:text-xl  font-normal"
                      htmlFor="Name"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      id="Email"
                      className=" text-xs py-1  sm:p-4 xxl:p-5 mt-1 xxl:mt-2 w-full bg-transparent border-b-[1px] border-black outline-none placeholder:text-black placeholder:font-normal placeholder:text-xs sm:placeholder:text-xl placeholder:opacity-50 text-black sm:text-xl font-normal"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label
                      className="  text-black text-base sm:text-xl font-normal"
                      htmlFor="Name"
                    >
                      Your Massage
                    </label>
                    <textarea
                      name="Name"
                      id="Name"
                      className=" text-xs py-1  sm:p-4 xxl:p-5 mt-1 xxl:mt-2 w-full bg-transparent border-b-[1px] border-black outline-none placeholder:text-black placeholder:font-normal placeholder:text-xs sm:placeholder:text-xl placeholder:opacity-50 text-black sm:text-xl font-normal"
                      placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex gap-8 justify-end mt-5 md:mt-0 lg:mt-5">
              <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
              <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
              <div className="h-[11px] w-[11px] bg-[#323232] rotate-45"></div>
              <div className="h-[11px] w-[11px] bg-[white] rotate-45"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfoilo;
