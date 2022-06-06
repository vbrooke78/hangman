import gallows from '../images/0.jpeg';
import head from '../images/1.jpeg';
import body from '../images/2.jpeg';
import arm1 from '../images/3.jpeg';
import arm2 from '../images/4.jpeg';
import leg1 from '../images/5.jpeg';
import leg2 from '../images/6.jpeg';

export const Figure = ({ uniqueLetters }) => {
  const images = [gallows, head, body, arm1, arm2, leg1, leg2];
  const length = uniqueLetters.length;

  return (
    <div className="figureContainer">
      <img src={images[length]} alt="hangman gallows" />
    </div>
  );
};
