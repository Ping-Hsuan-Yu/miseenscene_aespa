import styled from "styled-components";
import CardBg from "../assets/card.png";
import Sample from "../assets/sample.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const cardInfo = [
  { img: Sample, group: "個人組", name: "一行最多六字", member: "", ig: "lm__winter" },
  { img: Sample, group: "個人組", name: "大安區金冬天", member: "", ig: "imnotningning" },
  { img: Sample, group: "個人組", name: "大安區金冬天", member: "", ig: "lm__winter" },
  { img: Sample, group: "個人組", name: "大安區金冬天", member: "", ig: "lm__winter" },
  { img: Sample, group: "個人組", name: "大安區金冬天", member: "", ig: "lm__winter" },
  { img: Sample, group: "團體組", name: "三重MISAMO", member: "MINA/SANA/MOMO", ig: "twicetagram" },
  { img: Sample, group: "團體組", name: "三重MISAMO", member: "MINA/SANA/MOMO", ig: "twicetagram" },
  { img: Sample, group: "團體組", name: "三重MISAMO", member: "MINA/SANA/MOMO", ig: "twicetagram" },
  {
    img: Sample,
    group: "團體組",
    name: "三重MISAMO",
    member: "甜甜/小美/K/莉莉",
    ig: "aespa_official",
  },
  {
    img: Sample,
    group: "團體組",
    name: "三重MISAMO",
    member: "MINA/SANA/MOMO",
    ig: "blackpinkofficial",
  },
];

const CardBG = styled.div`
  background-image: url(${CardBg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 252px;
  height: 230px;
`;

const Container = styled.div`
  width: calc(100vw - 32px);
  max-width: 1248px;
`;
export default function Card() {
  return (
    <div className="flex flex-col gap-5 md:gap-10 my-5 md:my-10">
      <Container>
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1024: {
              width: 1024,
              slidesPerView: 4,
            },
            1280: {
              width: 1280,
              slidesPerView: 4.5,
            },
          }}
          freeMode
          modules={[FreeMode]}
        >
          {cardInfo.map(
            (info) =>
              info.group === "個人組" && (
                <SwiperSlide key={info.ig} className="flex justify-center">
                  <CardBG>
                    <div className="flex mt-[45px] mx-[14px]">
                      <div className="object-contain w-[100px] h-[100px] bg-orange-100">
                        <img src={info.img} alt={`${info.name}-${info.ig}`} />
                      </div>
                      <div className="text-center ms-3 w-[110px]">
                        <div className="text-brown-300 font-medium text-xs">GROUP</div>
                        <div className="text-brown-800 font-bold border-b border-brown-300">
                          {info.group}
                        </div>
                        <div className="text-brown-300 font-medium text-xs mt-4">NAME</div>
                        <div className="text-brown-800 font-bold  border-b border-brown-300">
                          {info.name}
                        </div>
                      </div>
                    </div>
                    <div className="text-brown-800 text-xs font-bold mt-5 ms-7">@{info.ig}</div>
                  </CardBG>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </Container>
      <Container>
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1024: {
              width: 1024,
              slidesPerView: 4,
            },
            1280: {
              width: 1280,
              slidesPerView: 4.5,
            },
          }}
          freeMode={true}
          spaceBetween={16}
          modules={[FreeMode]}
        >
          {cardInfo.map(
            (info) =>
              info.group === "團體組" && (
                <SwiperSlide key={info.ig} className="flex justify-center">
                  <CardBG>
                    <div className="flex mt-[45px] mx-[14px]">
                      <div className="object-contain w-[100px] h-[100px] bg-orange-100">
                        <img src={info.img} alt={`${info.name}-${info.ig}`} />
                      </div>
                      <div className="text-center ms-3 w-[110px]">
                        <div className="text-brown-300 font-medium text-xs">GROUP</div>
                        <div className="text-brown-800 font-bold border-b border-brown-300">
                          {info.group}
                        </div>
                        <div className="text-brown-300 font-medium text-xs mt-ˇ">NAME</div>
                        <div className="text-brown-800 font-bold">{info.name}</div>
                        <div className="text-brown-800 font-bold text-xs border-b border-brown-300">
                          {info.member}
                        </div>
                      </div>
                    </div>
                    <div className="text-brown-800 text-xs font-bold mt-5 ms-7">@{info.ig}</div>
                  </CardBG>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </Container>
    </div>

    
  );
}
