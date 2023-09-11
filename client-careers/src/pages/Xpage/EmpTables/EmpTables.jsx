import { useEffect, useState } from "react";
import EmpRow from "./EmpRow";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const EmpTables = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [axiosSecure] = useAxiosSecure();

  const toyData = () => {
    axiosSecure.get("/employee").then((data) => {
      console.log(data);
      setToys(data.data.slice(0, 20));
    });
  };
  useEffect(() => {
    toyData();
  }, []);

  const handleSearch = () => {
    if (searchText) {
      axiosSecure.get(`/toySearch/${searchText}`).then((data) => {
        setToys(data.data);
      });
    } else {
      toyData();
    }
  };

  return (
    <div className="overflow-x-auto lg:overflow-hidden mt-10">
      <div className="form-control my-8">
        <div className="input-group flex justify-center">
          <input
            type="text"
            placeholder="Search…"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
            className="input text-orange-600 font-semibold input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <button className="btn hidden" onClick={() => sortToys("ascending")}>
          Sort Ascending
        </button>
        <button className="btn hidden" onClick={() => sortToys("descending")}>
          Sort Descending
        </button>
      </div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Number </th>
            <th>Blood Group</th>
            <th>start time</th>
            <th>End Time</th>
            <th>Sort Code</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, index) => (
            <EmpRow key={toy._id} toy={toy} index={index}></EmpRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpTables;
