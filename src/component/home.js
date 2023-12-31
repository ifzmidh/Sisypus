import imgHero from "./img/a.png";
import imgHeroBg from "./img/circle.png";
import mail from "./img/email.png";
import maintaince from "./img/maintance.png";

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
          <div class="input-container hover:border-white border-slate flex flex-row">
            <img src={mail} className="me-2"></img>
            <input className="border-white" placeholder="Email" />
          </div>
          <a href="/">
            <button className="ms-5 btn-send">Send</button>
          </a>
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
        <a href="/">
          <button className="ms-5 btn-send">Send</button>
        </a>
      </div>
      <div className="basis-1/3 text-center">
        <h1 className="pb-4 text-3xl font-bold">Project Plan</h1>
        <p className="pb-8 px-10 text-sm">
          Culpa duis aute culpa sint consequat in nulla fugiat. Commodo eiusmod
          fugiat sit pariatur. Et culpa deserunt mollit ea laborum duis velit
          ullamco laboris
        </p>
        <a href="/">
          <button href="#" className="ms-5 btn-send">
            Send
          </button>
        </a>
      </div>
      <div className="basis-1/3 text-center">
        <h1 className="pb-4 text-3xl font-bold">Project Plan</h1>
        <p className="pb-8 px-10 text-sm">
          Culpa duis aute culpa sint consequat in nulla fugiat. Commodo eiusmod
          fugiat sit pariatur. Et culpa deserunt mollit ea laborum duis velit
          ullamco laboris
        </p>
        <a href="/">
          <button className="btn-send">Send</button>
        </a>
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
        <a href="/">
          <button className="mt-5 btn-send">Send</button>
        </a>
      </div>
      <div
        className="basis-3/5 flex justify-end"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-anchor-placement="bottom-bottom"
      >
        <img id="imgMaintance" src={maintaince}></img>
      </div>
    </section>
  );
};

export { Hero, Content1, Content2 };
