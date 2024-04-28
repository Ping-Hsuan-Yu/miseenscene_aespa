import { Link } from "react-router-dom";
import styled from "styled-components";
import IgLogo from "../assets/instagram-white-icon.svg";
import Logo from "../assets/logo.png";
import SignUp from "../assets/signup.png";
import MenuIcon from "../assets/menu.png";
// import { useEffect, useState } from "react";

const Nav = styled.nav`
  & a:not(:last-of-type)::after {
    content: "｜";
  }
`;

export default function Header(props: {
  ref1: React.MutableRefObject<HTMLElement | null>;
  ref2: React.MutableRefObject<HTMLElement | null>;
  ref3: React.MutableRefObject<HTMLElement | null>;
  ref4: React.MutableRefObject<HTMLElement | null>;
  ref5: React.MutableRefObject<HTMLElement | null>;
}) {
  // const [isScrolled, setScrolled] = useState(false);

  // const handleScroll = () => {
  //   if (document.documentElement.scrollTop > 250) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleLinkOnClick = (ref: React.MutableRefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className={`bg-orange-600 flex sticky top-0 z-20 xl:p-5 xl:ps-0`}>
      <div className="flex justify-between items-center w-full max-w-screen-xl m-auto">
        <div>
          <img className="object-contain w-full max-w-[400px]" src={Logo} />
        </div>
        <Nav className="hidden lg:flex items-center justify-center text-white text-22 tracking-widest font-bold text-nowrap">
          <Link
            to="/miseenscene_aespa"
            className="cursor-pointer"
            onClick={() => {
              handleLinkOnClick(props.ref1);
            }}
          >
            活動簡介
          </Link>
          <Link
            to="/miseenscene_aespa"
            className="cursor-pointer"
            onClick={() => {
              handleLinkOnClick(props.ref2);
            }}
          >
            品牌介紹
          </Link>
          <Link
            to="/miseenscene_aespa"
            className="cursor-pointer"
            onClick={() => {
              handleLinkOnClick(props.ref3);
            }}
          >
            比賽辦法
          </Link>
          <Link
            to="/miseenscene_aespa"
            className="cursor-pointer"
            onClick={() => {
              handleLinkOnClick(props.ref4);
            }}
          >
            參賽隊伍
          </Link>
          <Link
            to="/miseenscene_aespa"
            className="cursor-pointer"
            onClick={() => {
              handleLinkOnClick(props.ref5);
            }}
          >
            官方社群
          </Link>
          <Link
            to="/miseenscene_aespa/sign-up"
            className="cursor-pointer"
            onClick={() => {
              scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              className="object-contain w-full max-w-[138px] min-w-28"
              src={SignUp}
              alt="我要報名"
            />
          </Link>
          <div className="cursor-pointer mx-6">
            <Link to="https://www.instagram.com/miseenscenetw/" target="_blank">
              <img className="object-contain w-full max-w-[45px] min-w-7" src={IgLogo} />
            </Link>
          </div>
        </Nav>
        <div className="max-w-8 lg:hidden m-4 md:m-6">
          <img src={MenuIcon} className="object-contain w-full" alt="" />
        </div>
      </div>
    </header>
  );
}
