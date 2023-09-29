import Header from "../component/header";
import { useRouteError } from "react-router-dom";
import Footer from "../component/footer";

let NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="App bg-color h-screen flex flex-col justify-end">
      <div className="container mx-auto px-24">
        <Header />
      </div>
      <section className="flex flex-1 text-3xl font-bold justify-center items-center h-24">
        <h1>404 NOT FOUND</h1>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
