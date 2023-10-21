import { marketingTools } from "../../objects/objects";
export const Marketing = () => {

  return (
    <div className="marketing__global tools__global">
      <h3>Marketing Tools</h3>
      <div className="marketing__cards tools__cards">
        {marketingTools.map((item: any, key: number) => {
          return (
            <a key={key} href={item.goTo} target="_blank" data-aos="zoom-out">
              <div className="marketing__card tools__card">
                <div className="marketing__card__top tools__card__top">
                  <img src={item.img} alt={item.img} />
                </div>
                <div className="marketing__card__bottom">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
