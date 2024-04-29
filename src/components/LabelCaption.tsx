import { ReactNode } from "react";

export default function LabelCaption(props: { children?: ReactNode }) {
  return (
    <div
      className="text-orange-600 text-20 font-bold tracking-wide text-pretty"
    >
      {props.children}
    </div>
  );
}
