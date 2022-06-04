import React from "react";
import { useState } from "react";

const AddRestaurant = () => {
  const [text, setText] = useState({
    name: "",
    image: "",
    about: "",
    cost: "",
    min: "",
    rating: "",
    reviews: "",
    votes: "",
    payment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setText({
      ...text,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <h1>Add Restaurant</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value=""
            placeholder="Add title"
          />
          <input
            name="image"
            type="text"
            value=""
            placeholder="Image url"
            onChange={handleChange}
          />
          <input
            name="about"
            type="text"
            value=""
            placeholder="Categories"
            onChange={handleChange}
          />
          <input
            name="cost"
            type="text"
            value=""
            placeholder="Cost for tow"
            onChange={handleChange}
          />
          <input
            name="min"
            type="text"
            value=""
            placeholder="Minimum cost"
            onChange={handleChange}
          />
          <input
            name="rating"
            type="text"
            value=""
            placeholder="Total stars"
            onChange={handleChange}
          />
          <input
            name="reviews"
            type="text"
            value=""
            placeholder="Total reviews"
            onChange={handleChange}
          />
          <input
            name="votes"
            type="text"
            value=""
            placeholder="Total votes"
            onChange={handleChange}
          />
          <label>Payment</label>
          <input
            type="checkbox"
            name="payment"
            value=""
            onChange={handleChange}
            />
            Accepts all payments
          <input
            type="checkbox"
            name="payment"
            value=""
            onChange={handleChange}
            />
            Accepts online payments
          <input
            type="checkbox"
            name="payment"
            value=""
            onChange={handleChange}
            />
            Accepts cash only
        </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
