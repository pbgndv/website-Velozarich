import './App.css';
import FifthSlide from './components/FifthSlide/FifthSlide';
import FirstSlide from './components/FirstSlide/FirstSlide';
import FourthSlide from './components/FourthSlide/FourthSlide';
import SecondSlide from './components/SecondSlide/SecondSlide';
import ThirdSlide from './components/ThirdSlide/ThirdSlide';

function App() {
  return (
    <div className="App">
      <FirstSlide/>
      <SecondSlide/>
      <ThirdSlide/>
      <FourthSlide/>
      <FifthSlide/>
    </div>
  );
}

export default App;
