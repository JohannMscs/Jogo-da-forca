//CSS
import "./App.css";

//React
import { useState, useCallback, useEffect } from "react";

//Data
import { gamelist } from "./data/list";

//Components
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import EndScreen from "./components/EndScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [list] = useState(gamelist);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordCategory = () => {
    const categories = Object.keys(list);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category);

    //pick a random word
    const word = list[category][Math.floor(Math.random() * category.length)];
    console.log(word);

    return { category, word };
  };

  //start game
  const startGame = () => {
    //pick word and pick category
    const { category, word } = pickWordCategory();

    //create an array of letters
    let wordLetters = word.split("");

    console.log(category, word);
    console.log(wordLetters);

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  //process the letter input
  const verifyLetter = (letter) => {
    setGameStage(stages[2].name);
  };

  //restart game
  const retry = () => {
    setGameStage(stages[0].name);
  };
  return (
    <>
      <div className="App">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && (
          <GameScreen
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />
        )}
        {gameStage === "end" && <EndScreen retry={retry} />}
      </div>
    </>
  );
}

export default App;
