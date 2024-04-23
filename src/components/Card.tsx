import styled from "styled-components";
import CardBg from "../assets/card.png";
import Sample from "../assets/sample.png";

const cardInfo = [
  { img: Sample, group: "個人組", name: "一行最多六字", member:"", ig: "lm__winter" },
  { img: Sample, group: "個人組", name: "大安區金冬天", member:"",ig: "imnotningning" },
  { img: Sample, group: "個人組", name: "大安區金冬天", member:"",ig: "lm__winter" },
  { img: Sample, group: "團體組", name: "三重MISAMO", member:"MINA/SANA/MOMO",ig: "twicetagram" },
  { img: Sample, group: "團體組", name: "三重MISAMO", member:"甜甜/小美/K/莉莉",ig: "aespa_official" },
  { img: Sample, group: "團體組", name: "三重MISAMO", member:"MINA/SANA/MOMO",ig: "blackpinkofficial" },
];

const CardBG = styled.div`
  background-image: url(${CardBg});
  width: 349px;
  height: 315px;
`;

export default function Card() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-5">
      {cardInfo.map((info) => (
        <CardBG key={info.ig} className="">
          <div className="mt-[60px] ms-[16px]">
            <div className="flex">
              <img
                className="max-w-[138px] max-h-[138px]"
                src={info.img}
                alt={`${info.name}-${info.ig}`}
              />
              <div className="text-center w-[184px] px-4">
                <div className="text-brown-300 font-medium text-[13px]">GROUP</div>
                <div className="text-brown-800 font-bold text-[22px] border-b border-brown-300">
                  {info.group}
                </div>
                {info.group === "個人組" ? (
                  <>
                    <div className="text-brown-300 font-medium text-[13px] mt-4">NAME</div>
                    <div className="text-brown-800 font-bold text-[22px] border-b border-brown-300">
                      {info.name}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-brown-300 font-medium text-[13px] mt-3">NAME</div>
                    <div className="text-brown-800 font-bold text-[22px]">{info.name}</div>
                    <div className="text-brown-800 font-bold text-[14px] border-b border-brown-300">
                      {info.member}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div
              className={`text-brown-800 font-bold text-[14px] ${
                info.group === "個人組" ? "mt-[25px]" : "mt-[23px]"
              } ms-[26px]`}
            >
              @{info.ig}
            </div>
          </div>
        </CardBG>
      ))}
    </div>
  );
}
