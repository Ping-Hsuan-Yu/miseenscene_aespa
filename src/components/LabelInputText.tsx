import { ReactNode } from "react";
import InputText from "./InputText";
import Label from "./Label";

export default function LabelInputText(props: {
  label: string;
  name: string;
  required?: boolean;
  children?: ReactNode;
  value: string;
  autoComplete?: string;
  inputmode?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { label, name, required, children, value, onChange, autoComplete, inputmode } = props;
  return (
    <div className="flex flex-col">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      {children}
      <InputText
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        inputmode={inputmode}
      />
    </div>
  );
}
