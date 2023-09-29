import { Content1, Content2, Hero } from "../component/home";
import Header from "../component/header";
import Footer from "../component/footer";

let Home = () => {
  return (
    <div className="App bg-color">
      <section className="container mx-auto px-24">
        <Header />
        <Hero />
        <Content1 />
        <Content2 />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
