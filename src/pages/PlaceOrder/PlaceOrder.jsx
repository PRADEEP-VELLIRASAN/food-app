// PlaceOrder.jsx - Handles delivery information and order placement.
import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext"; // Access cart totals from context
import "./PlaceOrder.css";
import { deliveryFee } from "../Cart/Cart"; // Import delivery fee constant
import { useNavigate } from "react-router-dom"; // Navigation helper

const PlaceOrder = () => {
  // Get subtotal amount from store context
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <>
      {/* Button to go back to the cart page */}
      <button className="GoBack" onClick={() => navigate("/cart")}>
        ⬅️Go Back to Cart Page
      </button>

      {/* Order form */}
      <form className="place-order">
        {/* Left side: Delivery information inputs */}
        <div className="place-order-left">
          <h2 className="title">Delivery Information</h2>
          
          {/* First and Last Name fields side by side */}
          <div className="multi-fields">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          {/* Email field */}
          <input type="email" placeholder="Email Address" />

          {/* Street address */}
          <input type="text" placeholder="Street" />

          {/* City and State side by side */}
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>

          {/* Zip Code and Country side by side */}
          <div className="multi-fields">
            <input type="number" placeholder="Zip Code" />
            <input type="text" placeholder="Country" />
          </div>

          {/* Phone number */}
          <input type="number" placeholder="Phone" />
        </div>

        {/* Right side: Cart total summary and proceed button */}
        <div className="place-order-right">
          <div className="cart-total">
            <h2 className="title">Cart Total</h2>
            <div>
              {/* Subtotal amount */}
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />

              {/* Delivery fee, zero if subtotal is 0 */}
              <div className="cart-total-details">
                <p>Delivery Free</p>
                <p>${getTotalCartAmount() === 0 ? 0 : deliveryFee}</p>
              </div>
              <hr />

              {/* Total cost */}
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

            {/* Proceed button disabled if cart is empty */}
            <button disabled={getTotalCartAmount() === 0}>
              PROCEED TO Payment
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
