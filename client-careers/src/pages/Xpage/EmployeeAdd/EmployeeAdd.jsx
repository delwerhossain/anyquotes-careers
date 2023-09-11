import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";

const EmployeeAdd = () => {
// timestamp
   const [startTime, setStartTime] = useState("");
   const [endTime, setEndTime] = useState("");

   const handleStart = (event) => {
     const value = event.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters

     if (value.length > 2) {
       setStartTime(value.slice(0, 2) + ":" + value.slice(2));
     } else {
       setStartTime(value);
     }
   };
   const handleEnd = (event) => {
     const value = event.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters

     if (value.length > 2) {
       setEndTime(value.slice(0, 2) + ":" + value.slice(2));
     } else {
       setEndTime(value);
     }
   };

  
  //
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  // state
  const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const blood = form.blood.value;
    // const startTime = form.startTime.value;
    // const endTime = form.endTime.value;
    const sortCode = form.sortCode.value;
    const data = {
      name,
      number,
      blood,
      startTime,
      endTime,
      sortCode,
    };
    axiosSecure.post("/employee", data).then((data) => {
      console.log(data.data.acknowledged);
      if (data.data.acknowledged) {
        toast.success("success message");
        navigate("/all");
      } else {
        toast.error("error ");
        setError("error ");
      }
    });
  };

  return (
    <div className="hero min-h-screen bg-white">
      <Toaster />
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img
            loading="lazy"
            src="https://i.ibb.co/T1JLD7q/vecteezy-smartphone-app-layout.jpg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body text-orange-600">
            <h1 className="text-3xl text-center font-bold">Add My Data</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="add name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  required
                  type="number"
                  name="number"
                  placeholder="add number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blood Group</span>
                </label>
                <input
                  required
                  type="text"
                  name="blood"
                  placeholder="Add Blood Group"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Working Time Start</span>
                </label>

                <input
                  required
                  value={startTime}
                  onChange={handleStart}
                  maxLength={5}
                  type="text"
                  name="startTime"
                  placeholder="Add Working Time start"
                  className="input input-bordered"
                  step="3600"
                  min="00:00"
                  max="23:59"
                  pattern="[0-2][0-9]:[0-5][0-9]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Working Time End</span>
                </label>
                <input
                  required
                  value={endTime}
                  onChange={handleEnd}
                  maxLength={5}
                  type="text"
                  name="endTime"
                  placeholder="Add Working Time End"
                  className="input input-bordered"
                  step="3600"
                  min="00:00"
                  max="23:59"
                  pattern="[0-2][0-9]:[0-5][0-9]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sort Code ID</span>
                </label>
                <input
                  required
                  type="text"
                  name="sortCode"
                  placeholder="Add Sort Code ID"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <div className="divider">OR</div>
            </form>
            <p className="text-2xl text-red-600">{error}</p>
            {/* <p className="text-2xl text-teal-600">{success}</p> */}

            <p className="font-semibold underline text-secondary text-center">
              <Link to={"/"}> Home page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAdd;
