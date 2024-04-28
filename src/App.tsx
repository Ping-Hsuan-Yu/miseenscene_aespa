import { useRef } from "react";
import Kv from "./assets/kv.jpg";
import Header from "./page/Header";
import Section2 from "./page/Section2";
import Section3 from "./page/Section3";
import Section4 from "./page/Section4";
import Section5 from "./page/Section5";
import SignUp from "./page/SignUp";

export default function App(props: { signUp?: boolean }) {
  const section1Ref = useRef<HTMLElement | null>(null);
  const section2Ref = useRef<HTMLElement | null>(null);
  const section3Ref = useRef<HTMLElement | null>(null);
  const section4Ref = useRef<HTMLElement | null>(null);
  const section5Ref = useRef<HTMLElement | null>(null);
  return (
    <div className="bg-orange-200 font-NotoSansTc">
      <Header
        ref1={section1Ref}
        ref2={section2Ref}
        ref3={section3Ref}
        ref4={section4Ref}
        ref5={section5Ref}
      />
      <div className="flex justify-center">
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
      </div>
    </div>
  );
}
