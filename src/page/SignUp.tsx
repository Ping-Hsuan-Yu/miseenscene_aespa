import OrangeGridBg from "../components/OrangeGridBg";
import Paper from "../assets/paper.png";
import ButtonBg from "../assets/submit.png";
import FooterBg from "../assets/signup_footer.png";
import styled from "styled-components";
import Label from "../components/Label";
import LabelCaption from "../components/LabelCaption";
import InputText from "../components/InputText";
import InputField from "../components/InputField";

const PaperBg = styled.div`
  background-image: url(${Paper});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const UnderLineCaption = styled.div`
  position: relative;
  width: fit-content;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ff8106;
    opacity: 0.2;
    height: 10px;
    width: 100%;
    border-radius: 10px;
    z-index: 0;
  }
`;

const Submit = styled.button`
  background-image: url(${ButtonBg});
`;

const Footer = styled.div`
  background-image: url(${FooterBg});
  width: 100%;
  height: 342px;
  margin-top: -242px;
`;

export default function SignUp() {
  return (
    <>
      <OrangeGridBg className="w-full flex justify-center px-[100px]">
        <PaperBg className="mt-24 max-w-screen-xl">
          <form className="flex flex-col gap-14 pt-28 ps-28 pe-16">
            <div className="text-red text-[22px] font-bold">* 表示必填問題</div>
            <div>
              <Label htmlFor="userName" required>
                1. 您的真實姓名
              </Label>
              <LabelCaption>*若有資料不完整/有誤/重複報名等情事，將自動視同放棄</LabelCaption>
              <InputText />
            </div>
            <div>
              <Label htmlFor="group" required>
                2. 您欲參加的組別
              </Label>

              <LabelCaption>*為確保參加者之權益，每人於各組別限報名及領取獎項1次</LabelCaption>
              <InputField>
                <div className="text-[23px] text-orange-600 font-bold">
                  <div>
                    <input type="radio" name="group" id="person" />
                    <label htmlFor="person">個人組</label>
                  </div>
                  <div>
                    <input type="radio" name="group" id="team" />
                    <label htmlFor="team">團體組</label>
                  </div>
                </div>
              </InputField>
            </div>
            <div>
              <Label htmlFor="sex" required>
                3. 您的性別
              </Label>
              <InputField>
                <div className="text-[23px] text-orange-600 font-bold">
                  <div>
                    <input type="radio" name="sex" id="female" />
                    <label htmlFor="female">女性</label>
                  </div>
                  <div>
                    <input type="radio" name="sex" id="male" />
                    <label htmlFor="male">男性</label>
                  </div>
                </div>
              </InputField>
            </div>
            <div>
              <Label htmlFor="birthday" required>
                4. 您的生日
              </Label>
              <InputField>
                <input type="date" />
              </InputField>
            </div>
            <div>
              <Label htmlFor="phone" required>
                5. 您的手機號碼
              </Label>
              <InputText />
            </div>
            <div>
              <Label htmlFor="email" required>
                6. 您的電子郵件
              </Label>
              <LabelCaption>
                *作為後續聯繫使用，若有資料不完整/有誤導致無法聯繫的情況，將自動視同放棄
              </LabelCaption>
              <InputText />
            </div>
            <div>
              <Label htmlFor="address" required>
                7. 您的產品寄送地址（含郵遞區號）
              </Label>
              <LabelCaption>
                Ex：110 台北市信義區信義路五段7號
                <br />
                *團體組一人代表填寫即可，個人組提供拍攝產品完美修護護髮精油1瓶
                <br />
                團體組提供拍攝產品完美修護、滋養、造型、水潤護髮精油各1瓶
                <br />
                <UnderLineCaption className="text-brown-950">
                  拍攝時所有產品皆須入鏡但以#魅尚萱小橘瓶 為主呈現
                </UnderLineCaption>
              </LabelCaption>
              <InputText />
            </div>
            <div>
              <Label htmlFor="ig" required>
                8. 預計發文的Instagram社群平台連結
              </Label>
              <LabelCaption>
                EX：https://www.instagram.com/miseenscenetw/
                <br />
                *會依此留存的帳號作為後續評分追蹤依據，若欲更改需私訊官方社群告知
                <br />
                *團體組請填一名代表人帳號為發布影片者，最終認列評分以此帳號發布之影片讚數&影片內容加權分數計算為準
              </LabelCaption>
              <InputText />
            </div>
            <div>
              <Label htmlFor="tiktok">9. 預計發文的小紅書/tiktok帳號連結</Label>
              <LabelCaption>
                Ex：https://www.tiktok.com/@miseenscenetw
                <br />
                *此為非必要之額外加權項目
                <br />
                *會依此留存的帳號作為後續評分追蹤依據，若欲更改需私訊官方社群告知
              </LabelCaption>
              <InputText />
            </div>
            <div>
              <Label htmlFor="name" required>
                10. 參賽名稱
              </Label>
              <LabelCaption>
                *顯示於參賽隊伍頁面，個人組請填寫綽號，團體組請填寫隊伍名稱
                <br />
                *內容若涉及不雅、暴力、色情等，主辦單位有權取消其參賽資格
              </LabelCaption>
              <InputText />
            </div>
            <div>
              <Label htmlFor="photo" required>
                11. 參賽證照片上傳
              </Label>
              <LabelCaption>
                *顯示於參賽隊伍頁面，內容若涉及不雅、暴力、色情等，主辦單位有權取消其參賽資格
              </LabelCaption>
              <InputField>
                <input type="file" />
              </InputField>
            </div>
            <div>
              <Label htmlFor="people" required>
                12. 報名人數
              </Label>
              <LabelCaption>*請填寫阿拉伯數字，若報名個人組請填1</LabelCaption>
              <InputText />
            </div>
            <div>
              <Label htmlFor="team_member">13. 團體組組員姓名及Instagram帳號</Label>
              <LabelCaption>
                填寫方式請依照下方格式填寫：
                <br />
                Ex：魅小萱：https://www.instagram.com/miseenscenetw/
              </LabelCaption>
              <InputText />
            </div>
            <div>
              <Label htmlFor="brand" required>
                14. 請問您認識以下哪些髮品品牌？
              </Label>
              <InputField>
                <div className="text-[23px] text-orange-600 font-bold">
                  <div>
                    <input type="checkbox" name="" id="Mise-en-scène 魅尚萱" />
                    <label htmlFor="Mise-en-scène 魅尚萱">Mise-en-scène 魅尚萱</label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="Kérastase" />
                    <label htmlFor="Kérastase">Kérastase</label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="Moroccanoil" />
                    <label htmlFor="Moroccanoil">Moroccanoil</label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="Elastine伊絲婷" />
                    <label htmlFor="Elastine伊絲婷">Elastine伊絲婷</label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="L'Oréal Paris巴黎萊雅" />
                    <label htmlFor="L'Oréal Paris巴黎萊雅">L'Oréal Paris巴黎萊雅</label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="AQUAIR阿葵亞" />
                    <label htmlFor="AQUAIR阿葵亞">AQUAIR阿葵亞</label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="樂絲朵-L" />
                    <label htmlFor="樂絲朵-L">樂絲朵-L</label>
                  </div>
                  <div className="flex">
                    <input type="checkbox" name="" id="其他：" />
                    <label className="text-nowrap" htmlFor="其他：">
                      其他：
                    </label>
                    <input
                      className="w-full text-[23px] text-orange-600 font-bold bg-orange-100 outline-none border-b pb-2"
                      type="text"
                    />
                  </div>
                </div>
              </InputField>
            </div>
            <div>
              <Label htmlFor="where" required>
                15. 請問您是從哪裡得知這個活動的？
              </Label>
              <InputField>
                <div className="text-[23px] text-orange-600 font-bold">
                  <div>
                    <input type="checkbox" name="" id="官方粉絲團" />
                    <label htmlFor="官方粉絲團">官方粉絲團</label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="廣告" />
                    <label htmlFor="廣告">廣告</label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="朋友告知" />
                    <label htmlFor="朋友告知">朋友告知</label>
                  </div>
                  <div className="flex">
                    <input type="checkbox" name="" id="where-other" />
                    <label className="text-nowrap" htmlFor="where-other">
                      其他：
                    </label>
                    <input
                      className="w-full text-[23px] text-orange-600 font-bold bg-orange-100 outline-none border-b pb-2"
                      type="text"
                    />
                  </div>
                </div>
              </InputField>
            </div>
            <div>
              <Label htmlFor="why" required>
                16. 請問您為什麼想參加這個活動？
              </Label>
              <InputField>
                <div className="text-[23px] text-orange-600 font-bold">
                  <div>
                    <input type="checkbox" name="" id="喜歡跳舞" />
                    <label htmlFor="喜歡跳舞">喜歡跳舞</label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="之前就有關注魅尚萱" />
                    <label htmlFor="之前就有關注魅尚萱">之前就有關注魅尚萱</label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="本身是aespa的粉絲" />
                    <label htmlFor="本身是aespa的粉絲">本身是aespa的粉絲</label>
                  </div>
                  <div className="flex">
                    <input type="checkbox" name="" id="why-other" />
                    <label className="text-nowrap" htmlFor="why-other">
                      其他：
                    </label>
                    <input
                      className="w-full text-[23px] text-orange-600 font-bold bg-orange-100 outline-none border-b pb-2"
                      type="text"
                    />
                  </div>
                </div>
              </InputField>
            </div>
            <div>
              <Label htmlFor="hair" required>
                17. 您平常有護髮習慣嗎？
              </Label>
              <InputField>
                <div className="text-[23px] text-orange-600 font-bold">
                  <div>
                    <input type="radio" name="hair" id="有" />
                    <label htmlFor="有">有</label>
                  </div>
                  <div>
                    <input type="radio" name="hair" id="偶爾" />
                    <label htmlFor="偶爾">偶爾</label>
                  </div>
                  <div>
                    <input type="radio" name="hair" id="不護髮" />
                    <label htmlFor="不護髮">不護髮</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="hair" id="hair-other" />
                    <label className="text-nowrap" htmlFor="hair-other">
                      其他：
                    </label>
                    <input
                      className="w-full text-[23px] text-orange-600 font-bold bg-orange-100 outline-none border-b pb-2"
                      type="text"
                    />
                  </div>
                </div>
              </InputField>
            </div>
            <div>
              <Label htmlFor="care" required>
                18. 承上題，若有您平常使用什麼護髮產品？
              </Label>
              <LabelCaption>*若不護髮則填無</LabelCaption>
              <InputText />
            </div>
            <div className="ms-[-20px]">
              <Label htmlFor="" required>
                【注意事項】
              </Label>
              <ol className="mt-3 list-decimal ps-8 text-[15px] font-bold text-brown-950 flex flex-col gap-2">
                <li>
                  參加活動者請先詳細閱讀活動內容及本注意事項以維護自身權益。參加者於參加本活動並提供資料之同時，即視為已同意接受本活動之活動辦法及注意事項。
                </li>
                <li>
                  若主辦單位魅尚萱-活動小組因參加者發文內容之正確性或有違法疑慮而以Facebook/Instagram訊息或是電話通知參加者修改，其應配合修改；且主辦單位得於該貼文之討論串留言澄清，參加者不得刪除。
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
                <span className="ms-[-26px]">
                  主辦單位魅尚萱保有最終修改、變更、活動解釋及取消本活動之權利，若有相關異動將會公告於品牌官方Facebook/Instagram，恕不另行通知。
                </span>
              </ol>
              <InputField>
                <div className="text-[23px] text-orange-600 font-bold">
                  <div>
                    <input type="radio" name="agree" id="agree" />
                    <label htmlFor="agree">我同意</label>
                  </div>
                </div>
              </InputField>
            </div>
            <div className="flex justify-between items-center mb-14">
              <Submit
                type="button"
                className="w-[232px] h-[64px] text-white text-[36px] font-bold tracking-widest"
              >
                提交
              </Submit>
              <div className="text-orange-600 text-[27px] tracking-wider font-bold">清除表單</div>
            </div>
          </form>
        </PaperBg>
      </OrangeGridBg>
      <Footer />
    </>
  );
}
