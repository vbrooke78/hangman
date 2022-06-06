import { useState } from 'react';

export const Word = () => {
  const [word, setword] = useState('HANGMAN');

  let blankWord = word.split('');

  blankWord = blankWord.map((letter) => (letter = '_'));

  return (
    <div className="wordContainer">
      <p>{blankWord.join(' ')}</p>
    </div>
  );
};
