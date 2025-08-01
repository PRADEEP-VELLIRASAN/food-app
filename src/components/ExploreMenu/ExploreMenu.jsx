// ExploreMenu.jsx - Lets users select a food category to filter menu items.
import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets"; // List of menu categories with images

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      {/* Section title */}
      <h1>Explore Our Menu</h1>

      {/* Description text */}
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      {/* Menu category options */}
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="explore-menu-list-item"
              // Toggle category on click: if clicked category is already active, reset to "All"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              {/* Category image with conditional active class */}
              <img
                src={item.menu_image}
                className={category === item.menu_name ? "active" : ""}
                alt={`${item.menu_name} category`}
              />
              {/* Category name */}
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
