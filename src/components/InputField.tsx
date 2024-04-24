import { ReactNode } from "react";

export default function InputField(props: { children: ReactNode }) {
  return <div className="mt-4 w-full bg-orange-100 rounded-2xl p-4 py-5">{props.children}</div>;
}
