import About from "./component/About";
import Home from "./component/Home"
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Work from "./component/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
     <About />
     <Skills />
     <Work />
      <h1 className="text-2xl"></h1>
    </div>
  );
}

export default App;
