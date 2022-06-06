import './App.css';
import { useState } from 'react';
import { Figure } from './components/Figure';
import { Guesses } from './components/Guesses';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard';
import { Word } from './components/Word';

function App() {
  const [word, setWord] = useState('');
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [currLetter, setCurrLetter] = useState('');
  const [disable, setDisable] = useState(false);
  const uniqueLetters = [...new Set(wrongLetters)];

  return (
    <div className="App">
      <Header />
      <Figure uniqueLetters={uniqueLetters} />
      <Guesses uniqueLetters={uniqueLetters} />
      <Word
        word={word}
        setWord={setWord}
        setDisable={setDisable}
        setCurrLetter={setCurrLetter}
        uniqueLetters={uniqueLetters}
        correctLetters={correctLetters}
        setWrongLetters={setWrongLetters}
        setCorrectLetters={setCorrectLetters}
      />
      <Keyboard
        word={word}
        disable={disable}
        setDisable={setDisable}
        currLetter={currLetter}
        setCurrLetter={setCurrLetter}
        uniqueLetters={uniqueLetters}
        correctLetters={correctLetters}
        setWrongLetters={setWrongLetters}
        setCorrectLetters={setCorrectLetters}
      />
    </div>
  );
}

export default App;
