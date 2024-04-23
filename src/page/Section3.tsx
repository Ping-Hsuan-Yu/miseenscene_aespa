import Sec03Img1 from "../assets/img02-1.png";
import Sec03Img2 from "../assets/img02-2.png";
import Sec03Img3 from "../assets/img02-3.jpg";

export default function Section3() {
  return (
    <>
      <section className="flex justify-center">
        <div className="flex justify-end w-[1280px] h-[1369px] relative">
          <img
            className="object-contain max-w-[1194px] max-h-[859px] absolute top-4 right-[-6px]"
            src={Sec03Img1}
            alt="快用#魅尚萱小橘瓶 完美終結稻草髮 搭配aespa舞蹈開啟與偶像的〝頂上〞對決
          讓妳連髮絲都柔順到像在跳舞～ 和aespa一起成為“頭”號完美女生吧"
          />
        </div>
      </section>
      <div className="flex justify-center relative">
        <img
          className="object-contain max-w-[1194px] max-h-[640px] absolute top-[-480px] z-10"
          src={Sec03Img2}
          alt="韓國第一造型妝髮品牌 魅尚萱"
        />
      </div>
      <div className="flex justify-center relative">
        <div className="absolute top-32">
          <p className="text-center text-brown-800 text-[28px] leading-[46px] font-bold tracking-wide">
            Mise-en-Scene 來自法文，意指「配置畫面中的一切」。<br/>
            特別是在現代話劇與電影中<br/>
            代表著以美學角度細心規劃從人物到裝扮、燈光、背景與攝影機的移動。<br/>
            專業美髮綜合品牌魅尚萱的哲學即在於提高您的造型與形象完成度。
          </p>
        </div>
        <img
          className="object-contain max-w-[1280px] max-h-[2768px]"
          src={Sec03Img3}
          alt="韓國第一造型妝髮品牌 魅尚萱"
        />
      </div>
    </>
  );
}
