import InputField from "./InputField";

export default function InputText(props: {
  id: string;
  name: string;
  value: string;
  autoComplete?: string;
  inputmode?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { id, name, value, autoComplete, onChange, inputmode } = props;
  return (
    <InputField>
      <input
        id={id}
        className="w-full text-23 text-orange-600 font-bold bg-orange-100 outline-none border-b"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete ?? "off"}
        inputMode={inputmode}
      />
    </InputField>
  );
}
