import { Link } from "react-router-dom";
import { useState } from "react";

export function Nav({size}) {


  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Shopping Cart</li>
        </Link> 
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <div>{size}</div>
      </ul>
    </nav>
  );
}