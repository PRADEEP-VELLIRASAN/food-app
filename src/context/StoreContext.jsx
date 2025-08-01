import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

// Create context with default null value
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // State: cartItems is an object with itemId as key and quantity as value
  const [cartItems, setCartItems] = useState({});

  // Adds one unit of the item to the cart
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      // If item is not yet in cart, set quantity to 1
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      // Otherwise increment existing quantity
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // Removes one unit of the item from the cart
  const removeFromCart = (itemId) => {
    if (cartItems[itemId] === 1) {
      // If quantity is 1, remove item completely from cart
      const newCartItems = { ...cartItems };
      delete newCartItems[itemId];
      setCartItems(newCartItems);
    } else {
      // Otherwise decrement quantity by 1
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  // Returns the total quantity of all items in the cart
  const getTotalQuantity = () => {
    let totalQuantity = 0;
    for (const itemId in cartItems) {
      totalQuantity += cartItems[itemId];
    }
    return totalQuantity;
  };

  // Calculates the total price of all items in the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        // Find the product info from food_list by matching _id
        let itemInfo = food_list.find((product) => product._id === itemId);
        totalAmount += itemInfo.price * cartItems[itemId];
      }
    }
    return totalAmount;
  };

  // Values and functions exposed to the rest of the app via context
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalQuantity,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
