export function CartItem({ item, quantity,removeItem }) {
  return (
    <div className="cart-item">{item.name}
      <img className="item-image" src={item.image} alt={`Cover of ${item.name}`}></img>
      <p>Quantity: {quantity} </p>
      <button onClick={() => {removeItem(item)}}>Remove from cart</button>
    </div>
  );
}