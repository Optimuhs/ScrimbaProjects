import React from "react";

function Card({ prop }) {
  console.log(prop);
  let badgeText;
  if (prop.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (prop.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={"./CardImages/" + prop.coverImg}
        alt="user exp"
        className="card--image"
      />
      <div className="card--stats">
        <img src="./images/Star.png" alt="star" className="card--star" />
        <span>5.0</span>
        <span className="gray">({prop.stats.reviewCount}) •</span>
        <span className="gray">{prop.location}</span>
      </div>
      <p className="card--title">{prop.title}</p>
      <p className="card--price">
        <strong>From ${prop.price}</strong> / person
      </p>
    </div>
  );
}
export default Card;
