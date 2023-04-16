import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./Data";

function App() {
  const cards = Data.map((cardData) => {
    return <Card key={cardData.id} prop={cardData} />;
  });

  return (
    <div>
      <Navbar />
      <section className="card--list">{cards}</section>
    </div>
  );
}

export default App;
