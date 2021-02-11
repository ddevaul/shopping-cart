import './App.css';
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage.js";
import { ShoppingCart } from "./components/ShoppingCart.js";
import { Contact } from "./components/Contact.js";
import { Nav } from "./components/Nav.js"
import { data } from "./data/data.js";

// let itemMap = new Map();
// data.forEach((datum) => {
//   itemMap.set(datum, {quantity: 0})
// })


function App() {
  let [items, setItems] = useState(new Map());

  let [size, setSize] = useState(0);

  const addUp = (map) => {
    let count = 0;
    map.forEach((item) => {
      count += item.quantity});
    return count;
  }

  const addItem = (object) => {
    const temp = items;
    if (temp.has(object)) temp.set(object, {quantity: temp.get(object).quantity + 1})
    else temp.set(object, {quantity: 1})
    setSize(addUp(temp))
    setItems(() => {
      return items = temp;
    })
  }

  const removeItem = (item) => {
    const temp = items;
    const {quantity} = items.get(item)
    if (quantity > 1){
      temp.set(item, {quantity: quantity - 1})
    } else {
      temp.delete(item)
    }
      setSize(addUp(temp))
      setItems(() => {
       return items = temp;
      });
  }

  return (
   <BrowserRouter>
    <Nav size={size}></Nav>
    <Switch>
      <Route exact path="/" render={() => <HomePage addItemToCart={addItem} data={data}></HomePage>}></Route>
      <Route exact path="/cart" render={() => <ShoppingCart items={items} removeItem={removeItem}></ShoppingCart>}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      
    </Switch>
    <button onClick={() =>console.log(items)} >Cart</button> 
    <button onClick={() =>addItem(data[0])} >Add Item</button> 

   </BrowserRouter>
  );
}
export default App;

