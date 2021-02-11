
export function BuyItem({ addItem, item }) { 

  return (
    <div>Item {item.name}
      <button onClick={() => {
        addItem(item)}}>Add to Cart</button>
    </div>
  );
}