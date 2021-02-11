import { CartItem } from "./CartItem.js"

export function ShoppingCart({ items, removeItem}) {

  return (
    <div>
      {[...items].map((item)=> {
        return <CartItem item={item[0]} quantity={item[1].quantity} removeItem={removeItem}></CartItem>
      })}
    </div>
  );
}