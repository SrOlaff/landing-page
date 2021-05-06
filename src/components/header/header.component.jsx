import React from "react";
import "./header.styles.scss";
import Navigation from "../navigation/navigation.component";
import useReactSimpleMatchMedia from "react-simple-matchmedia";
import Dropdown from "../dropdown/dropdown.component";
const Header = () => {
  const matched = useReactSimpleMatchMedia(
    "(min-width: 0) and (max-width: 1279px)"
  );
  return (
    <div className="header" id="header">
      <div className="title-text">
        <p children="</>" className="codigo"></p>
        <h1 className="nome"> Pedro Olavo</h1>
      </div>
      {matched ? <Dropdown /> : <Navigation />}
    </div>
  );
};

export default Header;
