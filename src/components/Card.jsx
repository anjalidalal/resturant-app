import react from "react";

const Card = ({ array }) => {
  return (
    <div className="main">
      {array.map((e) => (
        <div className="card">
          <img src={e.image} className="image"/>
          <div className="left">
            <h3 key={e.id}>{e.name}</h3>
            <p className="para">{e.about}</p>
            <p className="para">{e.cost}</p>
            <p>{e.min}</p>
            <p >{e.payment}</p>
          </div>
          <div className="right">
              <button className="rating">{e.rating}</button>
              <p>{e.votes}</p>
              <p>{e.reviews}</p>
              <button className="order">{e.order}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
