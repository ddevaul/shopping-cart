import "./style.css"

export function BuyItem({ addItem, item }) { 
  // needed to import images
  const images = require.context("../images", true);
  // item.image can be found in the /data/data.json file
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