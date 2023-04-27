import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Whoami from "./components/Whoami";
import './stylesheet/Main.scss';

function App() {
  return (
    <div className="App">
      <Main />
      <Whoami />
      <Projects />
      {/* <Certification /> */}
      <Contact />
    </div>
  );
}

export default App;
