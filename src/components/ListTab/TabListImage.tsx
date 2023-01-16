 import React from "react";

const image23 = require("../../assets/images/Rectangle 23.png");
const image27 = require("../../assets/images/Rectangle 27.png");
const image25 = require("../../assets/images/Rectangle 25.png");
const image24 = require("../../assets/images/Rectangle 24.png");
const image21 = require("../../assets/images/Rectangle 21.png");
const image28 = require("../../assets/images/Rectangle 28.png");
const image26 = require("../../assets/images/Rectangle 26.png");
const image29 = require("../../assets/images/Rectangle 29.png");

const TabListImage = () => {
  return (
    <div className="">
      <h1 className="flex justify-center items-center text-[#121212] font-bold text-[30px] my-[30px] ">Packer pen Gallery</h1>
      <div className="flex flex-col w-full gap-2 md:gap-3 lg:flex-row lg:justify-center lg:items-center lg:gap-[18px]">
        <div className="flex gap-2 md:gap-3 lg:flex-col">
          <div className="flex flex-col gap-2 md:gap-3 w-[49.5%] lg:w-full lg:overflow-hidden">
            <img src={image23} alt="img23" className="object-fill lg:h-[185px] lg:rounded-xl lg:hover:scale-[1.2] lg:transition-[0.5s]" />
            <img src={image27} alt="img27" className="object-fill lg:h-[308px] lg:rounded-xl lg:hover:scale-[1.2] lg:transition-[0.5s]" />
          </div>
          <div className="w-[49.5%]">
            <img src={image25}  alt="img25 " className="object-fill w-full lg:hidden"/>
          </div>
        </div>
        <div className="lg:flex lg:flex-col lg:gap-3 lg:overflow-hidden">
          <img src={image29} alt="img29" className="object-fill hidden lg:block w-full lg:h-[284px] lg:rounded-xl lg:hover:scale-[1.2] lg:transition-[0.5s]"/>
          <img src={image24} alt="img24" className="object-fill w-full lg:h-[295px] lg:rounded-xl lg:hover:scale-[1.2] lg:transition-[0.5s]" />
        </div>
        <div className="flex flex-col gap-2 lg:flex lg:flex-col lg:gap-3 lg:overflow-hidden">
          <div>
           <img src={image21} alt="img21" className="object-fill w-full lg:h-[119px] lg:rounded-xl lg:hover:scale-[1.2] lg:transition-[0.5s]" />
          </div>
          <div className="flex gap-2 md:gap-3 lg:flex-col">
            <img src={image28} alt="img28" className="object-fill w-[49.5%] lg:w-full lg:h-[230px] lg:rounded-xl lg:hover:scale-[1.2] lg:transition-[0.5s]" />
            <img src={image26} alt="img26" className="object-fill w-[49.5%] lg:w-full lg:h-[138px] lg:rounded-xl lg:hover:scale-[1.2] lg:transition-[0.5s]" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default TabListImage;