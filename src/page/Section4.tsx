import dot from "../assets/img03-1_01.png";
import dance from "../assets/img03-1_02.png";
import paper from "../assets/img03-1_03.png";
import timelineImg from "../assets/img03-2.png";
import timelineImgM from "../assets/img03-2-m.png";
import Gif1 from "../assets/05062.gif";
import Gif2 from "../assets/0508_Horizontal_All_16X9_KR_NT.gif";
import styled from "styled-components";

const Title = (props: { text: string }) => (
  <div className="relative">
    <div className="flex">
      <div className="bg-orange-600 w-9 h-9 md:w-10 md:h-10 text-center rounded-full mx-[-2.5px] md:mx-[-4px]"></div>
      <div className="bg-orange-600 w-9 h-9 md:w-10 md:h-10 text-center rounded-full mx-[-2.5px] md:mx-[-4px]"></div>
      <div className="bg-orange-600 w-9 h-9 md:w-10 md:h-10 text-center rounded-full mx-[-2.5px] md:mx-[-4px]"></div>
      <div className="bg-orange-600 w-9 h-9 md:w-10 md:h-10 text-center rounded-full mx-[-2.5px] md:mx-[-4px]"></div>
    </div>
    <span className="text-2xl md:text-[25px] text-white font-black absolute top-0 md:top-0.5 left-1 tracking-[7px]">
      {props.text}
    </span>
  </div>
);

const Bg = styled.div`
  background-color: #fff0bb;
  border: 5px solid #ff8106;
  border-radius: 5px;
  box-shadow: inset 0px 0px 0px 3px rgba(255, 255, 255, 0.9);
  padding-left: clamp(16px, 5vw, 64px);
  padding-right: clamp(16px, 5vw, 64px);
  padding-top: clamp(32px, 10vw, 128px);
  padding-bottom: clamp(24px, 7.5vw, 96px);
  @media (min-width: 768px) {
    border: 10px solid #ff8106;
    border-radius: 10px;
    box-shadow: inset 0px 0px 0px 5px rgba(255, 255, 255, 0.9);
  }
`;

const Paper = styled.div`
  background-image: url(${paper});
  background-size: contain;
  padding-left: clamp(18px, 6.6vw, 80px);
  padding-right: clamp(18px, 5.6vw, 80px);
  padding-top: clamp(32px, 10vw, 128px);
  padding-bottom: clamp(24px, 7.5vw, 96px);
  @media (min-width: 1024px) {
    background-size: cover;
  }
`;

const Dot = styled.img`
  top: clamp(-38.4px, -3vw, -3vw);
`;

const Dance = styled.img`
  top: clamp(-89.6px, -7vw, -7vw);
`;

