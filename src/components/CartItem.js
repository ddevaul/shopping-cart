export function CartItem({ item, quantity,removeItem }) {
  const images = require.context("../images", true);
  let img = images(item.image).default;
  return (
    <div className="cart-item">{item.name}
      <img className="item-image" src={img} alt={`Cover of ${item.name}`}></img>
      <p>Quantity: {quantity} </p>
      <button onClick={() => {removeItem(item)}}>Remove from cart</button>
    </div>
  );
}