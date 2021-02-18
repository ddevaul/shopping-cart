import { BuyItem } from "./BuyItem.js";
import "./style.css"
export function HomePage({addItemToCart, data}) {


  return (
    <div className="container home-container">
      {/* if more items, this would be done with Array.prototype.map() */}
      <BuyItem addItem={addItemToCart} item={data[0]}></BuyItem>
      <BuyItem addItem={addItemToCart} item={data[1]}></BuyItem>
      <BuyItem addItem={addItemToCart} item={data[2]}></BuyItem>
      <BuyItem addItem={addItemToCart} item={data[3]}></BuyItem>
    </div>
  );
}