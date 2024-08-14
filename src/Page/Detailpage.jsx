import React from "react";
import {
  Flower_img,
  Githubicon,
  Linkdinicon,
  Logo,
  Slickicon,
  Vectoricon,
} from "../svgimages/Svgcode";
import { Link } from "react-router-dom";
import workbook from "../assets/images/png/workbook.png";
import project_details_img from "../assets/images/png/project_details_img.png";
import option_img_project from "../assets/images/png/option_img_project.png";
import ic_round_download from "../assets/images/svg/ic_round_download.svg";
import workbook_right_img from "../assets/images/png/workbook_right_img.png";

import Navbar from "../Components/Navbar";
function Detailpage() {
  return (
    <div>
      <div className="bg_img min-h-screen xxl:h-screen  sm:pb-5 pe-3 bg-no-repeat bg-cover border-[20px] xxl:border-[30px] border-black  pt-3 relative">
        <img className=" absolute top-24 xl:top-36 left-[30%] hidden sm:block" src={workbook_right_img} alt="workbook_right_img" />
        <div className=" flex flex-col justify-between h-full">
          <nav>
            <Navbar />
          </nav>
          <section>
            <div className=" container mx-auto px-3">
              <div className=" flex flex-wrap pt-5 xl:pt-0 flex-col-reverse lg:flex-row lg:flex-nowrap items-center gap-10 xl:gap-0 pb-5 lg:pb-0 justify-evenly xl:relative xxl:pt-5">
                <img
                  className=" absolute bottom-[80%] sm:bottom-[85%] lg:bottom-[75%]  right-[70%] sm:right-[80%] md:right-[85%] xl:-bottom-[20px] xxl:-bottom-[20px] xl:-right-10 xxl:-right-[20px]"
                  src={ic_round_download}
                  alt="ic_round_download"
                />
                <div className=" w-full sm:w-11/12 lg:w-6/12 xl:w-5/12 relative mb-5 lg:mb-0">
                  <div className=" absolute  -left-12  h-full bottom-0 xl:block hidden">
                    <div className="h-[10px] w-[10px] bg-white rounded-full absolute top-0 -right-1"></div>
                    <div className="h-full w-[2px] bg-white"></div>
                    <div className=" absolute bottom-0 -right-4">
                      <Flower_img />
                    </div>
                  </div>
                  <h6 className=" text-sm sm:text-lg font-normal mb-2">
                    Clint : example@
                  </h6>
                  <h1 className=" font-normal text-2xl sm:text-4xl my-2 xl:my-0 xxl:text-[44px]">
                    Movie App
                  </h1>
                  <p className=" text-base sm:text-xl xxl:text-2xl font-normal mt-3">
                    Uprising Roles : UI / UX , Development & Problem Sloving
                  </p>
                  <div className=" relative ">
                    <h4 className=" text-base xl:text-xl font-normal mb-3 mt-4 xxl:mt-7 sticky top-0">
                      Description
                    </h4>
                    <div className=" overflow-auto md:h-[190px] xxl:h-[300px] h-[200px] flex flex-col gap-5">
                      <p className=" text-base xxl:text-xl font-normal opacity-70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis eum error provident deleniti asperiores
                        nesciunt doloribus, iste optio consequuntur unde
                        accusamus fuga obcaecati molestias exercitationem
                        debitis. Soluta adipisci doloremque incidunt.
                      </p>
                      <p className=" text-base xxl:text-xl font-normal opacity-70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis eum error provident deleniti asperiores
                        nesciunt doloribus, iste optio consequuntur unde
                        accusamus fuga obcaecati molestias exercitationem
                        debitis. Soluta adipisci doloremque incidunt.
                      </p>
                      <p className=" text-base xxl:text-xl font-normal opacity-70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis eum error provident deleniti asperiores
                        nesciunt doloribus, iste optio consequuntur unde
                        accusamus fuga obcaecati molestias exercitationem
                        debitis. Soluta adipisci doloremque incidunt.
                      </p>

                      <p className=" text-base xxl:text-xl font-normal opacity-70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis eum error provident deleniti asperiores
                        nesciunt doloribus, iste optio consequuntur unde
                        accusamus fuga obcaecati molestias exercitationem
                        debitis. Soluta adipisci doloremque incidunt.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" w-full sm:w-11/12 lg:w-6/12 xl:w-5/12 relative">
                  <div className=" absolute -right-12  h-[60%]  bottom-[55%]  xxl:bottom-[50%] translate-y-[50%] hidden xl:block">
                    <div className="h-[10px] w-[10px] bg-white rounded-full absolute bottom-0 -right-1"></div>
                    <div className="h-full w-[2px] bg-white "></div>
                    <div className=" absolute -top-4 -right-[17px]">
                      <Flower_img />
                    </div>
                  </div>
                  <div>
                    <img
                      width={"100%"}
                      src={project_details_img}
                      alt="project_details_img"
                    />
                  </div>
                  <div className=" flex mt-3 gap-2">
                    <div className=" w-3/12">
                      <img
                        width={"100%"}
                        src={option_img_project}
                        alt="option_img_project"
                      />
                    </div>
                    <div className=" w-3/12">
                      <img
                        width={"100%"}
                        src={option_img_project}
                        alt="option_img_project"
                      />
                    </div>
                    <div className=" w-3/12">
                      <img
                        width={"100%"}
                        src={option_img_project}
                        alt="option_img_project"
                      />
                    </div>
                    <div className=" w-3/12">
                      <img
                        width={"100%"}
                        src={option_img_project}
                        alt="option_img_project"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Detailpage;





// import React, { useState } from "react";
// import {
//   Flower_img,
//   Githubicon,
//   Linkdinicon,
//   Logo,
//   Slickicon,
//   Vectoricon,
// } from "../svgimages/Svgcode";
// import Navbar from "../Components/Navbar";
// import project_details_img from "../assets/images/png/project_details_img.png";
// import option_img_project from "../assets/images/png/option_img_project.png";
// import ic_round_download from "../assets/images/svg/ic_round_download.svg";

// function Detailpage() {
//   const [bigImage, setBigImage] = useState(project_details_img);
//   const [images, setImages] = useState([
//     option_img_project,
//     option_img_project,
//     option_img_project,
//     option_img_project,
//   ]);
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const handleClick = (index) => {
//     // If no image is clicked or the same image is clicked, do nothing
//     if (index === selectedIndex) return;

//     // Swap the big image with the clicked image
//     const newImages = [...images];
//     const temp = newImages[index];
//     newImages[index] = bigImage;
//     setBigImage(temp);
//     setImages(newImages);
//     setSelectedIndex(index);
//   };

//   return (
//     <div className="bg_img min-h-screen pb-10 pe-3 bg-no-repeat bg-cover border-[20px] md:border-[35px] border-black pt-3">
//       <div className="flex flex-col justify-between h-full">
//         <nav>
//           <Navbar />
//         </nav>
//         <section>
//           <div className="container mx-auto px-3">
//             <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap items-center gap-10 xl:gap-0 pb-5 lg:pb-0 justify-evenly relative pt-8">
//               <img
//                 className="absolute -bottom-[50px] lg:-bottom-[40px] -right-[20px]"
//                 src={ic_round_download}
//                 alt="ic_round_download"
//               />
//               <div className="w-full sm:w-11/12 lg:w-6/12 xl:w-5/12 relative mb-5 lg:mb-0">
//                 <div className="absolute -left-12 h-full bottom-0 xl:block hidden">
//                   <div className="h-[10px] w-[10px] bg-white rounded-full absolute top-0 -right-1"></div>
//                   <div className="h-full w-[2px] bg-white"></div>
//                   <div className="absolute bottom-0 -right-4">
//                     <Flower_img />
//                   </div>
//                 </div>
//                 <h6 className="text-sm sm:text-lg font-normal">
//                   Clint : example@
//                 </h6>
//                 <h1 className="font-normal text-2xl sm:text-4xl my-2 xl:my-0 xl:text-[44px]">
//                   Movie App
//                 </h1>
//                 <p className="text-base sm:text-xl xl:text-2xl font-normal mt-2">
//                   Uprising Roles : UI / UX , Development & Problem Solving
//                 </p>
//                 <div className="relative">
//                   <h4 className="text-base xxl:text-xl font-normal mb-3 mt-5 xl:mt-7 sticky top-0">
//                     Description
//                   </h4>
//                   <div className="overflow-auto h-[300px] flex flex-col gap-5">
//                     <p className="text-base xxl:text-xl font-normal opacity-70">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Perferendis eum error provident deleniti asperiores
//                       nesciunt doloribus, iste optio consequuntur unde accusamus
//                       fuga obcaecati molestias exercitationem debitis. Soluta
//                       adipisci doloremque incidunt.
//                     </p>
//                     <p className="text-base xxl:text-xl font-normal opacity-70">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Perferendis eum error provident deleniti asperiores
//                       nesciunt doloribus, iste optio consequuntur unde accusamus
//                       fuga obcaecati molestias exercitationem debitis. Soluta
//                       adipisci doloremque incidunt.
//                     </p>
//                     <p className="text-base xxl:text-xl font-normal opacity-70">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Perferendis eum error provident deleniti asperiores
//                       nesciunt doloribus, iste optio consequuntur unde accusamus
//                       fuga obcaecati molestias exercitationem debitis. Soluta
//                       adipisci doloremque incidunt.
//                     </p>
//                     <p className="text-base xxl:text-xl font-normal opacity-70">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Perferendis eum error provident deleniti asperiores
//                       nesciunt doloribus, iste optio consequuntur unde accusamus
//                       fuga obcaecati molestias exercitationem debitis. Soluta
//                       adipisci doloremque incidunt.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full sm:w-11/12 lg:w-6/12 xl:w-5/12 relative">
//                 <div className="absolute -right-12 h-[70%] bottom-[50%] translate-y-[50%] hidden xl:block">
//                   <div className="h-[10px] w-[10px] bg-white rounded-full absolute bottom-0 -right-1"></div>
//                   <div className="h-full w-[2px] bg-white"></div>
//                   <div className="absolute -top-4 -right-[17px]">
//                     <Flower_img />
//                   </div>
//                 </div>
//                 <div>
//                   <img
//                     width={"100%"}
//                     src={bigImage}
//                     alt="project_details_img"
//                     className="rounded-lg"
//                   />
//                 </div>
//                 <div className="flex mt-3 gap-2">
//                   {images.map((img, index) => (
//                     <div
//                       key={index}
//                       className={`w-3/12 transform transition-transform duration-300 ${
//                         selectedIndex === index ? "scale-110" : "scale-100"
//                       }`}
//                       onClick={() => handleClick(index)}
//                     >
//                       <img
//                         width={"100%"}
//                         src={img}
//                         alt={`option_img_project_${index}`}
//                         className="rounded-lg cursor-pointer"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Detailpage;



// 