export default function Section4(props: { ref3: React.MutableRefObject<HTMLElement | null> }) {
  return (
    <section className="flex justify-center my-8 lg:my-16 px-4 lg:px-8 ref"  ref={props.ref3}>
      <Bg className="font-bold text-brown-800 text md:text-lg leading-relaxed px-4 pt-8 pb-6">
        <div className="relative w-full">
          <Dot src={dot} className="absolute w-[6.8%] max-w-[73px] right-[46.5%]" />
          <Dance src={dance} className="absolute w-[36.2%] max-w-[387px] right-[-3%]" />
        </div>
        <Paper className="flex flex-col gap-10">
          <div>
            <Title text="報名資格" />
            <div className="mt-2.5">
              <div className="text-orange-600 text-xl md:text-[22px]">參賽人數</div>
              <div>
                <span className="text-orange-600">個人組：</span>僅限個人報名參加
              </div>
              <div>
                <span className="text-orange-600">團體組：</span>每隊人需為2人以上
              </div>
              <div>-其他規定-</div>
              <div>為確保參加者之權益，每人於各組別限報名及領取獎項1次。</div>
            </div>
          </div>
          <div>
            <Title text="報名方式" />
            <ol className="mt-2.5 list-decimal ps-6">
              <li>網路報名制，確實填寫報名資料。</li>
              <li>報名時間：2024/5/20-2024/6/20 23:59。</li>
              <li>影片上傳期限：2024/7/15 23:59止。</li>
              <li>未於以上期限上傳影片至Instagram者不具有參賽資格。</li>
            </ol>
          </div>
          <div>
            <Title text="活動方式" />
            <ol className="mt-2.5 list-decimal ps-6">
              <li>
                Cover 魅尚萱全新代言人aespa之舞蹈，並使用 #魅尚萱小橘瓶 完美修護護髮精油，結合指定創意內容拍攝影片（請詳閱各參賽組別之評分規則）。
              </li>
              <li>影片請上傳至公開之Instagram帳號，並於報名時一同提供連結。</li>
              <li>影片長度以30秒至2分鐘為限。</li>
              <li>如報名資料不齊全或投稿之舞蹈影片不合規定，則視為報名無效。</li>
              <li>為確保參加者之權益，每人限報名及領取獎項1次</li>
              <li>報名成功者拍攝道具將由主辦單位提供，詳細內容可至報名表單中確認。</li>
            </ol>
          </div>
          <div>
            <Title text="評分規則" />
            <ol className="mt-2.5 list-decimal ps-6">
              <li>以Instagram貼文之愛心數加個項目加權分為最終分數。</li>
              <li>依照最終分數加總評選出個人組與團體組前3名並隨機抽出特別獎各3名。</li>
            </ol>
            <div className="mt-6 text-white text-lg md:text-[22px]">
              <span className="bg-brown-950 rounded-md px-2">-個人組評分規則-</span>
            </div>
            <ol className="mt-1 list-decimal ps-6">
              <li>影片中使用完美修護護髮精油及完成指定創意內容：+50分</li>
              <li>完成個人組指定項目內容：+30分（產品須清楚展示，若無則判定資格不符）</li>
            </ol>
            <div className="mt-6 text-white text-lg md:text-[22px]">
              <span className="bg-brown-950 rounded-md px-2">-個人組指定創意內容-</span>
            </div>
            <div className="mt-1 ">
              影片中<span className="text-orange-600">使用 #魅尚萱小橘瓶 完美修護護髮精油</span>
              擦拭髮尾，呈現秀髮柔順光澤的形象(以撥髮、甩髮方式呈現，可參考代言人形象影片內容)，並說出或以字幕呈現：「完美終結稻草髮，用小橘瓶和aespa一起成為〝頭〞號完美女生！」指定文字內容。
            </div>
            <div className="flex justify-center my-8">
              <img className="w-[574px]" src={Gif1}/>
            </div>
            <ol className="mt-2.5 list-decimal ps-6" start={3}>
              <li>
                貼文文案中須帶到「完美終結稻草髮，7種植萃精油24H完美修護」及簡易的產品使用心得：+10分
              </li>
              <li>
                文末標記指定hashtag：+10分
                <br />
                <span className="text-orange-600">
                  #魅尚萱 #kpop舞蹈大賽 #我的頭髮會跳舞 #魅尚萱護髮精油 #魅尚萱小橘瓶
                  #完美終結稻草髮 #7種植萃精油24H完美修護 #aespa #aespa代言 #完美修護護髮精油
                </span> 並在文中 @miseenscenetw
              </li>
              <li>
                影片中拍攝到販售通路(ex：於屈臣氏門市門口進行拍攝或融入購買情境，需拍到通路LOGO) 並在文中標註屈臣氏IG帳號@watsonstaiwan：+10分
              </li>
              <li>若多發布於小紅書/tiktok等平台，每一平台額外加權：+5分（此項目最多+10分）</li>
            </ol>
            <div className="mt-6 text-white text-lg md:text-[22px]">
              <span className="bg-brown-950 rounded-md px-2">-團體組評分規則-</span>
            </div>
            <ol className="mt-1 list-decimal ps-6">
              <li>影片中使用完美修護護髮精油及完成指定創意內容：+50分</li>
              <li>
                完成團體組指定項目內容：依照創意執行內容及與產品結合的相關性，進行共50分的分數加權，創意執行以魅尚萱內部評審團為主
              </li>
            </ol>
            <div className="mt-6 text-white text-lg md:text-[22px]">
              <span className="bg-brown-950 rounded-md px-2">-團體組指定創意內容-</span>
            </div>
            <div className="mt-1 ">
              舞蹈中結合使用<span className="text-orange-600"> #魅尚萱小橘瓶 完美修護護髮精油</span>
              的創意內容發展，呈現秀髮柔順光澤的形象為主(以撥髮、甩髮或其他創意形式呈現，亦可參考代言人官方影片內容)，影片中需說出或以字幕呈現
              「完美終結稻草髮，用小橘瓶和aespa一起成為〝頭〞號完美女生！」指定文字內容。
            </div>
            <div className="flex justify-center my-8">
              <img className="w-[574px] " src={Gif2}/>
            </div>
            <ol className="mt-2.5 list-decimal ps-6" start={3}>
              <li>
                貼文文案中須帶到「完美終結稻草髮，7種植萃精油24H完美修護」及簡易的產品使用心得：+10分
              </li>
              <li>
                文末標記指定hashtag：+10分
                <br />
                <span className="text-orange-600">
                  #魅尚萱 #kpop舞蹈大賽 #我的頭髮會跳舞 #魅尚萱護髮精油 #魅尚萱小橘瓶
                  #完美終結稻草髮 #7種植萃精油24H完美修護 #aespa #aespa代言 #完美修護護髮精油
                </span> 並在文中 @miseenscenetw
              </li>
              <li>
                影片中拍攝到販售通路(ex：於屈臣氏門市門口進行拍攝或融入購買情境，需拍到通路LOGO)
                並在文中標註屈臣氏IG帳號@watsonstaiwan：+10分
              </li>
              <li>若多發布於小紅書/tiktok等平台，每一平台額外加權：+5分（此項目最多+10分）</li>
            </ol>
          </div>
          <div>
            <Title text="活動時程" />
            <div className="my-10">
              <img className="w-full hidden md:block" src={timelineImg} alt="" />
              <img className="w-full md:hidden" src={timelineImgM} alt="" />
            </div>
            <div>*活動贈品將於名次公告後陸續安排寄送</div>
            <div>*名次將公告於本活動官網及魅尚萱官方粉絲專頁</div>
            
          </div>
          <div>
            <Title text="活動獎項" />
            <div className="mt-2.5 text-orange-600 text-xl md:text-[22px]">-個人組獎項-</div>
            <div>
              <span className="text-orange-600">首獎：</span>
              $20,000＋完美修護護髮精油全系列，共五款（總價值$1,995）
              <br />
              <span className="text-orange-600">二獎：</span>
              $10,000＋完美修護護髮精油全系列，共五款（總價值$1,995）
              <br />
              <span className="text-orange-600">魅尚萱鐵粉獎：</span>
              魅尚萱明星商品正貨（總價值$10,387）
              <br />
              <span className="text-sm font-medium">
                內含完美修護護髮精油一年份(共5款)＋完美修護全系列商品兩組(含完美修護精油洗髮精680ml、精油潤髮乳680ml、
                護髮霜330ml、免沖洗精華乳200ml、3分鐘沙龍級髮膜300ml、完美修護護髮噴霧150ml)＋髮肌賦活香氛全系列兩組
                (含洗髮精900ml、護髮膜900ml)＋Salon
                10沙龍級多重胺基酸全系列(含洗髮精500ml、護髮霜250ml)。
              </span>
            </div>
            <div className="mt-2.5 text-orange-600 text-xl md:text-[22px]">-團體組獎項-</div>
            <div>
              <span className="text-orange-600">首獎：</span>
              $40,000＋完美修護護髮精油全系列，共五款（總價值$1,995）
              <br />
              <span className="text-orange-600">二獎：</span>
              $30,000＋完美修護護髮精油全系列，共五款（總價值$1,995）
              <br />
              <span className="text-orange-600">魅尚萱鐵粉獎：</span>
              魅尚萱明星商品正貨（總價值$10,387）
              <br />
              <span className="text-sm font-medium">
                內含完美修護護髮精油一年份(共5款)＋完美修護全系列商品兩組(含完美修護精油洗髮精680ml、精油潤髮乳680ml、
                護髮霜330ml、免沖洗精華乳200ml、3分鐘沙龍級髮膜300ml、完美修護護髮噴霧150ml)＋髮肌賦活香氛全系列兩組
                (含洗髮精900ml、護髮膜900ml)＋Salon
                10沙龍級多重胺基酸全系列(含洗髮精500ml、護髮霜250ml)。
              </span>
            </div>
            <div className="mt-2.5 text-orange-600 text-xl md:text-[22px]">-特別獎獎項-</div>
            <ol className="list-decimal ps-6 text-orange-600">
              <li>
                〝頭〞號完美女生獎*1：
                <span className="text-brown-800">
                  完美修護護髮精油全系列，共五款＋泡泡先生
                  <br />
                  完美修護精油聯名限定禮盒-款式隨機（總價值$2,824）
                </span>
              </li>
              <li>
                髮絲都在跳舞獎*2：
                <span className="text-brown-800">
                  完美修護護髮精油全系列，共五款（總價值$1,995）
                  <br />
                  *特別獎為排除各組別前三名後隨機抽出，個人組及團體組每組共抽出以上3名
                </span>
              </li>
            </ol>
          </div>
        </Paper>
      </Bg>
    </section>
  );
}
