import { React } from "react";
// CUSTOM COMPONENTS
import UserCard from "../../components/userCard/UserCard";

//STYLE
import "./style/header.css";

const Header = () => {
  return (
    <div classNanme="header-container">
      <div className="header-mobile-container">
        <UserCard />
      </div>
      <div className="header-pc-container">test</div>
    </div>
  );
};

export default Header;
