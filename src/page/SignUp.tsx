import { useCallback, useEffect, useRef, useState } from "react";
import DatePicker from "react-date-picker";
import styled from "styled-components";
import Paper from "../assets/paper.png";
// import S02 from "../assets/s02.png";
import S03 from "../assets/s03.png";
import S04 from "../assets/s04.png";
import S05 from "../assets/s05.png";
import S06 from "../assets/s06.png";
import S07 from "../assets/s07.png";
import S08 from "../assets/s08.png";
import S09 from "../assets/s09.png";
import S10 from "../assets/s10.png";
import S11 from "../assets/s11.png";
import S12 from "../assets/s12.png";
import S13 from "../assets/s13.png";
import S14 from "../assets/s14.png";
import S15 from "../assets/s15.png";
import CheckBox, { InputCheckBox } from "../components/CheckBox";
import InputField from "../components/InputField";
import Label from "../components/Label";
import LabelCaption from "../components/LabelCaption";
import LabelInputText from "../components/LabelInputText";
import Loading from "../components/Loading";

const PaperBg = styled.div`
  background-image: url(${Paper});
  background-size: contain;
  @media (min-width: 690px) {
    background-size: cover;
  }
`;

const UnderLineCaption = styled.span`
  text-decoration: underline;
  text-decoration-color: rgba(255, 131, 6, 0.2);
`;

