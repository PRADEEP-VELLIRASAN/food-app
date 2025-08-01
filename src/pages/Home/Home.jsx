// Home.jsx - Main landing page with menu, food display, and app download.

import React, { useState } from "react";
import "./Home.css";  // Styles specific to Home component
import Header from "../../components/Header/Header";  // Header section of the page
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";  // Menu for selecting food categories
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";  // Displays food items based on category
import AppDownload from "../../components/AppDownload.jsx/AppDownload";  // Section to download the app

const Home = () => {
  // State to track currently selected food category; defaults to "All"
  const [category, setCategory] = useState("All");

  return (
    <div>
      {/* Header component with site branding and navigation */}
      <Header />

      {/* ExploreMenu allows users to filter food items by category */}
      <ExploreMenu category={category} setCategory={setCategory} />

      {/* FoodDisplay shows food items filtered by the selected category */}
      <FoodDisplay category={category} />

      {/* AppDownload provides users links to download the mobile app */}
      <AppDownload />
    </div>
  );
};

export default Home;
