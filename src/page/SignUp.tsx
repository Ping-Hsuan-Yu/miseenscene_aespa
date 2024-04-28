import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Paper from "../assets/paper.png";
import FooterBg from "../assets/signup_footer.png";
import ButtonBg from "../assets/submit.png";
import InputField from "../components/InputField";
import InputText from "../components/InputText";
import Label from "../components/Label";
import LabelCaption from "../components/LabelCaption";
import OrangeGridBg from "../components/OrangeGridBg";
import DatePicker from "react-date-picker";
import CheckBox, { InputCheckBox } from "../components/CheckBox";

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

const Radio = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1em;
  height: 1em;
  border: 0.15rem solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  margin-top: 4px;
  &::before {
    content: "";
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em currentColor;
  }
  &:checked::before {
    transform: scale(1);
  }
`;

const url =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLScLW9Z5qgLyQaTWPpy9bdygbY1JNM2sNLtVAi4BKmRtodDvKA/formResponse";

type DateValuePiece = Date | null;
type DateValue = DateValuePiece | [DateValuePiece, DateValuePiece];

export default function SignUp() {
  const [birthday, setBirthday] = useState<DateValue>(new Date());
  const [otherSex, setOtherSex] = useState<string>("");
  const [brand, setBrand] = useState<string[]>([]);
  const [where, setWhere] = useState<string[]>([]);
  const [why, setWhy] = useState<string[]>([]);
  const [otherCare, setOtherCare] = useState<string>("");
  const [file, setFile] = useState<File | null>(null)
  const [inputValue, setInputValue] = useState({
    "entry.855994970": "", //1. 您的真實姓名
    "entry.1973978883": "", //2. 您欲參加的組別
    "entry.1434542737": "", //3. 您的性別
    "entry.399421725_year": "", //4. 您的生日_年
    "entry.399421725_month": "", //4. 您的生日_月
    "entry.399421725_day": "", //4. 您的生日_日
    "entry.1892106210": "", //5. 您的手機號碼
    "entry.388213980": "", //6. 您的電子郵件
    "entry.913934699": "", //7. 您的產品寄送地址（含郵遞區號）
    "entry.2000482615": "", //8. 預計發文的Instagram社群平台連結
    "entry.1782465680": "", //9. 預計發文的小紅書/tiktok帳號連結
    "entry.844234350": "", //10. 參賽名稱
    "entry.953380031": "", //12. 報名人數
    "entry.1939934942": "", //13. 團體組組員姓名及Instagram帳號
    "entry.832590299": "", //14. 請問您認識以下哪些髮品品牌？
    "entry.832590299.other_option_response": "",
    "entry.1709870411": "", //15. 請問您是從哪裡得知這個活動的？
    "entry.1709870411.other_option_response": "",
    "entry.1958309499": "", //16. 請問您為什麼想參加這個活動？
    "entry.1958309499.other_option_response": "",
    "entry.1477264882": "", //17. 您平常有護髮習慣嗎？
    "entry.2147255090": "", //18. 承上題，若有您平常使用什麼護髮產品？
    "entry.1695036427": "", //agree
  });

  const fetchData = useCallback(() => {
    fetch(url, { method: "POST", body: JSON.stringify(inputValue), mode: "no-cors" })
    
    
      .then((res) => {

        console.log(inputValue)
        console.log(res)
      
    })
      .catch((err) => console.error(err));
  }, [inputValue]);

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckBoxOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setState((prev) => [...prev, value]);
    } else {
      setState((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    if (e.target.files){
      setFile(e.target.files[0])
    }
  }

  const handleOtherCheckBoxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const name = e.target.name;
    if (!checked) {
      setInputValue((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  useEffect(() => {
    if (birthday) {
      const birthdayString = birthday.toLocaleString().split(" ")[0].split("/");
      setInputValue((prev) => ({
        ...prev,
        "entry.399421725_year": birthdayString[0],
        "entry.399421725_month": birthdayString[1],
        "entry.399421725_day": birthdayString[2],
      }));
    }
  }, [birthday]);

  useEffect(() => {
    setInputValue((prev) => ({
      ...prev,
      "entry.832590299": brand.join(","),
    }));
  }, [brand]);

  useEffect(() => {
    setInputValue((prev) => ({
      ...prev,
      "entry.1709870411": where.join(","),
    }));
  }, [where]);

  useEffect(() => {
    setInputValue((prev) => ({
      ...prev,
      "entry.1958309499": why.join(","),
    }));
  }, [why]);

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  const handleUpload = async () => {
    if (file) {
      console.log("Uploading file...");
  
      const formData = new FormData();
      formData.append("fileContent", file)
      formData.append("fileName", "test")
  
      try {
        // You can write the URL of your server or any other endpoint used for file upload
        const result = await fetch("https://script.google.com/macros/s/AKfycbyVDVSYkapjfB5r1trQlD4lwLRrsJlYua6LVlrNRte0Knif4f6Acwiqf9aAL-YH0HnQ/exec", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*"
          },
          body: formData,
        });
  
        const data = await result.json();
  
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <OrangeGridBg className="w-full flex justify-center">
        <PaperBg className="mt-24 max-w-screen-xl">
          <form className="flex flex-col gap-14 pt-28 ps-28 pe-16">
            <div className="text-red text-[22px] font-bold">* 表示必填問題</div>
            <div>
              <Label htmlFor="userName" required>
                1. 您的真實姓名
              </Label>
              <LabelCaption>*若有資料不完整/有誤/重複報名等情事，將自動視同放棄</LabelCaption>
              <InputText
                id="userName"
                name="entry.855994970"
                value={inputValue["entry.855994970"]}
                onChange={handleInputOnChange}
              />
            </div>
            <div>
              <Label htmlFor="group" required>
                2. 您欲參加的組別
              </Label>
              <LabelCaption>*為確保參加者之權益，每人於各組別限報名及領取獎項1次</LabelCaption>
              <InputField>
                <div className="text-[23px] text-orange-600 font-bold">
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="entry.1973978883"
                      id="person"
                      value="個人組"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="person">個人組</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="entry.1973978883"
                      id="team"
                      value="團體組"
                      onChange={handleInputOnChange}
                    />
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
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="entry.1434542737"
                      id="female"
                      value="女性"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="female">女性</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="entry.1434542737"
                      id="male"
                      value="男性"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="male">男性</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Radio
                        type="radio"
                        name="entry.1434542737"
                        id="other-sex"
                        value={otherSex}
                        onChange={handleInputOnChange}
                      />
                    </div>
                    <label className="text-nowrap" htmlFor="other-sex">
                      其他：
                    </label>
                    <input
                      className="w-full text-[23px] text-orange-600 font-bold bg-orange-100 outline-none border-b"
                      type="text"
                      name="entry.1434542737"
                      value={otherSex}
                      onChange={(event) => {
                        if (
                          inputValue["entry.1434542737"] !== "女性" &&
                          inputValue["entry.1434542737"] !== "男性"
                        ) {
                          handleInputOnChange(event);
                        }
                        setOtherSex(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </InputField>
            </div>
            <div>
              <Label htmlFor="birthday" required>
                4. 您的生日
              </Label>
              <InputField>
                <DatePicker
                  value={birthday}
                  onChange={setBirthday}
                  calendarIcon={null}
                  clearIcon={null}
                  required
                  className="bg-orange-100 border-orange-600 border-b text-orange-600"
                />
              </InputField>
            </div>
            <div>
              <Label htmlFor="phone" required>
                5. 您的手機號碼
              </Label>
              <InputText
                id="phone"
                name="entry.1892106210"
                value={inputValue["entry.1892106210"]}
                onChange={handleInputOnChange}
              />
            </div>
            <div>
              <Label htmlFor="email" required>
                6. 您的電子郵件
              </Label>
              <LabelCaption>
                *作為後續聯繫使用，若有資料不完整/有誤導致無法聯繫的情況，將自動視同放棄
              </LabelCaption>
              <InputText
                id="email"
                name="entry.388213980"
                value={inputValue["entry.388213980"]}
                onChange={handleInputOnChange}
              />
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
              <InputText
                id="address"
                name="entry.913934699"
                value={inputValue["entry.913934699"]}
                onChange={handleInputOnChange}
              />
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
              <InputText
                id="ig"
                name="entry.2000482615"
                value={inputValue["entry.2000482615"]}
                onChange={handleInputOnChange}
              />
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
              <InputText
                id="tiktok"
                name="entry.1782465680"
                value={inputValue["entry.1782465680"]}
                onChange={handleInputOnChange}
              />
            </div>
            <div>
              <Label htmlFor="teamName" required>
                10. 參賽名稱
              </Label>
              <LabelCaption>
                *顯示於參賽隊伍頁面，個人組請填寫綽號，團體組請填寫隊伍名稱
                <br />
                *內容若涉及不雅、暴力、色情等，主辦單位有權取消其參賽資格
              </LabelCaption>
              <InputText
                id="teamName"
                name="entry.844234350"
                value={inputValue["entry.844234350"]}
                onChange={handleInputOnChange}
              />
            </div>
            <div>
              <Label htmlFor="photo" required>
                11. 參賽證照片上傳
              </Label>
              <LabelCaption>
                *顯示於參賽隊伍頁面，內容若涉及不雅、暴力、色情等，主辦單位有權取消其參賽資格
              </LabelCaption>
              <InputField>
                <input type="file" onChange={handleFileChange} />
              </InputField>
              <div onClick={handleUpload}>upload</div>
            </div>
            <div>
              <Label htmlFor="people" required>
                12. 報名人數
              </Label>
              <LabelCaption>*請填寫阿拉伯數字，若報名個人組請填1</LabelCaption>
              <InputText
                id="people"
                name="entry.953380031"
                value={inputValue["entry.953380031"]}
                onChange={handleInputOnChange}
              />
            </div>
            <div>
              <Label htmlFor="teamMember">13. 團體組組員姓名及Instagram帳號</Label>
              <LabelCaption>
                填寫方式請依照下方格式填寫：
                <br />
                Ex：魅小萱：https://www.instagram.com/miseenscenetw/
              </LabelCaption>
              <InputText
                id="teamMember"
                name="entry.1939934942"
                value={inputValue["entry.1939934942"]}
                onChange={handleInputOnChange}
              />
            </div>
            <div>
              <Label htmlFor="brand" required>
                14. 請問您認識以下哪些髮品品牌？
              </Label>
              <InputField>
                <div className="text-[23px] text-orange-600 font-bold">
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setBrand);
                    }}
                    state={brand}
                    value="Mise-en-scène 魅尚萱"
                  />
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setBrand);
                    }}
                    state={brand}
                    value="Kérastase"
                  />
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setBrand);
                    }}
                    state={brand}
                    value="Moroccanoil"
                  />
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setBrand);
                    }}
                    state={brand}
                    value="Elastine伊絲婷"
                  />
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setBrand);
                    }}
                    state={brand}
                    value="L'Oréal Paris巴黎萊雅"
                  />
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setBrand);
                    }}
                    state={brand}
                    value="AQUAIR阿葵亞"
                  />
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setBrand);
                    }}
                    state={brand}
                    value="樂絲朵-L"
                  />
                  <div className="flex items-center gap-2">
                    <div>
                      <InputCheckBox
                        type="checkbox"
                        name="entry.832590299.other_option_response"
                        id="other-brand"
                        onChange={handleOtherCheckBoxOnChange}
                        checked={inputValue["entry.832590299.other_option_response"] !== ""}
                      />
                    </div>
                    <label className="text-nowrap" htmlFor="other-brand">
                      其他：
                    </label>
                    <input
                      className="w-full text-[23px] text-orange-600 font-bold bg-orange-100 outline-none border-b"
                      type="text"
                      name="entry.832590299.other_option_response"
                      value={inputValue["entry.832590299.other_option_response"]}
                      onChange={handleInputOnChange}
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
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setWhere);
                    }}
                    state={where}
                    value="官方粉絲團"
                  />
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setWhere);
                    }}
                    state={where}
                    value="廣告"
                  />
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setWhere);
                    }}
                    state={where}
                    value="朋友告知"
                  />
                  <div className="flex items-center gap-2">
                    <div>
                      <InputCheckBox
                        type="checkbox"
                        name="entry.1709870411.other_option_response"
                        id="where-other"
                        onChange={handleOtherCheckBoxOnChange}
                        checked={inputValue["entry.1709870411.other_option_response"] !== ""}
                      />
                    </div>
                    <label className="text-nowrap" htmlFor="where-other">
                      其他：
                    </label>
                    <input
                      className="w-full text-[23px] text-orange-600 font-bold bg-orange-100 outline-none border-b"
                      type="text"
                      name="entry.1709870411.other_option_response"
                      value={inputValue["entry.1709870411.other_option_response"]}
                      onChange={handleInputOnChange}
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
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setWhy);
                    }}
                    state={why}
                    value="喜歡跳舞"
                  />
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setWhy);
                    }}
                    state={why}
                    value="之前就有關注魅尚萱"
                  />
                  <CheckBox
                    onChange={(e) => {
                      handleCheckBoxOnChange(e, setWhy);
                    }}
                    state={why}
                    value="本身是aespa的粉絲"
                  />
                  <div className="flex items-center gap-2">
                    <div>
                      <InputCheckBox
                        type="checkbox"
                        name="entry.1958309499.other_option_response"
                        id="why-other"
                        onChange={handleOtherCheckBoxOnChange}
                        checked={inputValue["entry.1958309499.other_option_response"] !== ""}
                      />
                    </div>
                    <label className="text-nowrap" htmlFor="why-other">
                      其他：
                    </label>
                    <input
                      className="w-full text-[23px] text-orange-600 font-bold bg-orange-100 outline-none border-b"
                      type="text"
                      name="entry.1958309499.other_option_response"
                      value={inputValue["entry.1958309499.other_option_response"]}
                      onChange={handleInputOnChange}
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
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="entry.1477264882"
                      id="有"
                      value="有"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="有">有</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="entry.1477264882"
                      id="偶爾"
                      value="偶爾"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="偶爾">偶爾</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="entry.1477264882"
                      id="不護髮"
                      value="不護髮"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="不護髮">不護髮</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <Radio
                        type="radio"
                        name="entry.1477264882"
                        id="hair-other"
                        value={otherCare}
                        onChange={handleInputOnChange}
                      />
                    </div>
                    <label className="text-nowrap" htmlFor="hair-other">
                      其他：
                    </label>
                    <input
                      className="w-full text-[23px] text-orange-600 font-bold bg-orange-100 outline-none border-b"
                      type="text"
                      value={otherCare}
                      onChange={(event) => {
                        if (
                          inputValue["entry.1477264882"] !== "有" &&
                          inputValue["entry.1477264882"] !== "偶爾" &&
                          inputValue["entry.1477264882"] !== "不護髮"
                        ) {
                          handleInputOnChange(event);
                        }
                        setOtherCare(event.target.value);
                      }}
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
              <InputText
                id="care"
                name="entry.2147255090"
                value={inputValue["entry.2147255090"]}
                onChange={handleInputOnChange}
              />
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
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="entry.1695036427"
                      id="agree"
                      value="我同意"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="agree">我同意</label>
                  </div>
                </div>
              </InputField>
            </div>
            <div className="flex justify-between items-center mb-14">
              <Submit
                type="button"
                className="w-[232px] h-[64px] text-white text-[36px] font-bold tracking-widest"
                onClick={fetchData}
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
