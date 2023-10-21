import { videoTools } from "../../objects/objects";
import { BsArrowRight } from "react-icons/bs";

export const VideoT = () => {
  return (
    <div className="video__global tools__global">
      <h3>Video Tools</h3>
      <div className="video__cards tools__cards">
        {videoTools.map((item: any, key: number) => {
          return (
            <a key={key} href={item.goTo} target="_blank">
              <div className="video__card tools__card">
                <div className="video__card__top tools__card__top">
                  <img src={item.img} alt={item.img} />
                </div>
                <div className="video__card__bottom tools__card__bottom">
                  <div className="tools__texts">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                  <BsArrowRight className="tools__rightArrow" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
