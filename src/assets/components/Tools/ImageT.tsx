import { imageTools } from "../../objects/objects";
import { BsArrowRight } from "react-icons/bs";

export const ImageT = () => {
  return (
    <div className="image__global tools__global">
      <h3>Image Tools</h3>
      <div className="image__cards tools__cards">
        {imageTools.map((item: any, key: number) => {
          return (
            <a key={key} href={item.goTo} target="_blank" data-aos="zoom-out">
              <div className="image__card tools__card">
                <div className="image__card__top tools__card__top">
                  <img src={item.img} alt={item.img} />
                </div>
                <div className="image__card__bottom tools__card__bottom">
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
