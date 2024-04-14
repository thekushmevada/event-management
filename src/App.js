import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import EventsPage from "./Pages/Events";
import ServicesPage from "./Pages/Services";
import AboutUsPage from "./Pages/AboutUs";
import ContactPage from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        <Footer />
      </Router>    
    </div>
  );
}

export default App;
