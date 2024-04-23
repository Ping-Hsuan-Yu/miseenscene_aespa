import { Link } from "react-router-dom";
import styled from "styled-components";
import IgLogo from "../assets/instagram-white-icon.svg";
import Logo from "../assets/logo.png";

const Nav = styled.nav`
  & a:not(:last-of-type)::after {
    content: "｜";
  }
`;


export default function Header() {
  return (
    <header className="bg-orange-600 flex justify-center h-[140px]">
      <div className="flex justify-center max-w-screen-xl text-nowrap">
        <img className="object-contain max-w-[400px] max-h-[124px]" src={Logo} />
        <Nav className="flex items-center justify-center text-white text-xl tracking-widest font-bold ps-6">
          <Link to="/" className="cursor-pointer">活動簡介</Link>
          <Link to="/" className="cursor-pointer">品牌介紹</Link>
          <Link to="/" className="cursor-pointer">比賽辦法</Link>
          <Link to="/" className="cursor-pointer">參賽隊伍</Link>
          <Link to="/" className="cursor-pointer">比賽辦法</Link>
          <Link to="/sign-up" className="cursor-pointer">我要報名</Link>
          <div className="cursor-pointer ps-6">
            <a>
              <img width="45px" height="45px" src={IgLogo} />
            </a>
          </div>
        </Nav>
      </div>
    </header>
  );
}
