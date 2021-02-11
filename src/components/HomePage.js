import { BuyItem } from "./BuyItem.js";

export function HomePage({addItemToCart, data}) {


  return (
    <div>
      <BuyItem addItem={addItemToCart} item={data[0]}></BuyItem>
      <BuyItem addItem={addItemToCart} item={data[1]}></BuyItem>
      <BuyItem addItem={addItemToCart} item={data[2]}></BuyItem>
      <BuyItem addItem={addItemToCart} item={data[3]}></BuyItem>
    </div>
  );
}