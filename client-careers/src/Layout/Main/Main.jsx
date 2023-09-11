import { Outlet } from "react-router-dom";
import Navbar from "../../Common/common/Navbar/Navbar";
import Footer from "../../Common/common/Navbar/Footer";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      {/* outlet part  */}
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
