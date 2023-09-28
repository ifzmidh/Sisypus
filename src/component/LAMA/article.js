import image from "./html.jpg";

let ImageHtml = () => {
  return (
    <div class="my-12 drop-shadow-md">
      <img
        src={image}
        class="w-full object-cover object-center overflow-hidden rounded-xl shadow-lg"
        alt=""
      />
    </div>
  );
};

let Article = () => {
  return (
    <div class="mb-12">
      <h2 class="mb-2 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
        What is Material Tailwind
      </h2>
      <p class="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
        Can you help me out? you will get a lot of free exposure doing this can
        my website be in english?. There is too much white space do less with
        more, so that will be a conversation piece can you rework to make the
        pizza look more delicious other agencies charge much lesser can you make
        the blue bluer?. I think we need to start from scratch can my website be
        in english?, yet make it sexy i'll pay you in a week we don't need to
        pay upfront i hope you understand can you make it stand out more?. Make
        the font bigger can you help me out? you will get a lot of free exposure
        doing this that's going to be a chunk of change other agencies charge
        much lesser. Are you busy this weekend? I have a new project with a
        tight deadline that's going to be a chunk of change. There are more
        projects lined up charge extra the next time.
      </p>
    </div>
  );
};

export { Article, ImageHtml };
