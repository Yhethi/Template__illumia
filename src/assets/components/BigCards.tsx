import "./bigCards.css";
import wLogo from "../body/5_bigCards/w.jpg";
import points from "../body/5_bigCards/points.jpg";
import fBlue from "../body/5_bigCards/fBlue.jpg";
import fWhite from "../body/5_bigCards/fWhite.jpg";
import { HiArrowSmRight } from "react-icons/hi";

export const BigCards = () => {
  return (
    <div className="bigCards__global">
      <div className="bigCards" data-aos="zoom-in">
        <div className="blueBigCard bigCards__card">
          <div className="bigCards__content">
            <div className="bigCards__logo">
              <img src={wLogo} alt={wLogo} />
            </div>
            <div className="bigCards__texts">
              <h3>Get now on Webflow</h3>
              <p>
                Get the Dashflow X Webflow Template today, and take your product
                design to the next level.
              </p>
            </div>
            <a href="#">
              Get template <HiArrowSmRight />
            </a>
          </div>
          <img className="bigCards__background" src={fBlue} alt={fBlue} />
        </div>

        <div className="whiteBigCard bigCards__card">
          <div className="bigCards__content">
            <div className="bigCards__logo">
              <img src={points} alt={points} />
            </div>
            <div className="bigCards__texts">
              <h3>Browse more templates</h3>
              <p>
                Looking for more templates? Browse our collection of 100+
                Webflow Templates on BRIXTemplates.com
              </p>
            </div>
            <a href="#">Browse more templates</a>
          </div>
          <img className="bigCards__background" src={fWhite} alt={fWhite} />
        </div>
      </div>
    </div>
  );
};
