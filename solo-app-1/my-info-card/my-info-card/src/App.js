import Card from "./components/Card";
import Data from "./data.js";

function App() {
  const card = Data.map((cardData) => {
    return <Card prop={cardData} />;
  });
  return <div>{card}</div>;
}

export default App;
