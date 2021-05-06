import "./contact-me.styles.scss";
import { ReactComponent as MailBox } from "../../assets/ilustrations/undraw_Mailbox_re_dvds.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <div className="contact-component">
      <MailBox className="mailbox" />
      <div className="box">
        <div className="contact-container">
          <div className="contact-field">
            <div className="icon-container">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p>olavo07.exe@outlook.com</p>
          </div>
          <div className="contact-field">
            <div className="icon-container">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <a
              href="https://www.vintepila.com.br/user-profile/ODYwMTcyODM1OTY=/"
              target="_blank"
              rel="noreferrer"
            >
              vintepila.com/olaff
            </a>
          </div>
          <div className="contact-field">
            <div className="icon-container">
              <FontAwesomeIcon icon={faTelegramPlane} />
            </div>
            <a href="https://t.me/pedroolavo" target="_blank" rel="noreferrer">
              telegram.com/pedroolavo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
