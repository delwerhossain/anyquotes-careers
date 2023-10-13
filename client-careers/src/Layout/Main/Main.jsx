import { Outlet } from "react-router-dom";
import Navbar from "../../Common/common/Navbar/Navbar";
import Footer from "../../Common/common/Navbar/Footer";
import { useState } from "react";

const Main = () => {
  const [dark, setDark] = useState(false);
  console.log({ dark });
  return (
    <div
      className={
        dark ? "dark dark:text-white dark:bg-black " : " bg-white text-black"
      }
    >
      <Navbar dark={dark} setDark={setDark} />
      {/* outlet part  */}
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
