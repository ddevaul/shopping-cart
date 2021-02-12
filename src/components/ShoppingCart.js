import { CartItem } from "./CartItem.js";
import "./style.css";

export function ShoppingCart({ items, removeItem}) {
  const itemsDivs = [...items].map((item)=> {
    return <CartItem item={item[0]} quantity={item[1].quantity} removeItem={removeItem}></CartItem>
  })
  return (
    <div className="cart-container">
      {itemsDivs.length > 0 ? itemsDivs : <div>Nothing in Your Cart</div>}
    </div>
  );
}