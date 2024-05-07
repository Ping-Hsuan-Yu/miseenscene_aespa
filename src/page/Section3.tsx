import Sec03Img1 from "../assets/img02-1.png";
import Sec03Img1m from "../assets/img02-1-m.png";
import Sec03Img2 from "../assets/img02-2.png";
import Sec03Img2m from "../assets/img02-2-m.png";
import Gif from "../assets/0506_Horizontal_7x9.gif";

export default function Section3(props: {
  ref1: React.MutableRefObject<HTMLElement | null>;
  ref2: React.MutableRefObject<HTMLElement | null>;
}) {
  return (
    <>
      <section
        className="flex justify-center w-full my-4 lg:my-8 px-4 lg:px-8 ref"
        ref={props.ref1}
      >
        <div className="relative">
          <img
            className="absolute object-contain md:max-w-[210px] z-[15] md:w-[17.5%] w-[70.5%] md:left-[2.16%] left-[14.9%] md:bottom-[7.9%] bottom-[23.26%] md:rotate-[-4.5deg] rotate-[2deg]"
            src={Gif}
            alt=""
          />
          <img
            className="hidden md:block object-contain w-full max-w-[1194px] z-10"
            src={Sec03Img1}
            alt="快用#魅尚萱小橘瓶 完美終結稻草髮 搭配aespa舞蹈開啟與偶像的〝頂上〞對決
          讓妳連髮絲都柔順到像在跳舞～ 和aespa一起成為“頭”號完美女生吧"
          />
          <img
            className="md:hidden object-contain w-full z-10"
            src={Sec03Img1m}
            alt="快用#魅尚萱小橘瓶 完美終結稻草髮 搭配aespa舞蹈開啟與偶像的〝頂上〞對決
          讓妳連髮絲都柔順到像在跳舞～ 和aespa一起成為“頭”號完美女生吧"
          />
        </div>
      </section>
      <section className="flex justify-center w-full my-4 lg:my-8 ref" ref={props.ref2}>
        <img
          className="hidden md:block object-contain w-full max-w-[1194px] z-10"
          src={Sec03Img2}
          alt="完美造型是改變自信的起點，更讓妳從容面對生活。
          對 魅尚萱 而言，造型不只單純打理外表，
          而是從頭髮的色彩、柔順、光澤都充滿日常精緻儀式感，形成屬於妳獨特的lifestyle。
          完美護髮精油連續十年銷售第一，7種植萃精油調配，給妳24H全方位完美修護！
          現在起讓韓國第一造型護理領導品牌 魅尚萱 ，為妳打點髮絲的每個小細節吧。"
        />
        <img
          className="md:hidden object-contain w-full max-w-[1194px] z-10"
          src={Sec03Img2m}
          alt="完美造型是改變自信的起點，更讓妳從容面對生活。
          對 魅尚萱 而言，造型不只單純打理外表，
          而是從頭髮的色彩、柔順、光澤都充滿日常精緻儀式感，形成屬於妳獨特的lifestyle。
          完美護髮精油連續十年銷售第一，7種植萃精油調配，給妳24H全方位完美修護！
          現在起讓韓國第一造型護理領導品牌 魅尚萱 ，為妳打點髮絲的每個小細節吧。"
        />
      </section>
    </>
  );
}
