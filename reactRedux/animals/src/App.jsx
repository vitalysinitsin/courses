import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

const presetAnimals = ["bird", "cat", "cow", "dog", "gator", "horse"];

function getRandomAnimal() {
  return presetAnimals[Math.floor(Math.random() * presetAnimals.length)];
}

function App({ type }) {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    let isUniqueAnimal = false;
    let randomAnimal = "";

    while (!isUniqueAnimal && animals.length !== presetAnimals.length) {
      randomAnimal = getRandomAnimal();
      isUniqueAnimal = !animals.some((animal) => animal === randomAnimal);
    }

    if (randomAnimal) {
      setAnimals([...animals, randomAnimal]);
    } else {
      console.log("list is full");
    }
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index + animal} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
