import React from "react";
import { useState } from "react";
import CardComponent from "./CardComponent";
import data from "./data.json";
import AddRestaurant from "./AddResturant";

const Card = () => {
  const [restaurantData, setRestaurantData] = useState(data);

  const handelClicked = (event) => {
    const filteredData = data.filter(
      (e) => e.rating >= event.target.dataset.value
    );
    setRestaurantData(filteredData);
  };

  const sortData = (event) => {
    const sortBy = event.target.dataset.value;
    let sortedData = [];
    if (sortBy === "highToLow") {
      sortedData = restaurantData.sort((a, b) => {
        return a.cost - b.cost;
      });
    } else {
      sortedData = restaurantData.sort((a, b) => {
        return b.cost - a.cost;
      });
    }
    setRestaurantData([...sortedData]);
  };


  const handlePaymentMethod = (event) => {
    const filterBy = event.target.dataset.value;
    const filteredData = data.filter((e) => {
      if (filterBy === e.payment) {
        return true;
      }
    });
    setRestaurantData(filteredData);
  };


  // const handleNewRestaurant = () => {
  //   <AddRestaurant />;
  // };


  return (
    <>
      <h1>Restaurant App</h1>
      <div className="sort">
        <div>
          <p>Payment Mode</p>
          <button
            className="btn"
            onClick={handlePaymentMethod}
            data-value={"Accepts all payments"}
          >
            All Modes
          </button>
          <button
            className="btn"
            onClick={handlePaymentMethod}
            data-value={"Accepts cash only"}
          >
            Cash Only
          </button>
          <button
            className="btn"
            onClick={handlePaymentMethod}
            data-value={"Accepts online payments"}
          >
            Online Payments
          </button>
        </div>
        <div>
          <p>Sort By Stars</p>
          <button className="btn" onClick={handelClicked} data-value={4}>
            Above 4 Star
          </button>
          <button className="btn" onClick={handelClicked} data-value={3}>
            Above 3 Star
          </button>
          <button className="btn" onClick={handelClicked} data-value={2}>
            Above 2 Star
          </button>
          <button className="btn" onClick={handelClicked} data-value={1}>
            Above 1 Star
          </button>
        </div>
        <div>
          <p>Sort By Amount</p>
          <button className="btn" onClick={sortData} data-value={"highToLow"}>
            High To Low
          </button>
          <button className="btn" onClick={sortData} data-value={"lowToHigh"}>
            Low To High
          </button>
        </div>
      </div>
      <AddRestaurant/>
      <CardComponent data={restaurantData} />
    </>
  );
};

export default Card;
