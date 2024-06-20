
import './App.css';
import About from './Components/About';

import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Review from './Components/Review';
import "./assets/style.css"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Product />
      <Review />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
