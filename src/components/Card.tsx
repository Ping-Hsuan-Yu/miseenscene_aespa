import styled from "styled-components";
import CardBg from "../assets/card.png";
import Sample from "../assets/sample.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const cardInfo = [
  { img: Sample, group: "個人組", name: "小喵", member: "", ig: "_ri__na____" },
  {
    img: Sample,
    group: "團體組",
    name: "松高勁舞團",
    member: "甜甜/小美/K/莉莉",
    ig: "aespa_official",
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

const Arrow = styled.div`
  opacity: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform-origin: 50% 50%;
  transform: translate3d(-50%, -50%, 0);
  animation-name: arrow-movement;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  &.next {
    animation-delay: 1s;
  }
  &:before,
  &:after {
    background: #fff;
    content: "";
    display: block;
    height: 3px;
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
  }
  &:before {
    transform: rotate(45deg) translateX(-6px);
    transform-origin: top center;
  }

  &:after {
    transform: rotate(-45deg) translateX(-8px);
    transform-origin: top center;
  }
  @keyframes arrow-movement {
    0% {
      opacity: 0;
      right: 10px;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Marquee = styled.div`
  overflow: hidden;
  position: relative;
  & div {
    display: flex;
    gap: 8px;
    /* width: 200%; */
    position: absolute;
    overflow: hidden;
    animation: marquee 10s linear infinite;
  }
  & span {
    float: left;
    /* width: 50%; */
  }
  @keyframes marquee {
    0% {
      left: 0;
    }
    50% {
      left: -100%;
    }
    100% {
      left: 0%;
    }
  }
`;

export default function Card() {
  return (
    <div className="flex flex-col gap-5 md:gap-10 my-5 md:my-10">
      <Container className="relative">
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
                        <div className="text-brown-300 font-medium text-12">GROUP</div>
                        <div className="text-nowrap overflow-hidden text-brown-800 text-16 font-bold border-b border-brown-300">
                          {info.group}
                        </div>
                        <div className="text-brown-300 font-medium text-12 mt-4">NAME</div>
                        {info.name.replace(/[^\x00-\xff]/g, "xx").length < 13 ? (
                          <div className="text-nowrap overflow-hidden text-brown-800 text-16 font-bold border-b border-brown-300">
                            {info.name}
                          </div>
                        ) : (
                          <Marquee className="h-[22px] text-nowrap overflow-hidden text-brown-800 font-bold text-16 border-b border-brown-300">
                            <div>
                              <span>{info.name}</span>
                              <span>{info.name}</span>
                            </div>
                          </Marquee>
                        )}
                      </div>
                    </div>
                    <div className="text-nowrap text-brown-800 text-12 font-bold mt-5 ms-7">
                      <a href={`https://www.instagram.com/${info.ig}`} target="_blank">
                        @{info.ig}
                      </a>
                    </div>
                  </CardBG>
                </SwiperSlide>
              )
          )}
        </Swiper>
        <div className="absolute right-4 md:bottom-[-24px] md:top-full top-1/2 z-[15]">
          <Arrow className="prev" />
          <Arrow className="next" />
        </div>
      </Container>
      <Container className="relative">
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
                        <div className="text-brown-300 font-medium text-12">GROUP</div>
                        <div className="text-nowrap overflow-hidden text-brown-800 text-16 font-bold border-b border-brown-300">
                          {info.group}
                        </div>
                        <div className="text-brown-300 font-medium text-12 mt-3">NAME</div>
                        {info.name.replace(/[^\x00-\xff]/g, "xx").length < 13 ? (
                          <div className="text-nowrap overflow-hidden text-brown-800 text-16 font-bold">
                            {info.name}
                          </div>
                        ) : (
                          <Marquee className="h-[22px] text-nowrap overflow-hidden text-brown-800 font-bold text-16">
                            <div>
                              <span>{info.name}</span>
                              <span>{info.name}</span>
                            </div>
                          </Marquee>
                        )}

                        {info.name.replace(/[^\x00-\xff]/g, "xx").length < 13 ? (
                          <div className="text-nowrap overflow-hidden text-brown-800 font-bold text-12 border-b border-brown-300">
                            {info.member}
                          </div>
                        ) : (
                          <Marquee className="h-[15.3px] text-nowrap overflow-hidden text-brown-800 font-bold text-12 border-b border-brown-300">
                            <div>
                              <span>{info.member}</span>
                              <span>{info.member}</span>
                            </div>
                          </Marquee>
                        )}
                      </div>
                    </div>
                    <div className="text-nowrap text-brown-800 text-12 font-bold mt-4 ms-7">
                      <a href={`https://www.instagram.com/${info.ig}`} target="_blank">
                        @{info.ig}
                      </a>
                    </div>
                  </CardBG>
                </SwiperSlide>
              )
          )}
        </Swiper>
        <div className="absolute right-4 md:bottom-[-24px] md:top-full top-1/2 z-[15]">
          <Arrow className="prev" />
          <Arrow className="next" />
        </div>
      </Container>
    </div>
  );
}
