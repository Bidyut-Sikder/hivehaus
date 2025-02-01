import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header";
import { Fragment } from "react";
import ScrollToTop from "./components/home/ScrollToTop";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <ScrollToTop />
      <Footer />
    </Fragment>
  );
}

export default App;
