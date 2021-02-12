import { Link } from "react-router-dom";
import "./style.css"
import ShoppingCart from '@material-ui/icons/ShoppingCart';
export function Nav({size}) {

  return (
    <nav>
      <ul>
        <Link to="/shopping-cart" style={{textDecoration: 'none'}}>
          <li className="nav-list">Home</li>
        </Link>
        <Link to="/cart" style={{textDecoration: 'none'}}>
          <li className="nav-list">Shopping Cart</li>
        </Link> 
        <Link to="/contact" style={{textDecoration: 'none'}}>
          <li className="nav-list">Contact</li>
        </Link>
        <Link to="/cart" style={{textDecoration: 'none'}}>
          <div className="shopping-cart-icon nav-list">{size}<ShoppingCart></ShoppingCart></div>
        </Link> 
      </ul>
    </nav>
  );
}