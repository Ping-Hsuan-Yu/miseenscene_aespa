import InputField from "./InputField";

export default function InputText(props: {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { id, name, value, onChange } = props;
  return (
    <InputField>
      <input
        id={id}
        className="w-full text-[23px] text-orange-600 font-bold bg-orange-100 outline-none border-b py-1 px-2"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </InputField>
  );
}
