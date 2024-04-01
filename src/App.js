import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div>
      <Header></Header>
      <Intro></Intro>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default App;
