import React, { useState } from "react";
import { HiPencil, HiChevronUp, HiChevronDown } from "react-icons/hi";

interface Item {
  icon: JSX.Element;
  content: string;
  idx: number;
  onClickShow: (e: number) => void;
  isShow: boolean;
}

const TabItem: React.FC<Item> = ({
  icon,
  content,
  idx,
  onClickShow,
  isShow,
}) => {
  return (
    <div
      className={` bg-[#F4F4F4] ${
        isShow ? "lg:bg-[#f4f4f4]" : ""
      } lg:focus:bg-[#F4F4F4] w-full py-[10px] px-[5px] lg:p-[20px] lg:bg-white rounded-t-[18px] rounded-b-[24px] lg:rounded-b-[0] lg:h-[220px]`}
    >
      <button
        onClick={() => onClickShow(idx)}
        className="flex bg-white lg:h-[100%] w-[98%] lg:max-w-[300px] rounded-[18px] lg:rounded-[10px] mx-auto px-[30px] py-[16px] lg:px-[0] justify-between items-center transition-all shadow-[0px_0px_27px_rgba(0,0,0,0.05)]"
      >
        <div className="flex lg:flex-col justify-center items-center lg:w-full gap-3">
          <div className="w-[50px] h-[50px] bg-[#F4F4F4] rounded-[50px] flex justify-center items-center text-[#F4B840]">
            {icon}
          </div>
          <span className="text-[#181818] text-[21px] font-bold">
            {content}
          </span>
        </div>
        <div className="lg:hidden">
          {isShow && (
            <HiChevronUp className="text-[#181818] text-[32px] font-light" />
          )}
          {!isShow && (
            <HiChevronDown className="text-[#181818] text-[32px] font-light" />
          )}
        </div>
      </button>
    </div>
  );
};

export default TabItem;
