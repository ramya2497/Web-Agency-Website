import NavBar from "../src/Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Projects from "./Pages/Projects/Project";
import Services from "./Pages/Services/Services";
import Footer from "../src/Components/Footer/Footer";


function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Services />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
