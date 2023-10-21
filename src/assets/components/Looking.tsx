import "./looking.css";
import { HiArrowSmRight } from "react-icons/hi";
import partPage from "./../body/6_looking/partPage.png";

export const Looking = () => {
  return (
    <div className="looking__global">
      <div className="looking__text">
        <p>
          Didn't find what you were looking for? Let us know and we will try to
          build it.
        </p>
        <div className="looking__toLeft">
          <a href="#">
            <HiArrowSmRight /> Connect now
          </a>
        </div>
      </div>
      <div className="looking_img">
        <img src={partPage} alt={partPage} />
      </div>
    </div>
  );
};
