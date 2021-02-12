
import "./style.css"



export function BuyItem({ addItem, item }) { 
  const images = require.context("../images", true);
  let img = images(item.image).default;
  return (
    <div className="buy-item">
      <img className="item-image" src={img} alt={`Cover of ${item.name}`}></img>
      {item.name}
      <button onClick={() => {
        addItem(item)
        }}>Add to Cart</button>
    </div>
  );
}