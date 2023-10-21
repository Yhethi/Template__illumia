import { BigCards } from "./BigCards";
import "./body.css";
import { Footer } from "./Footer";
import { Looking } from "./Looking";
import { AudioT } from "./Tools/AudioT";
import { ImageT } from "./Tools/ImageT";
import { Marketing } from "./Tools/Marketing";
import "./Tools/tools.css";
import { VideoT } from "./Tools/VideoT";
export const Body = () => {
  return (
    <div className="body__global">
      <div className="body__internal">
        <Marketing />
        <VideoT />
        <ImageT />
        <AudioT />
        <BigCards />
        <Looking />
        <Footer />
      </div>
    </div>
  );
};
