import './App.css';
import { Figure } from './components/Figure';
import { Guesses } from './components/Guesses';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard';
import { Word } from './components/Word';

function App() {
  return (
    <div className="App">
      <Header />
      <Figure />
      <Guesses />
      <Word />
      <Keyboard />
    </div>
  );
}

export default App;