const Submit = styled.button`
  background-color: #ff8106;
  padding: 4px 36px;
  border-radius: 8px;
  box-shadow: 2px 2px 1px 0.5px #db4f02;
  &:disabled {
    background-color: #f2a3547e;
    box-shadow: 2px 2px 1px 0.5px #db4e027e;
  }
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

type DateValuePiece = Date | null;
type DateValue = DateValuePiece | [DateValuePiece, DateValuePiece];

const initialInputValue = {
  userName: "", //1. 您的真實姓名
  group: "", //2. 您欲參加的組別
  sex: "", //3. 您的性別
  birthday: "", //4. 您的生日_年
  phone: "", //5. 您的手機號碼
  email: "", //6. 您的電子郵件
  address: "", //7. 您的產品寄送地址（含郵遞區號）
  ig: "", //8. 預計發文的Instagram社群平台連結
  tiktok: "", //9. 預計發文的小紅書/tiktok帳號連結
  teamName: "", //10. 參賽名稱
  people: "", //12. 報名人數
  teamMember: "", //13. 團體組組員姓名及Instagram帳號
  brand: "", //14. 請問您認識以下哪些髮品品牌？
  where: "", //15. 請問您是從哪裡得知這個活動的？
  why: "", //16. 請問您為什麼想參加這個活動？
  hair: "", //17. 您平常有護髮習慣嗎？
  care: "", //18. 承上題，若有您平常使用什麼護髮產品？
  agree: "", //agree
};

export default function SignUp() {
  const [birthday, setBirthday] = useState<DateValue>(new Date());
  const [otherSex, setOtherSex] = useState<string>("");
  const [brand, setBrand] = useState<string[]>([]);
  const [where, setWhere] = useState<string[]>([]);
  const [why, setWhy] = useState<string[]>([]);
  const [otherCare, setOtherCare] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [uploadImgUrl, setUploadImgUrl] = useState<string>("");
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [onSubmit, setOnSubmit] = useState<boolean>(false);
  const [onLoading, setOnLoading] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  const handleInitial = () => {
    setBirthday(null);
    setOtherSex("");
    setBrand([]);
    setWhere([]);
    setWhy([]);
    setOtherCare("");
    setFile(null);
    setUploadImgUrl("");
    setInputValue(initialInputValue);
    setOnSubmit(false);
  };

  useEffect(() => {
    const excludedKeys = ["tiktok", "teamMember"];
    const isValid = Object.values(inputValue).every((value, index) => {
      const key = Object.keys(inputValue)[index];
      if (!excludedKeys.includes(key)) {
        return value !== "";
      } else {
        return true;
      }
    });
    setIsValid(isValid);
  }, [inputValue]);

  const handleSubmit = useCallback(() => {
    setOnSubmit(true);
    const apiLink =
      "https://script.google.com/macros/s/AKfycbwOoEqUD9k7rUY0ekZNC2qkyz7-cxsTdyYW4kc0C6aU6Ygp2M10Wnvjq9xQJE_Q08Q8ag/exec";

    if (isValid && file !== null) {
      const timeStamp = new Date().toLocaleString();
      const fileTimeStamp = timeStamp.replace(/[\/: ]/g, "_");
      const obj = {
        ...inputValue,
        brand: `${inputValue.brand}${getOtherValue("brand-other")}`,
        where: `${inputValue.where}${getOtherValue("where-other")}`,
        why: `${inputValue.why}${getOtherValue("why-other")}`,
        fileName: `${fileTimeStamp}_${file.name}`,
        mimeType: file.type,
        timeStamp: timeStamp,
      };
      const bytes = uploadImgUrl.split(",")[1];
      const para = new URLSearchParams(obj);

      fetch(`${apiLink}?${para}`, { method: "POST", body: JSON.stringify(bytes), mode: "no-cors" })
        .then((response) => {
          alert("報名成功");
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .then((data) => {
          if (data.status === "success") {
            console.log("Data added successfully:", data.message);
          } else {
            console.error("Error adding data:", data.message);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setOnLoading(false);
          handleInitial();
        });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOnLoading(false);
    }
  }, [inputValue, isValid, file, uploadImgUrl]);

  const getOtherValue = (name: string) => {
    const checkbox = document.getElementById(name) as HTMLInputElement;
    if (checkbox.checked) {
      const textInput = document.querySelector(
        `input[type=text][name=${name}]`
      ) as HTMLInputElement;
      return `,${textInput.value}`;
    } else {
      return "";
    }
  };

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const img = e.target.files[0];
      setFile(img);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setUploadImgUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(img);
    }
  };

  const handleOtherCheckBoxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const inputText = document.getElementById(`${name}`) as HTMLInputElement;
    if (value !== "") {
      inputText.checked = true;
    } else if (value === "") {
      inputText.checked = false;
    }
  };

  useEffect(() => {
    if (birthday) {
      const birthdayString = birthday.toLocaleString().split(" ")[0];
      setInputValue((prev) => ({
        ...prev,
        birthday: birthdayString,
      }));
    }
  }, [birthday]);

  useEffect(() => {
    setInputValue((prev) => ({
      ...prev,
      brand: brand.join(","),
    }));
  }, [brand]);

  useEffect(() => {
    setInputValue((prev) => ({
      ...prev,
      where: where.join(","),
    }));
  }, [where]);

  useEffect(() => {
    setInputValue((prev) => ({
      ...prev,
      why: why.join(","),
    }));
  }, [why]);

  useEffect(() => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [ref.current]);

  return (
    <>
      <section className="w-full px-2 pt-6 md:px-20 md:pt-24 ref" ref={ref}>
        <div className="relative w-full">
          {/* <img
            src={S02}
            className="hidden md:block absolute w-[42.1%] max-w-[472px] top-[-80px] right-[-5%]"
          /> */}
          <img
            src={S03}
            className="hidden md:block absolute w-[7.67%] max-w-[86px] left-[-5%]"
            style={{ top: "clamp(0px,28.1vw,360px)" }}
          />
          <img
            src={S04}
            className="hidden md:block absolute w-[13.75%] max-w-[154px] right-[-5%]"
            style={{ top: "clamp(23px,23.4vw,300px)" }}
          />
          <img
            src={S05}
            className="hidden md:block absolute w-[15.9%] max-w-[178px] left-[-8%]"
            style={{ top: "clamp(0px,54vw,700px)" }}
          />
          <img
            src={S06}
            className="hidden md:block absolute w-[14.4%] max-w-[161px] right-[-4%]"
            style={{ top: "clamp(0px,109vw,1400px)" }}
          />
          <img
            src={S07}
            className="hidden md:block absolute w-[8%] max-w-[90px] right-[-4%]"
            style={{ top: "clamp(0px,123vw,1580px)" }}
          />
          <img
            src={S08}
            className="hidden md:block absolute w-[11.25%] max-w-[126px] left-[-12%]"
            style={{ top: "clamp(0px,146vw,1880px)" }}
          />
          <img
            src={S09}
            className="hidden md:block absolute w-[7.4%] max-w-[83px] left-[-10%]"
            style={{ top: "clamp(0px,168vw,2150px)" }}
          />
          <img
            src={S10}
            className="hidden md:block absolute w-[19.8%] max-w-[222px] right-[-8%]"
            style={{ top: "clamp(0px,178vw,2280px)" }}
          />
          <img
            src={S11}
            className="hidden md:block absolute w-[22.4%] max-w-[251px] right-[-8%]"
            style={{ top: "clamp(0px,210vw,2700px)" }}
          />
          <img
            src={S12}
            className="hidden md:block absolute w-[15.7%] max-w-[171px] right-[-8%]"
            style={{ top: "clamp(0px,265vw,3400px)" }}
          />
          <img
            src={S13}
            className="hidden md:block absolute w-[14.6%] max-w-[164px] left-[-15%]"
            style={{ top: "clamp(0px,289vw,3700px)" }}
          />
          <img
            src={S14}
            className="hidden md:block absolute w-[7.58%] max-w-[85px] left-[-10%]"
            style={{ top: "clamp(0px,343vw,4400px)" }}
          />
          <img
            src={S15}
            className="hidden md:block absolute w-[9.46%] max-w-[106px] right-[-8%]"
            style={{ top: "clamp(0px,328vw,4200px)" }}
          />
        </div>
        <PaperBg className="max-w-screen-xl ps-6 pe-4 pt-8 md:ps-16 md:pe-14 md:pt-16 lg:ps-20 xl:pe-16 ">
          <form className="flex flex-col gap-7">
            <div className="text-red text-22 font-bold">* 表示必填問題</div>
            <LabelInputText
              label="1. 您的真實姓名"
              name="userName"
              required
              value={inputValue.userName}
              onChange={handleInputOnChange}
              autoComplete="name"
            >
              <LabelCaption>*若有資料不完整/有誤/重複報名等情事，將自動視同放棄</LabelCaption>
              <div className="text-brown-950 text-20 font-bold tracking-wide text-pretty">
                *參加團體組僅需一位負責人(隊長)代表填寫報名即可
              </div>
              {onSubmit && inputValue.userName === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
            </LabelInputText>
            <div className="flex flex-col">
              <Label htmlFor="group" required>
                2. 您欲參加的組別
              </Label>
              <LabelCaption>*為確保參加者之權益，每人於各組別限報名及領取獎項1次</LabelCaption>
              {onSubmit && inputValue.group === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
              <InputField>
                <div className="text-23 text-orange-600 font-bold">
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="group"
                      id="person"
                      value="個人組"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="person">個人組</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="group"
                      id="team"
                      value="團體組"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="team">團體組</label>
                  </div>
                </div>
              </InputField>
            </div>
            <div className="flex flex-col">
              <Label htmlFor="sex" required>
                3. 您的性別
              </Label>
              {onSubmit && inputValue.sex === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
              <InputField>
                <div className="text-23 text-orange-600 font-bold">
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="sex"
                      id="female"
                      value="女性"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="female">女性</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="sex"
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
                        name="sex"
                        id="other-sex"
                        value={otherSex}
                        onChange={handleInputOnChange}
                      />
                    </div>
                    <label className="text-nowrap" htmlFor="other-sex">
                      其他：
                    </label>
                    <input
                      className="w-full text-23 text-orange-600 font-bold bg-orange-100 outline-none border-b"
                      type="text"
                      name="sex"
                      value={otherSex}
                      onChange={(event) => {
                        if (inputValue.sex !== "女性" && inputValue.sex !== "男性") {
                          handleInputOnChange(event);
                        }
                        setOtherSex(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </InputField>
            </div>
            <div className="flex flex-col">
              <Label htmlFor="birthday" required>
                4. 您的生日
              </Label>
              <InputField>
                <DatePicker
                  value={birthday}
                  onChange={setBirthday}
                  maxDate={new Date()}
                  calendarIcon={null}
                  clearIcon={null}
                  required
                  className="bg-orange-100 border-orange-600 border-b text-orange-600"
                />
              </InputField>
            </div>
            <LabelInputText
              label="5. 您的手機號碼"
              name="phone"
              required
              value={inputValue.phone}
              onChange={handleInputOnChange}
              autoComplete="tel"
              inputmode="tel"
            >
              {onSubmit && inputValue.phone === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
            </LabelInputText>
            <LabelInputText
              label="6. 您的電子郵件"
              name="email"
              required
              value={inputValue.email}
              onChange={handleInputOnChange}
              autoComplete="email"
              inputmode="email"
            >
              <LabelCaption>
                *作為後續聯繫使用，若有資料不完整/有誤導致無法聯繫的情況，將自動視同放棄
              </LabelCaption>
              {onSubmit && inputValue.email === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
            </LabelInputText>
            <LabelInputText
              label="7. 您的產品寄送地址(含郵遞區號)"
              name="address"
              required
              value={inputValue.address}
              onChange={handleInputOnChange}
            >
              <LabelCaption>
                Ex:110 台北市信義區信義路五段7號
                <br />
                *團體組一人代表填寫即可，個人組提供拍攝產品完美修護護髮精油1瓶
                <br />
                團體組提供拍攝產品完美修護、滋養、造型、水潤護髮精油各1瓶
                <br />
                <UnderLineCaption className="text-brown-950">
                  拍攝時所有產品皆須入鏡但以#魅尚萱小橘瓶 為主呈現
                </UnderLineCaption>
              </LabelCaption>
              {onSubmit && inputValue.address === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
            </LabelInputText>

            <LabelInputText
              label="8. 預計發文的Instagram社群平台連結"
              name="ig"
              required
              value={inputValue.ig}
              onChange={handleInputOnChange}
            >
              <LabelCaption>
                EX:instagram.com/miseenscenetw/
                <br />
                *會依此留存的帳號作為後續評分追蹤依據，若欲更改需私訊官方社群告知
                <br />
                *團體組請填一名代表人帳號為發布影片者，最終認列評分以此帳號發布之影片讚數&影片內容加權分數計算為準
              </LabelCaption>
              {onSubmit && inputValue.ig === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
            </LabelInputText>
            <LabelInputText
              label="9. 預計發文的小紅書 / tiktok帳號連結"
              name="tiktok"
              value={inputValue.tiktok}
              onChange={handleInputOnChange}
            >
              <LabelCaption>
                EX:tiktok.com/@miseenscenetw
                <br />
                *會依此留存的帳號作為後續評分追蹤依據，若欲更改需私訊官方社群告知
                <br />
                *團體組請填一名代表人帳號為發布影片者，最終認列評分以此帳號發布之影片讚數&影片內容加權分數計算為準
              </LabelCaption>
            </LabelInputText>
            <LabelInputText
              label="10. 參賽名稱"
              name="teamName"
              required
              value={inputValue.teamName}
              onChange={handleInputOnChange}
            >
              <LabelCaption>
                *顯示於參賽隊伍頁面，個人組請填寫綽號，團體組請填寫隊伍名稱
                <br />
                *內容若涉及不雅、暴力、色情等，主辦單位有權取消其參賽資格
              </LabelCaption>
              {onSubmit && inputValue.teamName === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
            </LabelInputText>

            <div className="flex flex-col">
              <Label htmlFor="photo" required>
                11. 參賽證照片上傳
              </Label>
              <LabelCaption>
                *顯示於參賽隊伍頁面，內容若涉及不雅、暴力、色情等，主辦單位有權取消其參賽資格
              </LabelCaption>
              {onSubmit && file === null && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
              <InputField>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full text-23px text-orange-600 font-bold bg-orange-100 outline-none"
                />
                <img className="mt-1 max-w-[150px]" src={uploadImgUrl} alt="" />
              </InputField>
            </div>
            <LabelInputText
              label="12. 報名人數"
              name="people"
              required
              value={inputValue.people}
              onChange={handleInputOnChange}
              inputmode="numeric"
            >
              <LabelCaption>*請填寫阿拉伯數字，若報名個人組請填1</LabelCaption>
              {onSubmit && inputValue.people === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
            </LabelInputText>
            <LabelInputText
              label="13. 團體組組員姓名及Instagram帳號"
              name="teamMember"
              value={inputValue.teamMember}
              onChange={handleInputOnChange}
            >
              <LabelCaption>
                填寫方式請依照下方格式填寫：
                <br />
                Ex:魅小萱:instagram.com/miseenscenetw/
              </LabelCaption>
            </LabelInputText>

            <div className="flex flex-col">
              <Label htmlFor="brand" required>
                14. 請問您認識以下哪些髮品品牌？
              </Label>
              {onSubmit && inputValue.brand === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
              <InputField>
                <div className="text-23 text-orange-600 font-bold">
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
                      <InputCheckBox type="checkbox" name="brand-other" id="brand-other" />
                    </div>
                    <label className="text-nowrap" htmlFor="brand-other">
                      其他：
                    </label>
                    <input
                      className="w-full text-23 text-orange-600 font-bold bg-orange-100 outline-none border-b"
                      type="text"
                      name="brand-other"
                      onChange={handleOtherCheckBoxOnChange}
                    />
                  </div>
                </div>
              </InputField>
            </div>
            <div className="flex flex-col">
              <Label htmlFor="where" required>
                15. 請問您是從哪裡得知這個活動的？
              </Label>
              {onSubmit && inputValue.where === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
              <InputField>
                <div className="text-23 text-orange-600 font-bold">
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
                      <InputCheckBox type="checkbox" name="where-other" id="where-other" />
                    </div>
                    <label className="text-nowrap" htmlFor="where-other">
                      其他：
                    </label>
                    <input
                      className="w-full text-23 text-orange-600 font-bold bg-orange-100 outline-none border-b"
                      type="text"
                      name="where-other"
                      onChange={handleOtherCheckBoxOnChange}
                    />
                  </div>
                </div>
              </InputField>
            </div>
            <div className="flex flex-col">
              <Label htmlFor="why" required>
                16. 請問您為什麼想參加這個活動？
              </Label>
              {onSubmit && inputValue.why === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
              <InputField>
                <div className="text-23 text-orange-600 font-bold">
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
                    value="本身是新代言人的粉絲"
                  />
                  <div className="flex items-center gap-2">
                    <div>
                      <InputCheckBox type="checkbox" name="why-other" id="why-other" />
                    </div>
                    <label className="text-nowrap" htmlFor="why-other">
                      其他：
                    </label>
                    <input
                      className="w-full text-23 text-orange-600 font-bold bg-orange-100 outline-none border-b"
                      type="text"
                      name="why-other"
                      onChange={handleOtherCheckBoxOnChange}
                    />
                  </div>
                </div>
              </InputField>
            </div>
            <div className="flex flex-col">
              <Label htmlFor="hair" required>
                17. 您平常有護髮習慣嗎？
              </Label>
              {onSubmit && inputValue.hair === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
              <InputField>
                <div className="text-23 text-orange-600 font-bold">
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="hair"
                      id="有"
                      value="有"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="有">有</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="hair"
                      id="偶爾"
                      value="偶爾"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="偶爾">偶爾</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="hair"
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
                        name="hair"
                        id="hair-other"
                        value={otherCare}
                        onChange={handleInputOnChange}
                      />
                    </div>
                    <label className="text-nowrap" htmlFor="hair-other">
                      其他：
                    </label>
                    <input
                      className="w-full text-23 text-orange-600 font-bold bg-orange-100 outline-none border-b"
                      type="text"
                      name="hair"
                      value={otherCare}
                      onChange={(event) => {
                        if (
                          inputValue.hair !== "有" &&
                          inputValue.hair !== "偶爾" &&
                          inputValue.hair !== "不護髮"
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
            <LabelInputText
              label="18. 承上題，若有您平常使用什麼護髮產品？"
              name="care"
              required
              value={inputValue.care}
              onChange={handleInputOnChange}
            >
              <LabelCaption>*若不護髮則填無</LabelCaption>
              {onSubmit && inputValue.care === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
            </LabelInputText>
            <div>
              <Label htmlFor="" required>
                【注意事項】
              </Label>
              <ol className="ps-5 mt-3 list-decimal text-15 font-bold text-brown-950 flex flex-col gap-1">
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
                <span className="">
                  主辦單位魅尚萱保有最終修改、變更、活動解釋及取消本活動之權利，若有相關異動將會公告於品牌官方Facebook/Instagram，恕不另行通知。
                </span>
              </ol>
              {onSubmit && inputValue.agree === "" && (
                <div className="text-red text-20 font-bold invalid mb-[-12px]">請填寫必填問題</div>
              )}
              <InputField>
                <div className="text-23 text-orange-600 font-bold">
                  <div className="flex items-center gap-2">
                    <Radio
                      type="radio"
                      name="agree"
                      id="agree"
                      value="我同意"
                      onChange={handleInputOnChange}
                    />
                    <label htmlFor="agree">我同意</label>
                  </div>
                </div>
              </InputField>
            </div>
            <div className="flex justify-between items-center mb-8">
              <div className="text-center">
                <Submit
                  type="button"
                  // disabled={(onSubmit && !isValid) || onLoading}
                  className=" text-white text-36 font-bold tracking-widest"
                  onClick={() => {
                    setOnLoading(true);
                    handleSubmit();
                  }}
                  disabled
                >
                  報名已截止
                </Submit>
                {onSubmit && !isValid && (
                  <div className="text-red text-20 font-bold invalid mb-[-12px]">
                    請填寫必填問題
                  </div>
                )}
                {onLoading && <Loading />}
              </div>
              <div
                onClick={handleInitial}
                className="text-orange-600 text-29 tracking-wider font-bold cursor-pointer"
              >
                清除表單
              </div>
            </div>
          </form>
        </PaperBg>
      </section>
    </>
  );
}
