import { useEffect, useState } from "react";
import "./header.css";

import illumiaLogo from "./../header/illumiaLogo.png";
import { templatesMenu } from "../objects/objects";
import { Templates } from "./Templates";
import { showTemplates } from "../logicJs";

// icons
import { GoHorizontalRule } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { PiSquareDuotone } from "react-icons/pi";
import { TbHandFinger } from "react-icons/tb";
import { PiGearLight } from "react-icons/pi";
import { TbCards } from "react-icons/tb";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { BsInputCursorText } from "react-icons/bs";
import { PiCircleThin } from "react-icons/pi";
import { BiBell } from "react-icons/bi";
import { TiTabsOutline } from "react-icons/ti";
import { PiTagChevron } from "react-icons/pi";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const [templatesLeft, setTemplatesLeft] = useState(templatesMenu[0]);
  const [templatesRight, setTemplatesRight] = useState(templatesMenu[1]);

  const startHere = (): any => {
    return templatesLeft.map((item: any, key: number) => {
      return (
        <>
          <a className="tHover" key={key} href={item.goTo}>
            <MdKeyboardArrowDown /> {item.text}
          </a>
        </>
      );
    });
  };
  const constantsLeft = (): any => {
    return templatesRight.map((item: any, key: number) => {
      if (key == 0) {
        return item.map((item2: any, key2: number) => {
          return (
            <>
              <a className="tHover" key={key2} href={item2.goTo}>
                <MdKeyboardArrowDown /> {item2.text}
              </a>
            </>
          );
        });
      }
    });
  };
  const constantsRight = (): any => {
    return templatesRight.map((item: any, key: number) => {
      if (key == 1) {
        return item.map((item2: any, key2: number) => {
          return (
            <>
              <a className="tHover" key={key2} href={item2.goTo}>
                <MdKeyboardArrowDown /> {item2.text}
              </a>
            </>
          );
        });
      }
    });
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 991) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setIsMobile(true);
    }
    setTimeout(() => {
      showTemplates();
    }, 100);
  }, []);
  useEffect(() => {
    showTemplates();
  }, [isMobile]);
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={illumiaLogo} alt={illumiaLogo} />
        </a>
      </div>
      <div className="menu">
        <ul>
          {isMobile ? (
            <>
              <Templates
                startHere={startHere}
                constantsLeft={constantsLeft}
                constantsRight={constantsRight}
                isMobile={isMobile}
                key={0}
              />
            </>
          ) : (
            <>
              <li>
                <a href="#tools">Tools</a>
              </li>
              <li>
                <a href="#pipelines">Pipelines</a>
              </li>
              <Templates
                startHere={startHere}
                constantsLeft={constantsLeft}
                constantsRight={constantsRight}
                isMobile={isMobile}
                key={1}
              />
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#resources">Resources</a>
              </li>

              <li>
                <a id="signIn" href="#login">
                  Sign In
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      {isMobile && (
        <ul className="mobileFlex">
          <li>
            <a id="signIn" href="#login">
              Sign In
            </a>
          </li>
          <li>
            <div className="menuMobile">
              <GoHorizontalRule id="linea1" />
              <GoHorizontalRule id="linea2" />
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};
