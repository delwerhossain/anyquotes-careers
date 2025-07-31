import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useDeletePost from "../../../hooks/useDeletePost";
import { formatToDDMMYYYY } from "../../../utils/formatDate";



const SortPost = ({ data, applyBtn }) => {
  // get route location
  const locationPath = useLocation();
  //post delete hook
  const { handleDelete } = useDeletePost();
  // user data
  const { user } = useAuth();
  const {
    jobTitle,
    location,
    hours,
    ctc,
    experience,
    publishTime,
    description,
    responsibilities,
    requirements,
    _id,
  } = data;
  const [hide, setHide] = useState(locationPath.pathname === `/apply/${_id}`);

  return (
    <div className="lg:m-6 m-2 lg:p-10 px-3 py-5 border border-green-200 rounded-xl  relative ">
      <div className="flex justify-between">
        <h5 className="border rounded p-4 w-40  border-green-400 text-center text-sm  text-slate-700 dark:text-slate-100 font-semibold">
          <span className="font-bold">Post Date :</span> <br />  {formatToDDMMYYYY(publishTime)}
        </h5>
        {user && (
          <div className="p-4 bg-green-200">
            <Link
              to={`/edit/${_id}`}
              className="bg-green-600 btn-success btn border-green-700 text-white"
            >
              edit
            </Link>
            {locationPath.pathname === `/apply/${_id}` && (
              <button
                onClick={() => handleDelete(_id)}
                className="ml-2 bg-red-600 hover:bg-red-700 hover:border-red-900 btn border-red-700 text-white"
              >
                delete
              </button>
            )}
          </div>
        )}
      </div>
      <div className="mt-6 text-slate-700">
        <h3 className="text-2xl font-bold lg:mb-6 mb-2 bg-green-700 text-white lg:w-3/5 text-center p-2 rounded-xl ">
          {jobTitle}
        </h3>
        <h6 className="font-bold text-slate-500 dark:text-slate-100">
          {" "}
          Location : {location}
        </h6>
        <div className="mt-7 grid lg:flex justify-around items-center  gap-8 p-3 lg:p-6 bg-green-50 dark:bg-green-600 border border-green-200   rounded-xl">
          <div className="">
            {" "}
            <p className="font-bold text-slate-500 dark:text-slate-100 text-lg lg:mb-6 mb-2 ">
              Start Date
            </p>
            <p className="font-semibold dark:text-black"> {hours}</p>
          </div>

          <div>
            {" "}
            <p className="font-bold text-slate-800 dark:text-slate-100 text-lg lg:mb-6 mb-2 ">
              CTC (Annual)
            </p>
            <p className="font-semibold dark:text-black">{ctc}</p>
          </div>
          <div>
            {" "}
            <p className="font-bold text-slate-500 dark:text-slate-100 text-lg lg:mb-6 mb-2 ">
              EXPERIENCE
            </p>
            <p className="font-semibold dark:text-black">{experience}</p>
          </div>
        </div>
      </div>
      <div className="h-18 flex justify-between">
        <Link
          to={`/apply/${_id}`}
          className={`btn mt-8 btn-warning ${applyBtn && "hidden"}`}
        >
          Apply Job
        </Link>
        <button onClick={() => setHide(!hide)} className="btn w-40 mt-8  ">
          <span className="mr-4"> More Details</span>{" "}
          {hide ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </button>
      </div>

      {hide && (
        <div className="p-6 mt-10 dark:text-black ">
          <div className="bg-yellow-50 p-4 border border-yellow-400">
            <p className="font-bold block text-xl mb-2">Description : </p>
            <p className="pl-4 "> {description}</p>
          </div>
          <div className="bg-red-50 mt-12 p-10 border border-red-400">
            <p className="font-bold block text-xl mb-2">Responsibilities : </p>
            <ul className="list-decimal">
              {responsibilities.map((data, key) => (
                <li key={key} className=" ">
                  {data}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-indigo-50 mt-12 p-10 border border-indigo-400">
            <p className="font-bold block text-xl mb-2">Requirements : </p>
            <ul className="list-decimal">
              {requirements.map((data, key) => (
                <li key={key} className=" ">
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortPost;
