import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart , putInCart] = useState(false)
  function handleAdd() {
    putInCart(!inCart);
  }
  let changeAddRemove;
  if(inCart){
    changeAddRemove =  "Add to Cart"
  }
  else{
    changeAddRemove = "Remove From Cart"
  }
  let cart;
  if(inCart){
    cart = "in-cart"
  } 
  else {
    cart = ""
  }
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAdd} className="add">{changeAddRemove}</button>
    </li>
  );
}

export default Item;
