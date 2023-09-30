import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAllData from "../../../hooks/useAllData";

const EditPost = () => {
  const params = useParams();
  const id = params.id;
  const [jobData, setJobData] = useState([]);
  // const {
  //   jobTitle,
  //   location,
  //   hours,
  //   ctc,
  //   experience,
  //   description,
  //   responsibilities,
  //   requirements,
  // } = jobData;

  // console.log(jobData);
  // single
  const data = useAllData();
  const dataFilter = () => {
    const allData = data.filter((data) => data?._id == id);
    setJobData(allData[0]);
  };
  console.log(jobData);
  useEffect(() => {
    dataFilter();
  }, [data]);

  return (
    <div className="mt-32 mb-10 w-10/12 mx-auto">
      <div className="mt-6 bg-green-50 border border-green-500 p-4 md:p-6  grid gap-4 lg:gap-10 md:grid-cols-2 ">
        {/* position name filed */}
        <div className="form-control mb-5  w-full ">
          <label className="label">
            <span className="label-text font-semibold ">
              Add position name?
            </span>
          </label>
          <input
            type="text"
            defaultValue={jobData?.jobTitle}
            placeholder="position  name"
            name="jobTitle"
            className="border-green-200 input  xl:input-lg input-bordered w-full "

            // className="input  xl:input-lg  input-bordered w-full "
          />
        </div>
        {/* position name filed */}
        <div className="form-control mb-5  w-full ">
          <label className="label">
            <span className="label-text font-semibold ">
              Add Location name?
            </span>
          </label>
          <input
            type="text"
            defaultValue={jobData?.location}
            name="location"
            placeholder="location name"
            className=" border-green-200  input  xl:input-lg input-bordered w-full "
          />
        </div>
        {/* position name filed */}
        <div className="form-control mb-5  w-full ">
          <label className="label">
            <span className="label-text font-semibold ">
              Add Work time weekly?
            </span>
          </label>
          <input
            type="text"
            defaultValue={jobData?.hours}
            name="hours"
            placeholder="time weekly"
            className="input border-green-200  xl:input-lg input-bordered w-full "
          />
        </div>
        {/* position name filed */}
        <div className="form-control mb-5  w-full ">
          <label className="label">
            <span className="label-text font-semibold ">Add CTC (Annual)?</span>
          </label>
          <input
            type="text"
            defaultValue={jobData?.ctc}
            name="ctc"
            placeholder="position name"
            className="input border-green-200  xl:input-lg input-bordered w-full "
          />
        </div>
        {/* EXPERIENCE name filed */}
        <div className="form-control mb-5  w-full col-span-2 ">
          <label className="label">
            <span className="label-text font-semibold ">Add Experience?</span>
          </label>
          <input
            type="text"
            defaultValue={jobData?.experience}
            name="experience"
            placeholder="Experience years"
            className="input border-green-200  xl:input-lg input-bordered w-full "
          />
        </div>
      </div>
      {/* long input */}
      <div>
        <div className="mt-6 bg-yellow-50 border border-yellow-500 p-4 md:p-6">
          <label className="label">
            <span className="label-text font-semibold ">Add Description?</span>
          </label>
          <textarea
            className="rounded-xl border-yellow-400  border-2 w-full p-2"
            defaultValue={jobData?.description}
            name="description"
            placeholder="Description..."
            id=""
            rows="5"
          ></textarea>
        </div>
        {/* Responsibilities */}
        <div className="mt-6 bg-red-50 border  border-red-500 p-4 md:p-6">
          <label className="label">
            <span className="label-text font-semibold ">
              Add Responsibilities?
            </span>
          </label>
          {jobData?.responsibilities?.map((text, index) => (
            <div
              className="flex justify-center items-center gap-2 mb-4"
              key={index}
            >
              <p className="col-span-1">{index + 1}</p>
              <textarea
                className="border-red-200 rounded-xl col-span-11  border-2 w-full p-2"
                name="responsibilities"
                defaultValue={text}
                placeholder="Responsibilities..."
                id=""
              />
            </div>
          ))}
        </div>
        {/* Requirements */}
        <div className="mt-6 bg-indigo-50 border border-indigo-500 p-4 md:p-6">
          <label className="label">
            <span className="label-text font-semibold ">Add Requirements?</span>
          </label>
          {jobData?.requirements?.map((text, index) => (
            <div
              className="flex justify-center items-center gap-2 mb-4"
              key={index}
            >
              <p className="col-span-1">{index + 1}</p>
              <textarea
                className="border-indigo-200 rounded-xl col-span-11  border-2 w-full p-2"
                name="requirements"
                defaultValue={text}
                placeholder="Requirements..."
                id=""

              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditPost;
