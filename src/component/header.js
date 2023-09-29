import logo from "./img/logo.png";

let Header = () => {
  return (
    <header
      class="pt-9 flex flex-row justify-between items-center"
      data-aos="fade-down"
      data-aos-duration="2000"
      id="hello"
    >
      <a href="/">
        <img id="logo" src={logo} alt="" />
      </a>
      <div>
        <a href="/about" class="me-14 hover:text-red-400">
          About
        </a>
        <a href="/service" class="me-14 hover:text-red-400">
          Services
        </a>
        <a href="/products" class="me-14 hover:text-red-400">
          Products
        </a>
        <a href="/">
          <button class="btn-demo mx-10">Buy</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
