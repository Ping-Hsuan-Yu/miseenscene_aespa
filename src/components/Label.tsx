import { ReactNode } from "react";
import styled from "styled-components";

const CustomLabel = styled.label`
  &.required:after {
    content: "*";
    color: #e60400;
  }
`;

export default function Label(props: { children?: ReactNode; required?: boolean; htmlFor: string }) {
  const { children, required, htmlFor } = props;
  return (
    <CustomLabel
      className={`${required ? "required" : ""} text-brown-950 text-[29px] font-bold tracking-wide`}
      htmlFor={htmlFor}
    >
      {children}
    </CustomLabel>
  );
}
