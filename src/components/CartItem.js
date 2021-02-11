export function CartItem({ item, quantity,removeItem }) {
  return (
    <div>{item.name}
      <p>Quantity: {quantity} </p>
      <button onClick={() => {removeItem(item)}}>Remove from cart</button>
    </div>
  );
}