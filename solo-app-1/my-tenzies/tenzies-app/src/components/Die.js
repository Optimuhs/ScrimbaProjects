import React from "react";

const Die = (prop) => {
  const isHeldStyle = {
    backgroundColor: prop.held ? "#59E391" : "#fff",
  };

  return (
    <div className="die" style={isHeldStyle} onClick={prop.hold}>
      <h2 className="die__number">{prop.number}</h2>
    </div>
  );
};
export default Die;
