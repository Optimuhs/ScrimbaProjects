import React from "react";

function Card({ prop }) {
  return (
    <div className="card">
      <img className="card--image" src={prop.imgPath} alt="me" />
      <section className="card--titles">
        <h1>{prop.name}</h1>
        <h3>{prop.jobTitle}</h3>
        <h5>{prop.email}</h5>
        <div className="card--titles__buttons">
          <span className="button--email">
            <i class="fa-solid fa-envelope"></i>
            <a href="#">Email</a>
          </span>
          <span className="button--linkedIn">
            <i class="fa-brands fa-linkedin"></i>
            <a href="#">LinkedIn</a>
          </span>
        </div>
      </section>
      <section className="card--content">
        <div className="card--about">
          <h2>About</h2>
          <p>{prop.aboutMe}</p>
        </div>
        <div className="card--interests">
          <h2>Interests</h2>
          <p>{prop.interests}</p>
        </div>
      </section>
      <footer className="card--footer">
        <div className="card--icons">
          <i class="fa-brands fa-instagram fa-lg">
            <a href="#"></a>
          </i>
          <i class="fa-brands fa-twitter fa-lg">
            <a href="#"></a>
          </i>
          <i class="fa-brands fa-github fa-lg">
            <a href="#"></a>
          </i>
        </div>
      </footer>
    </div>
  );
}

export default Card;
