import "./App.css";
import { Content1, Content2, Hero, Home } from "./component/home";
function App() {
  return (
    <div className="App bg-color">
      <section className="px-56">
        <Home />
        <Hero />
        <Content1 />
        <Content2 />
      </section>
    </div>
  );
}

export default App;
