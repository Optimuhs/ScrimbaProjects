import React from "react";

function Card({ prop }) {
  return (
    <div className="card">
      <img src={prop.imageUrl} alt="location visited" className="card--image" />
      <div className="card--column">
        <div className="card--location__pair">
          <h5 className="card--location">{prop.location}</h5>
          <a href={prop.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="card--title">{prop.title}</h2>
        <p className="card--date">
          <strong>
            {prop.startDate} - {prop.endDate}
          </strong>
        </p>
        <p className="card--content">{prop.description}</p>
      </div>
    </div>
  );
}
export default Card;
