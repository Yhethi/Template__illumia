import { audioTools } from "../../objects/objects";
import { BsArrowRight } from "react-icons/bs";

export const AudioT = () => {
  return (
    <div className="audio__global tools__global">
      <h3>Audio Tools</h3>
      <div className="audio__cards tools__cards">
        {audioTools.map((item: any, key: number) => {
          return (
            <a key={key} href={item.goTo} target="_blank">
              <div className="audio__card tools__card">
                <div className="audio__card__top tools__card__top">
                  <img src={item.img} alt={item.img} />
                </div>
                <div className="audio__card__bottom tools__card__bottom">
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
