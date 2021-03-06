import React from "react";
import { useState } from "react";


const AddRestaurant = ({addNewRestaurant}) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    about: "",
    cost: "",
    rating: "",
    reviews: "",
    votes: "",
    payment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const handlePushNewData = () => {
    addNewRestaurant(formData)
    setFormData("")
  };

  return (
    <div className="add">
      <h1>Add Restaurant</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Add title"
          name="name"
          className="title"
        />
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Image url"
          name="image"
          className="img"
        />
        <div className="row1">
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Categories"
            name="about"
          />
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Cost for one"
            name="cost"
          />
          <input
            name="rating"
            type="text"
            placeholder="Total stars"
            onChange={handleInputChange}
          />
          <input
            name="reviews"
            type="text"
            placeholder="Total reviews"
            onChange={handleInputChange}
          />
          <input
            name="votes"
            type="text"
            placeholder="Total votes"
            onChange={handleInputChange}
          />
          <select onChange={handleInputChange} name="payment">
            <option>Payment</option>
            <option>Accepts all payments</option>
            <option>Accepts online payments</option>
            <option>Accepts cash only</option>
          </select>
        </div>
      </form>
      <button className="submit" onClick={handlePushNewData}>
        Add
      </button>
    </div>
  );
};

export default AddRestaurant;
