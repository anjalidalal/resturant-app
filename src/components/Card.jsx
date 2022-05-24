import react from "react";

const Card = ({ array }) => {
  return (
    <div className="main">
      {array.map((e) => (
        <div className="card">
          <img src={e.image} className="image"/>
          <div className="left">
            <h2 key={e.id}>{e.name}</h2>
            <p>{e.about}</p>
            <p>{e.cost}</p>
            <p>{e.min}</p>
            <p>{e.payment}</p>
          </div>
          <div className="right">
              <button>{e.rating}</button>
              <p>{e.votes}</p>
              <p>{e.reviews}</p>
              <button>{e.order}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
