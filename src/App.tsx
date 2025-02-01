import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header";
import { Fragment } from "react";
import ScrollToTop from "./components/home/ScrollToTop";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="min-h-[calc(100vh-150px)]">
        <Outlet />
      </div>
      <ScrollToTop />
    </Fragment>
  );
}

export default App;
