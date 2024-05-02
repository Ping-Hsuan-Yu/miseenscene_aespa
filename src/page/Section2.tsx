import Sec02Img1 from "../assets/img01-1.png";
import Sec02Img2 from "../assets/img01-2.png";
import Sec02Img2m from "../assets/img01-2-m.png";
import Sec02Img3 from "../assets/img01-3.png";
import Sec02Img4 from "../assets/img01-4.png";
import Sec02Img4m from "../assets/img01-4-m.png";
import Video from "../assets/0424_16x9_all_15s.mp4";
import OrangeGridBg from "../components/OrangeGridBg";

export default function Section2() {
  return (
    <section>
      <OrangeGridBg className="pt-6 md:pt-12 px-4">
        <div className="flex flex-col items-center">
          <img
            className="object-contain w-full max-w-[663px]"
            src={Sec02Img1}
            alt="完美終結稻草髮"
          />
          <div className="relative w-full">
            <img
              className="object-contain hidden lg:block absolute Sec02Img2"
              src={Sec02Img2}
            />
            <img
              className="object-contain lg:hidden absolute Sec02Img2m"
              src={Sec02Img2m}
            />
            <img
              className="object-contain absolute Sec02Img3"
              src={Sec02Img3}
            />
            <img
              className="object-contain hidden lg:block absolute Sec02Img4 lg:top-[656px] "
              src={Sec02Img4}
            />
            <img
              className="object-contain lg:hidden absolute Sec02Img4 top-[60vw]"
              src={Sec02Img4m}
            />
         
          </div>
          <div className="font-bold tracking-widest">
            <span className="text-brown-950 text-50">7種</span>
            <span className="text-white text-40">植萃精油 </span>
            <span className="text-brown-950 text-50">24H</span>
            <span className="text-white text-40">完美修護</span>
          </div>
          <div className="Sec02Video w-full max-w-[960px] h-auto z-10">
            <video className="w-full h-full" autoPlay loop muted controls webkit-playsinline src={Video} />
          </div>
        </div>
      </OrangeGridBg>
    </section>
  );
}
