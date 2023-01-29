import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import {HashLink} from "react-router-hash-link"

import "./styles/App.scss";

import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";



function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
    </>

  );
}

export default App;
