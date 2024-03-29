import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Navbar />
    <HeroSection />
    <section className="card--list">
      <App />
    </section>
  </React.StrictMode>
);
