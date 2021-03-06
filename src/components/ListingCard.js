import React from "react";



function ListingCard({ description, image, location}) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">โ</button>
        ) : (
          <button className="emoji-button favorite">โ</button>
        )}
        <strong>{description}</strong>
        <span> ยท {location}</span>
        <button className="emoji-button delete">๐</button>
      </div>
    </li>
  );
}

export default ListingCard;
