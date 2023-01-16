import { useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./assets/css/tailwind.css";
import MenuTab from "./components/ListTab/MenuTab";
import TabListImage from "./components/ListTab/TabListImage";
import "./App.css";

function App() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onSwichPage = (e: boolean) => {
    setIsActive(e);
  };
  return (
    <div className=" m-w-[388px] h-auto lg:w-[100%] mx-auto">
      <div className="p-[2px] bg-white rounded-[8px]">
        {/* {isActive ? <TabListImage /> : <MenuTab />} */}
        <Swiper
          className="mySwiper swiper-h"
          spaceBetween={50}
          pagination={{
            clickable: true,
            // el: ".custom-pagination",
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div>
              <MenuTab key={1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <TabListImage key={2} />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="mt-[30px] flex justify-center items-center gap-4 mb-[30px]">
          <button
            onClick={() => onSwichPage(false)}
            className={`${
              isActive ? "bg-[#333333] opacity-[0.25]" : "bg-[#000000]"
            } h-[15px] w-[15px] rounded-[50%]`}
          ></button>
          <button
            onClick={() => onSwichPage(true)}
            className={`${
              isActive ? "bg-[#000000]" : "bg-[#333333] opacity-[0.25]"
            } h-[15px] w-[15px] rounded-[50%]`}
          ></button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
