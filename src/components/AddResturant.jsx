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
    console.log(text)
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setText({
      ...text,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="add">
      <h1>Add Restaurant</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Add title"
            name="name"
            className="title"
          />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Image url"
            name="image"
            className="img"
          />
          <div className="row1">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Categories"
            name="about"
          />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Cost for one"
            name="cost"
          />
          <input
            name="rating"
            type="text"
            placeholder="Total stars"
            onChange={handleChange}
          />
          <input
            name="reviews"
            type="text"
            placeholder="Total reviews"
            onChange={handleChange}
          />
          <input
            name="votes"
            type="text"
            placeholder="Total votes"
            onChange={handleChange}
          />
          <select onChange={handleChange} name="payment" >
            <option>Payment</option>
            <option>Accepts all payments</option>
            <option>Accepts online payments</option>
            <option>Accepts cash only</option>
          </select>
          </div>
            {/* <input type="submit" value="ADD" className="submit" /> */}
            <button className="submit">Add</button>
        </form>
    </div>
  );
};

export default AddRestaurant;
