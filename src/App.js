import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from'./components/Header/navbar/'
import Hero from './components/Header/hero'
import Intro from './components/Intro';
import Card from "./components/Choose/index"
import Practices from './components/Practices';

function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <Intro/>
     <Card/>
     <Practices/>
    </div>
  );
}

export default App;
