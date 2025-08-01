// Displays and manages the shopping cart page, including cart items, totals, and promocode input.
import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext"; // Context to access cart state and actions
import { useNavigate } from "react-router-dom"; // For navigation after checkout
import { assets } from "../../assets/assets"; // Icons and images

export const deliveryFee = 2; // Flat delivery fee constant

const Cart = () => {
  // Extract cart-related state and functions from StoreContext
  const {
    cartItems,       // Object: keys are food item IDs, values are quantities
    food_list,       // Array of all food items available
    removeFromCart,  // Function to remove an item from the cart
    getTotalCartAmount, // Function to calculate total price of cart items
    getTotalQuantity, // Function to calculate total quantity of items in cart
  } = useContext(StoreContext);

  const totalQuantity = getTotalQuantity(); // Total number of items in the cart
  const navigate = useNavigate(); // React Router navigate function

  return (
    <div className="cart">
      {/* Cart Items List */}
      <div className="cart-items">
        <div className="cart-items-title cart-heading">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {/* If cart is empty, display message */}
        {totalQuantity === 0 ? (
          <p className="NoItems">No Items in cart</p>
        ) : (
          // Iterate over all food items, display only those in the cart
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <React.Fragment key={item._id}>
                  <div
                    className="cart-items-title cart-items-item"
                    key={item._id}
                  >
                    {/* Food image */}
                    <img src={item.image} alt="food img" />

                    {/* Food name */}
                    <p>{item.name}</p>

                    {/* Single item price */}
                    <p>${item.price}</p>

                    {/* Quantity of this item in cart */}
                    <p>{cartItems[item._id]}</p>

                    {/* Total price for this item (price * quantity) */}
                    <p>${item.price * cartItems[item._id]}</p>

                    {/* Remove button */}
                    <p
                      className="Remove"
                      onClick={() => removeFromCart(item._id)}
                      title="Remove item"
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" || e.key === " ") removeFromCart(item._id);
                      }}
                    >
                      <img
                        src={assets.remove_icon_cross}
                        alt="remove_icon_cross"
                      />
                    </p>
                  </div>
                  <hr key={`hr-${item._id}-${index}`} />
                </React.Fragment>
              );
            }
            return null; // Return null if item is not in cart
          })
        )}
      </div>

      {/* Cart summary and promocode input */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            {/* Subtotal price */}
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr />

            {/* Delivery fee, zero if cart is empty */}
            <div className="cart-total-details">
              <p>Delivery Free</p>
              <p>${getTotalCartAmount() === 0 ? 0 : deliveryFee}</p>
            </div>

            <hr />

            {/* Grand total */}
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                $
                {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() + deliveryFee}
              </b>
            </div>
          </div>

          {/* Checkout button, disabled if cart is empty */}
          <button
            disabled={getTotalCartAmount() === 0}
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo code input section */}
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
