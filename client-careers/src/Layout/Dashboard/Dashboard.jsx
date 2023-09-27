import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="">
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center ">
          {Outlet}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-lime-200">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-lime-100 text-base-content font-semibold gap-1">
            <h3 className="text-4xl text-center my-4 border border-green-700 py-8">
              Admin panel
            </h3>
            <li className="border rounded-xl bg-green-500 text-center">
              <Link to={'/'}>home </Link>
            </li>
            <li className="border rounded-xl bg-green-500">
              <Link to={'all'}>All Post</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
