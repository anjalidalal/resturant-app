import React from "react";
import { useState } from "react";
import CardComponent from "./CardComponent";
import data from "./data.json";

const Card = () => {
  const [restaurantData, setRestaurantData] = useState(data);

  const handelClicked = (event) => {
    const filteredData = data.filter(
      (e) => e.rating >= event.target.dataset.value
    );
    setRestaurantData(filteredData);
  };
  return (
    <>
      <h1>Restaurant App</h1>
      <div className="sort">
      <div>
          <p>Payment Mode</p>
          <button>All Modes</button>
          <button>Cash Only</button>
          <button>Online Payments</button>
      </div>
      <div>
        <p>Sort By Stars</p>
        <button onClick={handelClicked} data-value={4}>
          Above 4 Star
        </button>
        <button onClick={handelClicked} data-value={3}>
          Above 3 Star
        </button>
        <button onClick={handelClicked} data-value={2}>
          Above 2 Star
        </button>
        <button onClick={handelClicked} data-value={1}>
          Above 1 Star
        </button>
      </div>
      <div>
          <p>Sort By Amount</p>
          <button>High To Low</button>
          <button>Low To High</button>
      </div>
      </div>
      <CardComponent data={restaurantData} />
    </>
  );
};

export default Card;
