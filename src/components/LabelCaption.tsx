import { ReactNode } from "react";

export default function LabelCaption(props: { children?: ReactNode }) {
  return (
    <div className="text-orange-600 text-[20px] font-bold tracking-wide">{props.children}</div>
  );
}
