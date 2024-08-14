import styled from "styled-components";
import CardBg from "../assets/card.png";
import FirstPlace from "../assets/1.png";
import SecondPlace from "../assets/2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useEffect, useState } from "react";

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

const url =
  "https://script.google.com/macros/s/AKfycbwOoEqUD9k7rUY0ekZNC2qkyz7-cxsTdyYW4kc0C6aU6Ygp2M10Wnvjq9xQJE_Q08Q8ag/exec";

export default function Card() {
  const [cardInfo, setCardInfo] = useState<
    { img: string; group: string; name: string; member: string; ig: string; score: string }[]
  >([]);
  const getCardInfo = () => {
    fetch(url)
      .then(async (response) => {
        setCardInfo(await response.json());
        console.log(response);
      })
      .catch((err) => console.error(err));
  };
  useEffect(getCardInfo, []);

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
            (info, idx) =>
              info.group === "個人組" && (
                <SwiperSlide key={`${info.ig}${idx}`} className="flex justify-center">
                  <CardBG>
                  {idx === 0 && (
                      <div className="relative">
                        <img
                          className="absolute w-[60px] h-[60px] object-cover top-1 left-2"
                          src={FirstPlace}
                          alt=""
                        />
                      </div>
                    )}
                    {idx === 1 && (
                      <div className="relative">
                        <img
                          className="absolute w-[60px] h-[60px] object-cover top-1 left-2"
                          src={SecondPlace}
                          alt=""
                        />
                      </div>
                    )}
                    <div className="flex mt-[45px] mx-[14px]">
                      <div className="object-contain w-[100px] h-[100px] bg-orange-100">
                        <img
                          className="w-[100px] h-[100px] object-cover"
                          src={info.img}
                          alt={`${info.name}-${info.ig}`}
                        />
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
                    <div
                      className={`text-nowrap text-brown-800 font-bold ms-7 me-5 flex justify-between items-baseline ${
                        info.score ? "mt-2" : "mt-5"
                      }`}
                    >
                      <a
                        href={`https://www.instagram.com/${info.ig}`}
                        target="_blank"
                        className="text-12"
                      >
                        @{info.ig}
                      </a>
                      {info.score && (
                        <span className="text-22">
                          {info.score}
                          <span className="text-12 ms-1">分</span>
                        </span>
                      )}
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
            (info, idx) =>
              info.group === "團體組" && (
                <SwiperSlide key={`${info.ig}${idx}`} className="flex justify-center">
                  <CardBG>
                    {idx === 52 && (
                      <div className="relative w-full">
                        <img
                          className="absolute w-[60px] h-[60px] object-cover top-1 left-2"
                          src={FirstPlace}
                          alt=""
                        />
                      </div>
                    )}
                    {idx === 53 && (
                      <div className="relative">
                        <img
                          className="absolute w-[60px] h-[60px] object-cover top-1 left-2"
                          src={SecondPlace}
                          alt=""
                        />
                      </div>
                    )}
                    <div className="flex mt-[45px] mx-[14px]">
                      <div className="w-[100px] h-[100px] bg-orange-100">
                        <img
                          className="w-[100px] h-[100px] object-cover"
                          src={info.img}
                          alt={`${info.name}-${info.ig}`}
                        />
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

                        {info.member.replace(/[^\x00-\xff]/g, "xx").length < 13 ? (
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
                    <div
                      className={`text-nowrap text-brown-800 font-bold ms-7 me-5 flex justify-between items-baseline ${
                        info.score ? "mt-1" : "mt-4"
                      }`}
                    >
                      <a
                        href={`https://www.instagram.com/${info.ig}`}
                        target="_blank"
                        className="text-12"
                      >
                        @{info.ig}
                      </a>
                      {info.score && (
                        <span className="text-22">
                          {info.score}
                          <span className="text-12 ms-1">分</span>
                        </span>
                      )}
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
