let github = "https://github.com/ifzmidh";
let instagram = "https://www.instagram.com/ifzmidh/";
let facebook = "https://web.facebook.com/profile.php?id=100091963807465";
let policy = "https://github.com/ifzmidh/Sisypus#readme";

let Footer = () => {
  return (
    <footer className="container px-24 bg-color-sec h-28 flex justify-between items-center font-light border-t-2 border-slate-500 text-slate-500">
      <div className="flex flex-row">
        <p className="pe-5">Copyright © 2023 Ifzmidh Dev Inc.</p>
        <a
          href={policy}
          className="ps-5 border-s-2 border-slate-500 hover:text-slate-400"
        >
          Trademark Policy
        </a>
      </div>
      <div className="flex flex-row">
        <a href={instagram} className="pe-5 hover:text-slate-400">
          Instagram
        </a>
        <a
          href={github}
          className="px-5 border-s-2 border-slate-500 hover:text-slate-400"
        >
          Github
        </a>
        <a
          href={facebook}
          className="px-5 border-s-2 border-slate-500 hover:text-slate-400"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
