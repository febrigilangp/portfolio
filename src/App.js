import './App.css';
// import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Intro from './Component/Intro/Intro'
import Portfoliolist from './Component/Portfolio/Portfoliolist';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Intro/>
      <About/>
      <Portfoliolist/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
