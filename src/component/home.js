import logo from "./img/logo.png";
import imgHero from "./img/7450159.png";
import mail from "./img/email.png";
import maintaince from "./img/maintance.png";
// AOS ANIMATED
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const emailLogo = "Email";

let Home = () => {
  return (
    <header
      class="pt-9 flex flex-row justify-between items-center"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <a href="">
        <img id="logo" src={logo} alt="" />
      </a>
      <div>
        <a href="#" class="me-14">
          About
        </a>
        <a href="#" class="me-14">
          Services
        </a>
        <a href="#" class="me-14 ">
          Products
        </a>
        <button type="button" class="btn-demo mx-10">
          Demo
        </button>
      </div>
    </header>
  );
};

let Hero = () => {
  return (
    <section id="hero" class="pt-10 flex">
      <div
        id="headingHero"
        class="flex flex-col justify-center"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1>
          Manage
          <br /> your personal <br />
          and all team task.
        </h1>
        <p class="mt-5">
          Monitoring your personal and all team task more easily with us. <br />{" "}
          And make your mood is happy with bored day, SHUT THE FUCK U!
        </p>
        <div className="mt-10 mb-5 flex flex-row">
          <div class="input-container flex flex-row">
            <img src={mail} className="me-2"></img>
            <input defaultValue={emailLogo} />
          </div>
          <button className="ms-5 btn-send">Send</button>
        </div>
      </div>
      <div
        id="imgHero"
        className="flex justify-center items-center mt-10 "
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <img id="imgHero" src={imgHero} alt="" />
        <span id="bgImgHero" className="flex-none"></span>
        <span id="bgImgHero2" className="flex-none"></span>
      </div>
    </section>
  );
};

let Content1 = () => {
  return (
    <section
      className="py-32 flex flex-row"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="center-center"
    >
      <div className="basis-1/3 text-center">
        <h1 className="pb-4 text-xl font-bold">Project Plan</h1>
        <p className="pb-8 px-10 text-sm">
          Culpa duis aute culpa sint consequat in nulla fugiat. Commodo eiusmod
          fugiat sit pariatur. Et culpa deserunt mollit ea laborum duis velit
          ullamco laboris
        </p>
        <button className="ms-5 btn-send">Send</button>
      </div>
      <div className="basis-1/3 text-center">
        <h1 className="pb-4 text-xl font-bold">Project Plan</h1>
        <p className="pb-8 px-10 text-sm">
          Culpa duis aute culpa sint consequat in nulla fugiat. Commodo eiusmod
          fugiat sit pariatur. Et culpa deserunt mollit ea laborum duis velit
          ullamco laboris
        </p>
        <button className="ms-5 btn-send">Send</button>
      </div>
      <div className="basis-1/3 text-center">
        <h1 className="pb-4 text-xl font-bold">Project Plan</h1>
        <p className="pb-8 px-10 text-sm">
          Culpa duis aute culpa sint consequat in nulla fugiat. Commodo eiusmod
          fugiat sit pariatur. Et culpa deserunt mollit ea laborum duis velit
          ullamco laboris
        </p>
        <button className="btn-send">Send</button>
      </div>
    </section>
  );
};

let Content2 = () => {
  return (
    <section id="maintance" className="flex items-center">
      <div
        className="basis-3/5"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-center"
      >
        <h1 className="text-5xl font-medium">
          We are solution for
          <br /> your maintance and bug.
        </h1>
        <p className="pt-10">
          Nostrud culpa veniam nisi voluptate adipisicing dolore fugiat Lorem.
          Duis nisi nulla et pariatur cupidatat non labore eiusmod dolor ut
          pariatur. Enim ut anim est eiusmod amet laboris excepteur cillum nisi
          veniam aute excepteur et nisi. Reprehenderit incididunt officia dolor
          commodo exercitation in amet mollit.
        </p>
        <button className="mt-5 btn-send">Send</button>
      </div>
      <div
        className="basis-3/5"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-center"
      >
        <img src={maintaince}></img>
      </div>
    </section>
  );
};

export { Home, Hero, Content1, Content2 };
