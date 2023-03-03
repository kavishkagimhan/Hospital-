
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Main from './components/LandingPage/Main';
import Navbar from './components/Navbar';
import ScrollToTop from "react-scroll-to-top";
import Login from './components/Login';
import Signup from './components/Signup';
import Service from './components/LandingPage/Service';
import About from './components/LandingPage/About';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ScrollToTop smooth />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
