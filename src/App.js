import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from'./components/Header/navbar/'
import Hero from './components/Header/hero'
import Intro from './components/Intro';

function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <Intro/>
    </div>
  );
}

export default App;
