import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="app">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Chose from a diverse menu featuring a delectable array of dishes
          crafted with finest ingredients and culinary expertise. our mission is
          to satisfy your cravings and desires
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
