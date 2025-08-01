// Header.jsx - Displays the main header with a call-to-action for ordering food.
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      {/* Container for header text and button */}
      <div className="header-contents">
        {/* Main heading */}
        <h2>Order Your Favourite Food Here</h2>
        
        {/* Descriptive paragraph */}
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        
        {/* Call-to-action button wrapped in anchor to navigate to menu section */}
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
