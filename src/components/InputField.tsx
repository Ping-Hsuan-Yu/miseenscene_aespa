import { ReactNode } from "react";

export default function InputField(props: { children: ReactNode }) {
  return <div className="mt-4 w-full bg-orange-100 rounded-2xl pt-5 p-4">{props.children}</div>;
}
