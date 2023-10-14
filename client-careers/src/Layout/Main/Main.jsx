import { Outlet } from "react-router-dom";
import Navbar from "../../Common/common/Navbar/Navbar";
import Footer from "../../Common/common/Navbar/Footer";
import { useState } from "react";
import './Main.css'; // Import your CSS file

const Main = () => {
  const [dark, setDark] = useState(false);
  console.log({ dark });
  return (
    <div className={` dark:bg-black  bg-white text-black ${ dark && 'dark'}`}>
      <Navbar dark={dark} setDark={setDark} />
      {/* outlet part  */}
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
