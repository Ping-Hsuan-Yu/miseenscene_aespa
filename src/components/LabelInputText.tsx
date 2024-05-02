import { ReactNode } from "react";
import InputText from "./InputText";
import Label from "./Label";

export default function LabelInputText(props: {
  label: string;
  name: string;
  required?: boolean;
  children?: ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { label, name, required, children, value, onChange } = props;
  return (
    <div className="flex flex-col">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      {children}
      <InputText id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
}
