import { Link, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  
  const location = useLocation();
  console.log(location.pathname);
  const { user, signOutLog } = useAuth();

  // logout user part
  const handleSignOut = () => {
    return signOutLog()
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("jwt");
      })
      .catch(() => {});
  };

  const menuList = (
    <>
      <ul className=" menu bg-base-200  lg:menu-horizontal rounded-box">
        {/* <li className="border border-collapse">
          <NavLink
            to={"/"}
            className={`' ' + ${(isActive) => {
              isActive ? "bg-green-600" : "";
            }}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
            <span className="badge badge-sm">99+</span>
          </NavLink>
        </li> */}
        {/* <li className="border border-collapse ">
          <NavLink
            to={"/"}
            className={`' ' + ${(isActive) => {
              isActive ? "bg-green-600" : "";
            }}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Data
          </NavLink>
        </li>
        <li className="border border-collapse">
          <NavLink
            className={(isActive) => ({
              color: isActive ? "bg-green-600" : "",
            })}
            to={"/all"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            All Employee
          </NavLink>
        </li>

        <li className="border border-collapse">
          <NavLink
            to={"/attendants"}
            className={`' ' + ${(isActive) => {
              isActive ? "bg-green-600" : "";
            }}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Attendants
            <span className="badge badge-sm badge-warning">NEW</span>
          </NavLink>
        </li> */}
      </ul>
    </>
  );
  return (
    <div className="fixed top-0 z-50 bg-green-100 pb-6 navbar ">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuList}
          </ul>
        </div> */}
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <img
            className="lg:w-56 w-40 "
            src="https://anyquotes.co.uk/fontend/images/logo.png"
            alt="bnfcorporate logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">{menuList}</div>

      <div
        className={`navbar-end ${
          location.pathname === "/admin" || user ? "" : "hidden"
        }`}
      >
        {user ? (
          <div className="bg-white p-2 rounded-xl border flex justify-center items-center ">
            <div
              className="tooltip tooltip-bottom "
              data-tip={user?.displayName}
            >
              <img
                loading="lazy"
                className="w-12 mr-1 rounded-full"
                src="https://shorturl.at/eABFI"
                
              />
            </div>
            <div className="tooltip tooltip-bottom " data-tip="log Out">
              <div onClick={handleSignOut} className="btn   btn-primary p-2">
                <FiLogOut title="logOut"></FiLogOut>
              </div>
            </div>
          </div>
        ) : (
          <div className="tooltip tooltip-bottom " data-tip="log In">
            <Link
              className="btn btn-success bg-green-600 btn-md  font-semibold p-2"
              to={"/login"}
            >
              <span className="mr-1 text-white">LogIn</span>
              <FiLogIn title="logOut"></FiLogIn>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
