import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import Functions from "./components/Functions";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Discover />
      <Functions />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
