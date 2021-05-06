import "./about-me.styles.scss";
import { ReactComponent as CodeReview } from "../../assets/ilustrations/undraw_Code_review_re_woeb.svg";

const AboutMe = () => {
  return (
    <div className="about-component">
      <div className="aboutme box">
        <h1>About Me</h1>
        <p>
          Hi! My name is Pedro Olavo. I’m a big enthusiastic of technology and
          inovation.
        </p>
        <p>
          My favorite code language is JavaScript and i love the community and
          the frameworks that surround the language, currently i’m in love with
          one in specific, ReactJS.
        </p>
        <p>
          I work making websites, you can find my on VintePila and contact me on
          my E-Mail or Telegram. :)
        </p>
      </div>

      <CodeReview className="code-review" />
    </div>
  );
};

export default AboutMe;
