import Kv from "./assets/kv.jpg";
import Header from "./page/Header";
import Section2 from "./page/Section2";
import Section3 from "./page/Section3";
import Section4 from "./page/Section4";
import Section5 from "./page/Section5";
import SignUp from "./page/SignUp";

export default function App(props: { signUp?: boolean }) {
  return (
    <div className="bg-orange-200 font-NotoSansTc">
      <Header />
      <section className="flex justify-center">
        <img className="object-contain w-full max-w-screen-xl max-h-[991px]" src={Kv} />
      </section>
      {props.signUp ? (
        <SignUp />
      ) : (
        <>
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </>
      )}
    </div>
  );
}
