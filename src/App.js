import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from'./components/Header/navbar/'
import Hero from './components/Header/hero'
import Intro from './components/Intro';
import Card from "./components/Choose/index"
import Practices from './components/Practices';
import ClientReview from './components/ClientReview';
import OurTeam from './components/OurTeam';
import FAQs from './components/FAQs';
function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <Intro/>
     <Card/>
     <Practices/>
     <ClientReview/>
     <OurTeam/>
     <FAQs/>
    </div>
  );
}

export default App;
