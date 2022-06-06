export const Guesses = ({ uniqueLetters }) => {
  return (
    <div className="guessesContainer">
      <p>Letters already guessed:</p>
      <div className="guessedLetters">
        {uniqueLetters.map((letter) => {
          return <p>{letter}</p>;
        })}
        {/* <p className="guessedLetters">{uniqueLetters}</p> */}
      </div>
    </div>
  );
};
