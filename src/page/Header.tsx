import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import IgLogo from "../assets/instagram-white-icon.svg";
import Logo from "../assets/logo.png";
import SignUp from "../assets/signup.png";
import MenuIcon from "../assets/menu.png";
import { useEffect, useState } from "react";

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
  signUp?: boolean
}) {
  const [isScrolled, setScrolled] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkOnClick = (ref: React.MutableRefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      setTimeout(() => {
        if (ref.current) {
          ref.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 300);
    }
  };

  const handleMenuOnclick = () => {
    setMenuShow((prev) => !prev);
  };

  return (
    <>
      <header
        className={`${
          isScrolled ? "xl:p-0" : "xl:py-5"
        } bg-orange-600 flex sticky top-0 z-20 transition-all`}
      >
        <div className="flex justify-between items-center w-full max-w-screen-xl m-auto">
          <Link
            to="/miseenscene_aespa"
            className="cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img className="object-contain w-full max-w-[400px]" src={Logo} />
          </Link>
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
            <Link to="/miseenscene_aespa/sign-up" className="cursor-pointer">
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
          <div className="max-w-8 lg:hidden m-4 md:m-6" onClick={handleMenuOnclick}>
            <img src={MenuIcon} className="object-contain w-full" alt="" />
          </div>
        </div>
      </header>
      {!menuShow && !props.signUp && <div className={`lg:hidden fixed z-20 right-4 bottom-8`}>
        <Link to="/miseenscene_aespa/sign-up" className="cursor-pointer">
          <img className="object-contain min-w-28" src={SignUp} alt="我要報名" />
        </Link>
      </div>}
      <div
        className={`lg:hidden fixed z-20 transition-all ${menuShow ? "right-0" : "right-[-170px]"}`}
      >
        <div className="bg-orange-600 p-4 pb-6">
          <nav
            className="text-white text-xl tracking-widest font-bold text-nowrap flex flex-col items-center gap-3"
            onClick={() => {
              setMenuShow(false);
            }}
          >
            <Link
              to="/miseenscene_aespa"
              className="cursor-pointer pb-1 border-orange-100 border-b-2"
              onClick={() => {
                handleLinkOnClick(props.ref1);
              }}
            >
              活動簡介
            </Link>
            <Link
              to="/miseenscene_aespa"
              className="cursor-pointer pb-1 border-orange-100 border-b-2"
              onClick={() => {
                handleLinkOnClick(props.ref2);
              }}
            >
              品牌介紹
            </Link>
            <Link
              to="/miseenscene_aespa"
              className="cursor-pointer pb-1 border-orange-100 border-b-2"
              onClick={() => {
                handleLinkOnClick(props.ref3);
              }}
            >
              比賽辦法
            </Link>
            <Link
              to="/miseenscene_aespa"
              className="cursor-pointer pb-1 border-orange-100 border-b-2"
              onClick={() => {
                handleLinkOnClick(props.ref4);
              }}
            >
              參賽隊伍
            </Link>
            <Link
              to="/miseenscene_aespa"
              className="cursor-pointer pb-1 border-orange-100 border-b-2"
              onClick={() => {
                handleLinkOnClick(props.ref5);
              }}
            >
              官方社群
            </Link>
            <div className="cursor-pointer">
              <Link to="https://www.instagram.com/miseenscenetw/" target="_blank">
                <img className="object-contain w-[30px]" src={IgLogo} />
              </Link>
            </div>
            <Link to="/miseenscene_aespa/sign-up" className="cursor-pointer">
              <img className="object-contain w-[100px] min-w-28" src={SignUp} alt="我要報名" />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
