
import "./style.css"

const selectRightImage = () => {

}

export function BuyItem({ addItem, item }) { 

  return (
    <div className="buy-item">
      <img className="item-image" src={item.image} alt={`Cover of ${item.name}`}></img>
      {item.name}
      <button onClick={() => {
        addItem(item)
        }}>Add to Cart</button>
    </div>
  );
}