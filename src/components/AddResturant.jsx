import React from "react";

const AddRestaurant = () => {
  return (
    <div>
      <h1>Add Restaurant</h1>
      <div>
        <input name="title" value={text} placeholder="Add title" />
        <input name="rating" value={text} placeholder="Total stars" />
        <input name="reviews" value={text} placeholder="Total reviews" />
        <input name="votes" value={text} placeholder="Total votes" />
        <input name="cost" value={text} placeholder="Cost for tow" />
        <input name="image" value={text} placeholder="Image url" />
        <input name="minimum" value={text} placeholder="Minimum cost" />
      </div>
    </div>
  );
};

export default AddRestaurant;
