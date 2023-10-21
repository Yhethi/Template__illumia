import "./footer.css";
import logoDash from "../body/7_footer/logoDash.jpg";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { BiLogoBehance } from "react-icons/bi";

export const Footer = () => {
  return (
    <div className="footer__global">
      <div className="footerUp">
        <img src={logoDash} alt={logoDash} />
        <div className="footer__miniMenu">
          <a href="#">Home</a>
          <a href="#">Changelog</a>
          <a href="#">Licenses</a>
        </div>
      </div>
      <div className="footerDown">
        <p>
          Copyright © Dashflow X | Designed by{" "}
          <a className="copyright" href="#">
            BRIX Templates
          </a>{" "}
          - Powered by{" "}
          <a className="copyright" href="#">
            Webflow
          </a>
        </p>
        <div className="footerSocial">
          <a href="#">
            <BiLogoFacebook />
          </a>
          <a href="#">
            <AiOutlineTwitter />
          </a>
          <a href="#">
            <BiLogoLinkedin />
          </a>
          <a href="#">
            <AiFillYoutube />
          </a>
          <a href="#">
            <PiDribbbleLogoFill />
          </a>
          <a href="#">
            <BiLogoBehance />
          </a>
        </div>
      </div>
    </div>
  );
};
