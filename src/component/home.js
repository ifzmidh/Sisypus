import logo from "./img/logo.png";
import imgHero from "./img/a.png";
import imgHeroBg from "./img/circle.png";
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
    <section id="hero" class="pt-10 flex justify-between">
      <div
        id="headingHero"
        class="flex flex-col justify-center min-w-2xl"
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
        className="flex justify-end items-center max-w-md"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <img id="imgHero" src={imgHero} alt="" className="max-w-md" />
        <img src={imgHeroBg} alt="" className="max-w-lg" />
      </div>
    </section>
  );
};

let Content1 = () => {
  return (
    <section
      className="py-28 flex flex-row"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-anchor-placement="top-center"
    >
      <div className="basis-1/3 text-center">
        <h1 className="pb-4 text-3xl font-bold">Project Plan</h1>
        <p className="pb-8 px-10 text-sm">
          Culpa duis aute culpa sint consequat in nulla fugiat. Commodo eiusmod
          fugiat sit pariatur. Et culpa deserunt mollit ea laborum duis velit
          ullamco laboris
        </p>
        <button className="ms-5 btn-send">Send</button>
      </div>
      <div className="basis-1/3 text-center">
        <h1 className="pb-4 text-3xl font-bold">Project Plan</h1>
        <p className="pb-8 px-10 text-sm">
          Culpa duis aute culpa sint consequat in nulla fugiat. Commodo eiusmod
          fugiat sit pariatur. Et culpa deserunt mollit ea laborum duis velit
          ullamco laboris
        </p>
        <button className="ms-5 btn-send">Send</button>
      </div>
      <div className="basis-1/3 text-center">
        <h1 className="pb-4 text-3xl font-bold">Project Plan</h1>
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
    <section id="maintance" className="pb-28 flex items-center">
      <div
        className="basis-3/5"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-anchor-placement="bottom-bottom"
      >
        <h1 className="text-5xl font-bold">
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
        className="basis-3/5 flex justify-end"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-anchor-placement="bottom-bottom"
      >
        <img id="imgMaintance" src={maintaince} className=""></img>
      </div>
    </section>
  );
};

let Footer = () => {
  return (
    <footer className="container px-24 bg-color-sec h-28 flex justify-between items-center font-light border-t-2 border-slate-500 text-slate-500">
      <div className="flex flex-row">
        <p className="pe-5">Copyright © 2023 Ifzmidh Dev Inc.</p>
        <p className="ps-5 border-s-2 border-slate-500">Trademark Policy</p>
      </div>
      <div className="flex flex-row">
        <p className="pe-5">Instagram</p>
        <p className="px-5 border-s-2 border-slate-500">Github</p>
        <p className="px-5 border-s-2 border-slate-500">Whatsapp</p>
        <p className="px-5 border-s-2 border-slate-500">Facebook</p>
      </div>
    </footer>
  );
};

export { Home, Hero, Content1, Content2, Footer };
