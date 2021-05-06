import "./App.scss";
import Header from "./components/header/header.component.jsx";
import Home from "./components/home/home.component.jsx";
import AboutMe from "./components/about-me/about-me.component.jsx";
import ContactMe from "./components/contact-me/contact-me.component.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <div id="home" className="home">
        <Home />
      </div>

      <div id="about" className="about">
        <AboutMe />
      </div>

      <div id="contact" className="contact">
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
