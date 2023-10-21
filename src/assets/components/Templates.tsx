import { MdKeyboardArrowDown } from "react-icons/md";

export const Templates = ({
  startHere,
  constantsLeft,
  constantsRight,
  isMobile,
  key,
}: any) => {
  return (
    <li className="templateShowHover">
      {!isMobile && (
        <a href="#templates" id="templates">
          <p>Templates</p>
          <div className="arrowRotate">
            <MdKeyboardArrowDown className="arrowSize" />
          </div>
        </a>
      )}
      <div className="menuTemplate">
        <div className="menuTemplate__startHere">
          <h4>START HERE</h4>
          <div className="menuTemplate__startHere__elements" key={key}>
            {startHere()}
          </div>
        </div>
        <div className="menuTemplate__components">
          <h4>COMPONENTS</h4>
          <div className="menuTemplate__components__flex">
            <div className="menuTemplate__components__left tColumn">
              {constantsLeft()}
            </div>
            <div className="menuTemplate__components__right tColumn">
              {constantsRight()}
            </div>
          </div>
          {isMobile && (
            <div className="templateButtonsBottom">
              <li>
                <a id="getTemplate" href="#login">
                  Get template
                </a>
              </li>
              <li>
                <a id="default" href="#login">
                  Default
                </a>
              </li>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
