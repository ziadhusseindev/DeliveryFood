import React, { useContext } from "react";
import "./FoodDisply.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisply = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-disply" id="food-disply">
      <h2>Top Dishes Near You</h2>
      <div className="food-disply-list">
        {food_list.map((item, index) => {
          if (category==="All" || item.category === category){

            return <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          }
})}
      </div>
    </div>
  );
};

export default FoodDisply;