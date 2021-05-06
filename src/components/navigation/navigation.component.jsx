import React from "react";
import "./navigation.styles.scss";
// Função pra fazero scroll até div, considerando a altura do header
let scrollToDiv = (e) => {
  let elementId = e.target.name;
  let element = document.getElementById(elementId);
  let offset = element.offsetTop;
  let headerHeight = document.getElementById("header").getBoundingClientRect()
    .height;

  let top = offset - headerHeight;
  console.log(top);
  window.scroll({ top: top, behavior: "smooth" });
};
// Tirando e colocando a classe "Marked"
let markingLinks = (e) => {
  e.preventDefault();
  let contact = document.getElementsByName("contact")[0];
  let home = document.getElementsByName("home")[0];
  let about = document.getElementsByName("about")[0];
  let selectedElement = document.getElementsByName(e.target.name)[0];
  scrollToDiv(e);
  let elementsArray = [contact, home, about];
  elementsArray.map((element) => {
    return element.classList.remove("marked");
  });
  if (selectedElement)
    document.getElementsByName(e.target.name)[0].classList.add("marked");
};

const Navigation = () => {
  return (
    <ul className="menu">
      <li className="marked" name="home">
        <a href="#home" name="home" onClick={markingLinks} className="link">
          Home
        </a>
      </li>
      <li name="about">
        <a href="#about" name="about" className="link" onClick={markingLinks}>
          About
        </a>
      </li>
      <li name="contact">
        <a
          href="#contact"
          name="contact"
          onClick={markingLinks}
          className="link"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
