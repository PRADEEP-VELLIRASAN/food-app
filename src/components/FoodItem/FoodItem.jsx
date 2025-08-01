// FoodItem.jsx - Displays a single food item with add/remove cart controls.
import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item card-ui">
      <div className="food-item-img-container">
        <img src={image} alt="image" className="food-item-img" />
        <div className="food-item-controls">
          {!cartItems[id] ? (
            <button
              className="add-btn"
              onClick={() => addToCart(id)}
              title="Add to cart"
            >
              <img
                src={assets.add_icon_white}
                alt="add_icon_white"
                className="add"
              />
            </button>
          ) : (
            <div className="food-item-counter-ui">
              <button
                className="counter-btn"
                onClick={() => removeFromCart(id)}
                title="Remove one"
              >
                <img
                  src={assets.remove_icon_red}
                  alt="remove_icon_red"
                />
              </button>
              <span className="counter-value">{cartItems[id]}</span>
              <button
                className="counter-btn"
                onClick={() => addToCart(id)}
                title="Add one"
              >
                <img
                  src={assets.add_icon_green}
                  alt="add_icon_green"
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating_starts" />
        </div>
        <p className="food-item-desc">{description}</p>
        <div className="food-item-price-ui">
          <span className="food-item-price">${price}</span>
          <button
            className="add-btn-secondary"
            onClick={() => addToCart(id)}
            title="Quick add"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
