import { ReactNode } from "react";

export default function InputField(props: { children: ReactNode }) {
  return <div className="bg-orange-100 rounded-lg mt-3 p-2 md:p-3">{props.children}</div>;
}
