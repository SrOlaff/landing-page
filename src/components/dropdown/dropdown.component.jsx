import React from "react";
import "./dropdown.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

let closeNav = () => {
  document.getElementById("mySidenav").style.right = "-100%";
};
let openNav = () => {
  document.getElementById("mySidenav").style.right = "0";
};
let scrollToDivBurger = (e) => {
  e.preventDefault();
  let elementId = e.target.name;
  let element = document.getElementById(elementId);
  let offset = element.offsetTop;
  let headerHeight = document.getElementById("header").getBoundingClientRect()
    .height;

  let top = offset - headerHeight;

  window.scroll({ top: top, behavior: "smooth" });
  closeNav();
};

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div id="mySidenav" className="sidenav">
        <FontAwesomeIcon
          icon={faTimes}
          className="closeBtn"
          onClick={closeNav}
          size="2x"
        />
        <div className="options">
          <div className="div-links">
            <a href="#home" name="home" onClick={scrollToDivBurger}>
              Home
            </a>
          </div>
          <div className="div-links">
            <a href="#about" name="about" onClick={scrollToDivBurger}>
              About
            </a>
          </div>
          <div className="div-links">
            <a href="#contact" name="contact" onClick={scrollToDivBurger}>
              Contact
            </a>
          </div>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        size="2x"
        className="openBtn"
        onClick={openNav}
      />
    </div>
  );
};

export default Dropdown;
