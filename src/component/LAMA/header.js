let Header = () => {
  return (
    <header class="sticky inset-0 z-10 block bg-white bg-opacity-80 px-16 py-4 shadow-lg">
      <section class="flex justify-between items-center">
        <div>
          <a href="#" class="text-xl font-bold font-sans text-gray-600">
            KodeSaya
          </a>
        </div>
        <div class="flex justify-between">
          <a href="#" class="text font-sans text-gray-600 mx-4">
            Home
          </a>
          <a href="#" class="text font-sans text-gray-600 mx-4">
            About
          </a>
          <a href="#" class="text font-sans text-gray-600 mx-4">
            Product
          </a>
          <a href="#" class="text font-sans text-gray-600 mx-4">
            Contact
          </a>
        </div>
        <div>
          <button
            href="#"
            class="middle none center mr-3 rounded-lg bg-pink-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            Buy
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
