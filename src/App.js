import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbarr from './components/Navbarr';
import GoToTopButton from './components/GoToTopButton';
import Skill from './components/Skill';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificate from './components/Certificate';
import Project from './components/Project';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <Navbarr />
          <Home />
          <About />
          <Education />
          <Project />
          <Skill />
          <Certificate />
          <Contact />
          <Footer />
        </div>
        <GoToTopButton />

      </BrowserRouter>

    </>
  );
}

export default App;
