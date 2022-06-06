import { useEffect, useMemo } from 'react';

export const Word = ({
  word,
  setWord,
  setDisable,
  setCurrLetter,
  uniqueLetters,
  correctLetters,
  setWrongLetters,
  setCorrectLetters,
}) => {
  const randomWordList = useMemo(
    () => [
      'LANDOWNER',
      'HUNTING',
      'ANNIVERSARY',
      'SUSTAIN',
      'REVOLUTION',
      'HYPOTHESIS',
      'REINFORCE',
      'OBLIGE',
      'PLASTER',
      'CAPABLE',
      'BREATHE',
      'SATISFY',
      'DRIBBLE',
      'ATTRACT',
      'RELIABLE',
      'INVESTED',
      'FRESHMAN',
      'DIPLOMACY',
      'DRESSING',
    ],
    []
  );

  useEffect(() => {
    setWord(randomWordList[Math.floor(Math.random() * randomWordList.length)]);
  }, [randomWordList, setWord]);

  let blankWord = word.split('');

  blankWord = blankWord.map((letter) =>
    !correctLetters.includes(letter) ? '_' : letter
  );

  const handleClick = () => {
    setWrongLetters([]);
    setCorrectLetters([]);
    setCurrLetter('');
    setDisable(false);
    setWord(randomWordList[Math.floor(Math.random() * randomWordList.length)]);
  };

  if (!blankWord.includes('_')) {
    return (
      <div className="resultWin">
        <p>🎉 Congratulations! 🎉</p>
        <p>You have won!</p>
        <button onClick={handleClick}>Have another go!</button>
      </div>
    );
  }

  if (uniqueLetters.length === 6)
    return (
      <div className="resultLose">
        <p>You have lost!</p>
        <p>Try again!</p>
        <button onClick={handleClick}>Click to reset</button>
      </div>
    );

  return (
    <div className="wordContainer">
      <p>{blankWord.join(' ')}</p>
    </div>
  );
};
