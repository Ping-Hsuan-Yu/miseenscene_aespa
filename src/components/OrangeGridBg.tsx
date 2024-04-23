import { ReactNode } from "react";
import bg from "../assets/img04-1.png";
import styled from "styled-components";

const BackgroundImg = styled.div`
  background-image: url(${bg});
`;

export default function OrangeGridBg(props: { children?: ReactNode; className?: string }) {
  return <BackgroundImg className={props.className}>{props.children}</BackgroundImg>;
}
