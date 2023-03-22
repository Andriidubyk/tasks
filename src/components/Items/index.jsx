import React from "react";
import { Link } from "react-router-dom";
function Items({ id, image, name, species }) {
  return (
    <Link to={`/${id}`} className="items__cart cart-item">
      <div className="cart-item__img">
        <img src={image} alt="person" />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__species">{species}</div>
      </div>
    </Link>
  );
}

export default Items;
