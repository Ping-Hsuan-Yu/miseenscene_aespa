import bg from "../assets/img03-1.png";
import timelineImg from "../assets/img03-2.png";

const Title = (props: { text: string }) => (
  <div className="relative">
    <div className="flex">
      <div className="bg-orange-600 w-10 h-10 text-center rounded-full mx-[-4px]"></div>
      <div className="bg-orange-600 w-10 h-10 text-center rounded-full mx-[-4px]"></div>
      <div className="bg-orange-600 w-10 h-10 text-center rounded-full mx-[-4px]"></div>
      <div className="bg-orange-600 w-10 h-10 text-center rounded-full mx-[-4px]"></div>
    </div>
    <span className="text-[25px] text-white font-black absolute top-0 left-1 tracking-[7px]">
      {props.text}
    </span>
  </div>
);

export default function Section4() {
  return (
    <section className="flex justify-center">
      <div className="mt-[100px] relative max-w-screen-xl">
        <img className="object-contain max-w-[1102px] max-h-[4367px]" src={bg} />
        <div className="absolute left-[200px] top-[150px] flex flex-col gap-10 font-bold text-brown-800font-bold text-brown-800 text-lg leading-relaxed">
          <div>
            <Title text="報名資格" />
            <div className="mt-2.5">
              <div className="text-orange-600 text-[22px]">參賽人數</div>
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
                Cover 魅尚萱全新代言人aespa之舞蹈，並使用 #魅尚萱小橘瓶 完美修護護髮精油，
                <br />
                結合指定創意內容拍攝影片（請詳閱各參賽組別之評分規則）。
              </li>
              <li>影片請上傳至公開之Instagram帳號，並於報名時一同提供連結。</li>
              <li>影片長度以30秒至2分鐘為限。</li>
              <li>如報名資料不齊全或投稿之舞蹈影片不合規定，則視為報名無效。</li>
              <li>為確保參加者之權益，每人限報名及領取獎項1次</li>
              <li>
                報名成功者個人組提供拍攝產品完美修護護髮精油1瓶，團體組提供拍攝產品完美修護、
                <br />
                滋養、造型、水潤護髮精油各1瓶，
                <span className="text-orange-600">
                  拍攝時所有產品皆須入鏡但以 #魅尚萱小橘瓶 為主呈現
                </span>
              </li>
            </ol>
          </div>
          <div>
            <Title text="評分規則" />
            <ol className="mt-2.5 list-decimal ps-6">
              <li>以Instagram貼文之愛心數加個項目加權分為最終分數。</li>
              <li>依照最終分數加總評選出個人組與團體組前3名並隨機抽出特別獎各3名。</li>
            </ol>
            <div className="mt-6 text-orange-600 text-[22px]">-個人組評分規則-</div>
            <ol className="mt-1 list-decimal ps-6">
              <li>影片中使用完美修護護髮精油及完成指定創意內容：+50分</li>
              <li>完成個人組指定項目內容：+30分（產品須清楚展示，若無則判定資格不符）</li>
            </ol>
            <div className="mt-6 text-orange-600 text-[22px]">-個人組指定創意內容-</div>
            <div className="mt-1 ">
              影片中<span className="text-orange-600">使用 #魅尚萱小橘瓶 完美修護護髮精油</span>
              擦拭髮尾，呈現秀髮柔順光澤的形象
              <br />
              （以撥髮、甩髮方式呈現，可參考代言人形象影片內容），並說出或以字幕呈現：
              <br />
              「完美終結稻草髮，用小橘瓶和aespa一起成為〝頭〞號完美女生！」指定文字內容。
            </div>
            <div className="flex justify-center ms-[-100px] my-8">
              <img className="w-[574px] h-[324px]" src="" alt="" />
            </div>
            <ol className="mt-2.5 list-decimal ps-6" start={3}>
              <li>
                貼文文案中須帶到「完美終結稻草髮，7種植萃精油24H完美修護」
                <br />
                及簡易的產品使用心得：+10分
              </li>
              <li>
                文末標記指定hashtag：+10分
                <br />
                <span className="text-orange-600">
                  #魅尚萱 #kpop舞蹈大賽 #我的頭髮會跳舞 #魅尚萱護髮精油 #魅尚萱小橘瓶
                  #完美終結稻草髮
                  <br />
                  #7種植萃精油24H完美修護 #aespa #aespa代言 #完美修護護髮精油
                  <br />
                </span>
                並在文中 @miseenscenetw
              </li>
              <li>
                影片中拍攝到販售通路（ex：於屈臣氏門市門口進行拍攝或融入購買情境，需拍到通路LOGO）
                <br />
                並在文中標註屈臣氏IG帳號@watsonstaiwan：+10分
              </li>
              <li>若多發布於小紅書/tiktok等平台，每一平台額外加權：+5分（此項目最多+10分）</li>
            </ol>
            <div className="mt-6 text-orange-600 text-[22px]">-團體組評分規則-</div>
            <ol className="mt-1 list-decimal ps-6">
              <li>影片中使用完美修護護髮精油及完成指定創意內容：+50分</li>
              <li>
                完成團體組指定項目內容：依照創意執行內容及與產品結合的相關性，
                <br />
                進行共50分的分數加權，創意執行以魅尚萱內部評審團為主
              </li>
            </ol>
            <div className="mt-6 text-orange-600 text-[22px]">-團體組指定創意內容-</div>
            <div className="mt-1 ">
              舞蹈中結合使用<span className="text-orange-600"> #魅尚萱小橘瓶 完美修護護髮精油</span>
              的創意內容發展，呈現秀髮柔順光澤的形象為主
              <br />
              （以撥髮、甩髮或其他創意形式呈現，亦可參考代言人官方影片內容），影片中需說出或以字幕呈現
              <br />
              「完美終結稻草髮，用小橘瓶和aespa一起成為〝頭〞號完美女生！」指定文字內容。
            </div>
            <div className="flex justify-center ms-[-100px] my-8">
              <img className="w-[574px] h-[324px]" src="" alt="" />
            </div>
            <ol className="mt-2.5 list-decimal ps-6" start={3}>
              <li>
                貼文文案中須帶到「完美終結稻草髮，7種植萃精油24H完美修護」
                <br />
                及簡易的產品使用心得：+10分
              </li>
              <li>
                文末標記指定hashtag：+10分
                <br />
                <span className="text-orange-600">
                  #魅尚萱 #kpop舞蹈大賽 #我的頭髮會跳舞 #魅尚萱護髮精油 #魅尚萱小橘瓶
                  #完美終結稻草髮
                  <br />
                  #7種植萃精油24H完美修護 #aespa #aespa代言 #完美修護護髮精油
                  <br />
                </span>
                並在文中 @miseenscenetw
              </li>
              <li>
                影片中拍攝到販售通路（ex：於屈臣氏門市門口進行拍攝或融入購買情境，需拍到通路LOGO）
                <br />
                並在文中標註屈臣氏IG帳號@watsonstaiwan：+10分
              </li>
              <li>若多發布於小紅書/tiktok等平台，每一平台額外加權：+5分（此項目最多+10分）</li>
            </ol>
          </div>
          <div>
            <Title text="活動時程" />
            <div className="my-10">
              <img className="w-[px] h-[px]" src={timelineImg} alt="" />
            </div>
            <div>『寄送產品：完美修護護髮精油為拍攝道具使用，個人組1瓶，團體組4瓶』</div>
          </div>
          <div>
            <Title text="活動獎項" />
            <div className="mt-2.5 text-orange-600 text-[22px]">-個人組獎項-</div>
            <div>
              <span className="text-orange-600">首獎：</span>
              $20,000＋完美修護護髮精油全系列，共五款（總價值$1,995）
              <br />
              <span className="text-orange-600">二獎：</span>
              $10,000＋完美修護護髮精油全系列，共五款（總價值$1,995）
              <br />
              <span className="text-orange-600">三獎：</span>
              完美修護護髮精油一年份（共5款）＋完美修護全系列商品兩組
              <br />
              （含完美修護精油洗髮精680ml、精油潤髮乳680ml、護髮霜330ml、免沖洗精華乳200ml、
              <br />
              3分鐘沙龍級髮膜300ml、完美修護護髮噴霧150ml）＋髮肌賦活香氛全系列兩組
              <br />
              （含洗髮精900ml、護髮膜900ml）＋Salon 10沙龍級多重胺基酸全系列
              <br />
              （含洗髮精500ml、護髮霜250ml）。（總價值$10,387）
            </div>
            <div className="mt-2.5 text-orange-600 text-[22px]">-團體組獎項-</div>
            <div>
              <span className="text-orange-600">首獎：</span>
              $40,000＋完美修護護髮精油全系列，共五款（總價值$1,995）
              <br />
              <span className="text-orange-600">二獎：</span>
              $30,000＋完美修護護髮精油全系列，共五款（總價值$1,995）
              <br />
              <span className="text-orange-600">三獎：</span>
              完美修護護髮精油一年份（共5款）＋完美修護全系列商品兩組
              <br />
              （含完美修護精油洗髮精680ml、精油潤髮乳680ml、護髮霜330ml、免沖洗精華乳200ml、
              <br />
              3分鐘沙龍級髮膜300ml、完美修護護髮噴霧150ml）＋髮肌賦活香氛全系列兩組
              <br />
              （含洗髮精900ml、護髮膜900ml）＋Salon 10沙龍級多重胺基酸全系列
              <br />
              （含洗髮精500ml、護髮霜250ml）。（總價值$10,387）
            </div>
            <div className="mt-2.5 text-orange-600 text-[22px]">-特別獎獎項-</div>
            <ol className="list-decimal ps-6 text-orange-600">
              <li>
                〝頭〞號完美女生獎*1：
                <span className="text-brown-800">
                  完美修護護髮精油全系列，共五款＋泡泡先生<br/>
                  完美修護精油聯名限定禮盒-款式隨機（總價值$2,824）
                </span>
              </li>
              <li>
                髮絲都在跳舞獎*2：
                <span className="text-brown-800">
                  完美修護護髮精油全系列，共五款（總價值$1,995）<br/>
                  *特別獎為排除各組別前三名後隨機抽出，個人組及團體組每組共抽出以上3名
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
