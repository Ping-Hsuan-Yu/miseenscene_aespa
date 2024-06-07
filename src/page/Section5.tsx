import Sec05Img1 from "../assets/img05-1.png";
import Sec05Img1m from "../assets/img05-1-m.png";
import Sec05Img2 from "../assets/img05-2.png";
import Sec05Img3 from "../assets/img05-3.png";
import Sec05Img4 from "../assets/img05-4.png";
import Card from "../components/Card";
import OrangeGridBg from "../components/OrangeGridBg";

export default function Section5(props: {
  ref4: React.MutableRefObject<HTMLElement | null>;
  ref5: React.MutableRefObject<HTMLElement | null>;
}) {
  return (
    <section className="flex justify-center ref" ref={props.ref4}>
      <OrangeGridBg className="w-dvw flex justify-center">
        <div className="max-w-screen-xl w-dvw flex flex-col items-center mt-10 px-4 md:px-8">
          <img
            className="md:hidden object-contain w-full "
            src={Sec05Img1m}
            alt="參賽隊伍"
          />
          <img
            className="hidden md:block object-contain w-full max-w-[988px]"
            src={Sec05Img1}
            alt="參賽隊伍"
          />
          <Card />
          <footer className="ref" ref={props.ref5}>
            <div className="mt-[20px] relative flex justify-center">
              <img className="object-contain w-full max-w-[985px]" src={Sec05Img2} alt="" />
              <div className="absolute top-[60%] flex gap-[6vw] w-1/4 min-w-[128px]">
                <a href="https://www.facebook.com/miseensceneTW" target="_blank">
                  <img
                    className="object-contain w-full max-w-[] max-h-[]"
                    src={Sec05Img3}
                    alt="facebook"
                  />
                </a>
                <a href="https://www.instagram.com/miseenscenetw/" target="_blank">
                  <img
                    className="object-contain w-full max-w-[] max-h-[]"
                    src={Sec05Img4}
                    alt="instagram"
                  />
                </a>
              </div>
            </div>
            <div className="w-full text-white text-[14px] font-bold my-12 leading-loose">
              <div>注意事項</div>
              <ol className="list-decimal ps-4">
                <li>
                  參加活動者請先詳細閱讀活動內容及本注意事項以維護自身權益。參加者於參加本活動並提供資料之同時，即視為已同意接受本活動之活動辦法及注意事項。
                </li>
                <li>
                  若主辦單位魅尚萱-活動小組因參加者發文內容之正確性或有違法疑慮而以Facebook/Instagram訊息或是電話通知參加者修改，其應配合修改；且主辦單位得於該貼文之討論串留言澄清，參加者不得刪除。若貼文使用創作者協作最多以4個帳號為限。
                </li>
                <li>
                  產品寄送僅限台澎金馬地區，若因提供寄送資料錯誤導致投遞失敗，或因無人簽收導致任何收件問題，恕不另行通知、補寄。
                </li>
                <li>
                  參加者同意為參加本活動所投稿之心得內容及影片其著作財產權歸主辦單位魅尚萱所有，授權主辦單位魅尚萱後製於廣告圖文、廣告影片、POSM(輔助銷售材料)中，並使用於主辦單位魅尚萱品牌官方平台、主辦單位電商頁面引用為廣告素材推播及品牌合作之全台實體與線上通路。參加者同意為參加本活動所投稿之心得內容及照片其著作財產權歸主辦單位魅尚萱所有，主辦單位魅尚萱得不限地點、時間、次數、媒體
                  (包括但不限於實體、網路、電子媒體、報章雜誌、廣告圖文、廣告影片、POSM(輔助銷售材料)、主辦單位電商頁面、官方網站等媒體)、方式使用之營利及非營利使用，並得再授權第三人使用。又參加人同意不對主辦單位魅尚萱及其授權利用之人行使著作人格權。
                </li>
                <li>
                  主辦單位魅尚萱-活動小組將依據參加者所留存之聯絡資訊進行聯繫，參加者須確認所留聯絡資訊是否正確，如因參加者未於回覆期限內提供或提供不實、不清楚、不完整或不正確之資料，導致無法符合參加資格、無法通知中獎、獎品遭退回、冒領、遺失者，將視同放棄參加或得獎資格，恕不另行補發或提供任何補償。
                </li>
                <li>
                  如參加者未滿二十歲，應於其法定代理人閱讀、瞭解並同意本活動辦法及注意事項之所有內容後，始得參與本活動，當消費者參與本活動時，即推定其法定代理人已閱讀、瞭解並同意本活動辦法及注意事項。
                </li>
                <li>
                  依中華民國稅法規定，等值獎金金額超過新臺幣20,000元(含)以上者，中獎者須先負擔10%中獎稅額；全年等值獎金金額超過新臺幣1,000元(含)以上，將納入年度個人所得計算，並於次年度寄發所得稅扣繳憑單，並依中獎人所提供之身分證影本申報個人所得。中獎人非中華民國境內之居住者（在台居住未滿183天）則須按獎項價值扣繳20％機會中獎稅並提供居留證影本。
                </li>
                <li>
                  主辦單位魅尚萱-活動小組就參與本活動參加者之資格，保有審查之權利，若經查核有不符本活動規定之參加資格者，主辦單位魅尚萱-活動小組將取消其參加或得獎之資格。{" "}
                </li>
                <li>
                  如有因任何電腦、網路、電話、技術或不可歸咎於主辦單位魅尚萱-活動小組之事由，寄送之獎品有延遲、遺失、錯誤、無法辨識或毀損之情況，主辦單位魅尚萱-活動小組不負任何法律責任，得獎者不得因此異議。
                </li>
                <li>
                  參加者若以惡意之電腦程式或其他明顯違反活動公平性之方式，意圖混淆或影響得獎結果或有違法行為，一經發現或第三人檢舉，主辦單位魅尚萱-活動小組除得立即取消參加者之得獎資格，並得追回已發獎品或要求相當金額之賠償。若主辦單位魅尚萱因此受有損害，並得請求損害賠償。
                </li>
                <li>
                  活動注意事項未盡之事宜，依中獎通知函說明為準，中獎者不得要求更改獎項、兌換現金、折讓或任何調整事項。
                </li>
                <li>
                  若原定獎項因故無法提供，主辦單位魅尚萱-活動小組得另以等值之獎品替代之，得獎者不得異議。
                </li>
                <li>
                  本活動因故無法進行時，主辦單位魅尚萱-活動小組有權決定取消、終止、修改或暫停本活動。
                </li>
              </ol>
              <div className="mt-6">
                主辦單位魅尚萱保有最終修改、變更、活動解釋及取消本活動之權利，若有相關異動將會公告於品牌官方Facebook/Instagram，恕不另行通知。
              </div>
            </div>
          </footer>
        </div>
      </OrangeGridBg>
    </section>
  );
}
