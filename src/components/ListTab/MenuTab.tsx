import React, { useState } from "react";
import { HiPencil, HiClipboardList } from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";
import TabItem from "./TabItem";

const images1 = require("../../assets/images/pen-img11 1.png");
const images2 = require("../../assets/images/pen-img11 2.png");
const images3 = require("../../assets/images/pen-img11 3.png");

const MenuTab = () => {
  const [isActive, setIsActive] = useState<number | null>(0);
  const listIconContent = [
    {
      icon: <HiPencil className="text-[32px]" />,
      content: "PenCils",
    },
    {
      icon: <HiPencil className="text-[32px]" />,
      content: "Markers",
    },
    {
      icon: <IoColorPaletteOutline className="text-[32px]" />,
      content: "Drawing Colors",
    },
    {
      icon: <HiClipboardList className="text-[32px]" />,
      content: "Notebooks",
    },
  ];
  const onClickShow = (idx: number) => {
    if (idx === isActive) setIsActive(null);
    else setIsActive(idx);
  };
  return (
    <div className="flex flex-col gap-[10px] lg:gap-0 lg:flex-row lg:w-[calc(100%-300px)] lg:mx-auto lg:h-[80vh] lg:relative">
      {listIconContent.map((item: any, idx: number) => (
        <div className="bg-[#F4F4F4] lg:bg-white rounded-[18px] flex-1">
          <TabItem
            icon={item?.icon}
            content={item?.content}
            idx={idx}
            isShow={idx === isActive}
            onClickShow={onClickShow}
          />
          {idx === isActive && (
            <div
              className={`${idx === isActive && "bg-[#F4F4F4]"}
              left-0 right-0 px-[20px] mt-[40px] lg:mt-[0] lg:absolute lg:rounded-b-[24px] lg:flex lg:p-[40px] gap-[36px]`}
            >
              <div className="lg:basis-2/5 lg:flex lg:flex-col">
                <span className="text-[#000] font-normal text-[16px] lg:text-[21px] text-justify block mb-[18px] leading-[27px] lg:text-start lg:leading-[32px]">
                  Graphite Artist Quality Fine Art Drawing, Sketching and
                  Replaceable Nib Pencils.
                </span>
                <div className="flex justify-between items-center mb-[27px] lg:block lg:leading-[40px] lg:mb-[40px]">
                  <ul className="pl-[20px]">
                    <li className="font-semibold text-[13px] lg:text-[18px] text-[#000] list-disc">
                      MECHANICAL PENCILS
                    </li>
                    <li className="font-semibold text-[13px] lg:text-[18px] text-[#000] list-disc">
                      ARCHITECT'S CHOICE
                    </li>
                  </ul>
                  <ul className="pl-[20px]">
                    <li className="font-semibold text-[13px] lg:text-[18px] text-[#000] list-disc">
                      EXECUTIVE PENCILS
                    </li>
                    <li className="font-semibold text-[13px] lg:text-[18px] text-[#000] list-disc">
                      ENGRAVABLE PENCILS
                    </li>
                  </ul>
                </div>
                <button className="text-[#fff] bg-[#F4B840] rounded-[5px] text-[14px] font-bold p-[16px] hidden lg:block lg:max-w-[124px] lg:hover:scale-[1.2] lg:opacity-80 transition-[0.5s]">
                  SHOP ALL
                </button>
              </div>
              <div className="lg:basis-3/5">
                <div className="border-solid border-2 lg:border-[3px] border-white  lg:bg-white lg:pl-[32px]  rounded-[10px] lg:rounded-[18px] flex items-center p-[10px] lg:p-[0] mb-[40px]">
                  <div className="flex justify-center items-center lg:max-h-[80px] lg:py-[8px]">
                    <span className="text-[#F4B840] text-[36px] font-bold">
                      25%
                    </span>
                    <span className="text-[#F4B840] text-[18px] lg:text-[36px] lg:ml-2 font-bold lg:lowercase">
                      OFF
                    </span>
                  </div>
                  <div className="lg:w-full lg:h-[80px] overflow-hidden">
                  <span className="ml-[16px] text-[16px] lg:bg-[#F4F4F4] lg:text-[18px] lg:pl-[24px]  lg:py-[10px] lg:flex lg:items-center  lg:rounded-r-[18px]">
                    Offer Applicable on All Our Pencils {idx}
                  </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-[18px] lg:gap-3 mx-[-10px] lg:mx-[0] mb-[40px]">
                  <div className="bg-[#fff] rounded-[18px] p-[10px] flex flex-col justify-between">
                    <img
                      src={images1}
                      alt="images"
                      className="w-full mx-auto object-cover"
                    />
                    <div className="flex flex-col justify-end">
                      <h4 className="text-[#000] text-[13px] font-medium text-center">
                        Aero
                      </h4>
                      <h4 className="text-[#000] text-[13px] font-medium text-center">
                        Mechanical Pencil
                      </h4>
                      <div className="flex justify-center items-end">
                        <span className="text-[14px] font-semibold mr-[8px]">
                          $75.00
                        </span>
                        <span className="text-[13px] font-normal text-[#727272] line-through">
                          $99.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#fff] rounded-[18px] p-[10px] flex flex-col justify-between">
                    <img
                      src={images2}
                      alt="images"
                      className="w-full mx-auto object-cover"
                    />
                    <div className="flex flex-col justify-end">
                      <h4 className="text-[#000] text-[13px] font-medium text-center">
                        Castell
                      </h4>
                      <h4 className="text-[#000] text-[13px] font-medium text-center">
                        Mechanical Pencil
                      </h4>
                      <div className="flex justify-center items-end">
                        <span className="text-[14px] font-semibold mr-[8px]">
                          $75.00
                        </span>
                        <span className="text-[13px] font-normal text-[#727272] line-through">
                          $99.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#fff] rounded-[18px] p-[10px] hidden lg:block ">
                    <div className="lg:flex flex-col justify-between">
                      <img
                        src={images3}
                        alt="images"
                        className="w-full mx-auto object-cover"
                      />
                      <div className="flex flex-col justify-end">
                        <h4 className="text-[#000] text-[13px] font-medium text-center">
                          Architect
                        </h4>
                        <h4 className="text-[#000] text-[13px] font-medium text-center">
                          Choice Pencil
                        </h4>
                        <div className="flex justify-center items-end">
                          <span className="text-[14px] font-semibold mr-[8px]">
                            $45.00
                          </span>
                          <span className="text-[13px] font-normal text-[#727272] line-through">
                            $70.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mb-[50px] lg:hidden">
                <button className="text-[#fff] bg-[#F4B840] rounded-[5px] text-[14px] font-bold px-[16px] py-[8px]">
                  SHOP ALL
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuTab;
