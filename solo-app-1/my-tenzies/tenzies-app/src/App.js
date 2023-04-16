import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

import Die from "./components/Die";

function App() {
  const [dieValues, setDieValues] = useState(rollNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dieValues.every((obj) => obj.isHeld);
    const fistVal = dieValues[0].number;
    const allSame = dieValues.every((obj) => obj.number === fistVal);
    if (allHeld && allSame) {
      setTenzies(true);
      console.log("you win");
    }
  }, [dieValues, tenzies]);

  const dice = dieValues.map((die) => (
    <Die
      key={die.id}
      number={die.value}
      held={die.isHeld}
      hold={() => holdDice(die.id)}
    />
  ));

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function rollNewDice() {
    const randNum = [];
    for (let i = 0; i < 10; i++) {
      randNum.push(generateNewDie());
    }
    return randNum;

    // setDieValues((oldDice) =>
    //   oldDice.map((obj) => {
    //     return obj.isHeld ? obj : generateNewDie();
    //   })
    // );
  }

  function rollDice() {
    if (!tenzies) {
      // const randNum = [];
      // for (let i = 0; i < 10; i++) {
      //   randNum.push(generateNewDie());
      // }
      // return randNum;
      setDieValues((oldDice) =>
        oldDice.map((obj) => {
          return obj.isHeld ? obj : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDieValues(rollNewDice());
    }
  }

  function holdDice(id) {
    setDieValues((oldDice) =>
      oldDice.map((obj) => {
        if (obj.id === id) {
          return { ...obj, isHeld: !obj.isHeld };
        } else {
          return obj;
        }
      })
    );
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die__container">{dice}</div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "Reset Dice" : "Roll"}
      </button>
    </main>
  );
}

export default App;
