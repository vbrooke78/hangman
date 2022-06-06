export const Guesses = ({ uniqueLetters }) => {
  return (
    <div className="guessesContainer">
      <p>Letters already guessed:</p>
      <p className="guessedLetters">{uniqueLetters}</p>
    </div>
  );
};
