import "./App.css";
import { Content1, Content2, Hero, Home } from "./component/home";
function App() {
  return (
    <div className="App bg-color">
      <section className="container mx-auto px-24">
        <Home />
        <Hero />
        <Content1 />
        <Content2 />
      </section>
    </div>
  );
}

export default App;
