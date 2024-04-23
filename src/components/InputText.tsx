import InputField from "./InputField";

export default function InputText() {
  return (
    <InputField>
      <input
        className="w-full text-[23px] text-orange-600 font-bold bg-orange-100 outline-none border-b pb-2"
        type="text"
      />
    </InputField>
  );
}
