import Sec02Img1 from "../assets/img01-1.png";
import Sec02Img2 from "../assets/img01-2.png";
import Sec02Img3 from "../assets/img01-3.png";
import Sec02Img4 from "../assets/img01-4.png";
import OrangeGridBg from "../components/OrangeGridBg";



export default function Section2() {
  return (
    <section className="flex justify-center">
      <OrangeGridBg className="max-w-screen-xl w-full min-h-[806px]">
        <div className="flex flex-col items-center mt-[46px]">
          <img
            className="object-contain max-w-[680px] max-h-[146px]"
            src={Sec02Img1}
            alt="完美終結稻草髮"
          />
          <div className="relative">
            <img
              className="object-contain max-w-[258px] max-h-[214px] absolute left-[-615px] top-[-20px]"
              src={Sec02Img2}
            />
          </div>
          <div className="font-bold tracking-widest">
            <span className="text-brown-950 text-[50px]">7種</span>
            <span className="text-white text-[40px]">植萃精油 </span>
            <span className="text-brown-950 text-[50px]">24H</span>
            <span className="text-white text-[40px]">完美修護</span>
          </div>
          <iframe
            className="mt-[34px z-10"
            width="848"
            height="449"
            src="https://www.youtube.com/embed/62S8dqKHEPU?si=dEq2KsONmpzHhO7X"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="relative">
            <img
              className="object-contain max-w-[117px] max-h-[170px] absolute right-[-575px] bottom-24"
              src={Sec02Img3}
            />
          </div>
          <div className="relative">
            <img
              className="object-contain max-w-[443px] max-h-[154px] absolute right-[-640px] bottom-[-118px]"
              src={Sec02Img4}
            />
          </div>
        </div>
      </OrangeGridBg>
    </section>
  );
}
