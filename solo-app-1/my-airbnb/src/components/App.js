import Card from "../components/Card";
import data from "../data.js";

export default function App() {
  const prop = data.map((list) => {
    return <Card key={list.id} prop={list} />;
  });

  return prop;
}
