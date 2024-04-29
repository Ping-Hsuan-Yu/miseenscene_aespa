import { useRef } from "react";
import styled from "styled-components";
import FooterBg from "./assets/signup_footer.png";
import Kv from "./assets/kv.jpg";
import Header from "./page/Header";
import Section2 from "./page/Section2";
import Section3 from "./page/Section3";
import Section4 from "./page/Section4";
import Section5 from "./page/Section5";
import SignUp from "./page/SignUp";
import S18 from "./assets/s18.png";

const Footer = styled.div`
  background-image: url(${FooterBg});
  background-size: contain;
  height: clamp(48px, 12vw, 240px);
  width: 100%;
`;

export default function App(props: { signUp?: boolean }) {
  const section1Ref = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const section3Ref = useRef<HTMLElement | null>(null);
  const section4Ref = useRef<HTMLElement | null>(null);
  const section5Ref = useRef<HTMLElement | null>(null);
  return (
    <div className={`${props.signUp ? "orange-grid" : "bg-orange-200"} font-NotoSansTc`}>
      <Header
        ref1={section1Ref}
        ref2={section2Ref}
        ref3={section3Ref}
        ref4={section4Ref}
        ref5={section5Ref}
      />
      <div className="flex flex-col items-center">
        <main className="max-w-screen-xl flex flex-col">
          <section className="flex justify-center">
            <img className="object-contain w-full" src={Kv} />
          </section>
          {props.signUp ? (
            <SignUp />
          ) : (
            <>
              <Section2 />
              <Section3 ref1={section1Ref} ref2={section2Ref} />
              <Section4 ref3={section3Ref} />
              <Section5 ref4={section4Ref} ref5={section5Ref} />
            </>
          )}
        </main>
        {props.signUp && (
          <>
            <div className="relative w-full">
              <img
                src={S18}
                className="hidden md:block absolute w-[38%] max-w-[454px] top-[-70px] left-[40vw]"
                // style={{ top: "clamp(0px,28.1vw,360px)" }}
              />
            </div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}
