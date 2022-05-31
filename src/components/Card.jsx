import React from "react";

const Card = ({ data }) => {
  return (
    <div className="main">
      {data.map((e, index) => (
        <div className="card" key={index}>
          <img src={e.image} className="image"/>
          <div className="left">
            <h3 >{e.name}</h3>
            <p className="para">{e.about}</p>
            <p className="para">{e.cost}</p>
            <p>{e.min}</p>
            <p >{e.payment}</p>
          </div>
          <div className="right">
              <button className="rating">{e.rating}</button>
              <p>{e.votes}</p>
              <div>{e.reviews}</div>
              <button className="order">{e.order}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
