import React from "react";
import "./home.styles.scss";
import { ReactComponent as HackerMindset } from "../../assets/ilustrations/undraw_hacker_mindset_gjwq.svg";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home-div">
      <div className="hacker-div">
        <HackerMindset className="hacker-mindset" />
      </div>
      <div className="typewriter">
        <Typewriter
          options={{
            cursor: "_",
          }}
          onInit={(typewriter) => {
            typewriter.typeString("Hello! I am a web developer").start();
          }}
        />
      </div>
    </div>
  );
};

export default Home;
