import { useEffect } from 'react';

export const Keyboard = ({
  word,
  disable,
  setDisable,
  currLetter,
  setCurrLetter,
  uniqueLetters,
  setCorrectLetters,
  setWrongLetters,
}) => {
  const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const handleClick = (e) => {
    setCurrLetter(e.target.value);
  };

  useEffect(() => {
    !word.includes(currLetter)
      ? setWrongLetters((currLetters) => [...currLetters, currLetter])
      : setCorrectLetters((currLetters) => [...currLetters, currLetter]);
  }, [currLetter, setCorrectLetters, setWrongLetters, word]);

  useEffect(() => {
    if (uniqueLetters) {
      if (uniqueLetters.length === 6) {
        setDisable(true);
      }
    }
  }, [uniqueLetters, setDisable]);

  return (
    <div className="keyboard">
      {letters.map((letter, index) => {
        return (
          <button
            onClick={handleClick}
            key={index}
            value={letter}
            disabled={disable}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};
