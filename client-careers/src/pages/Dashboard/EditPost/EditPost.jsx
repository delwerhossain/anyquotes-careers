import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import useAllData from "../../../hooks/useAllData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import useDeletePost from "../../../hooks/useDeletePost";

const EditPost = () => {
  // user data
  const { user } = useAuth();
  // post delete hook
  const { handleDelete } = useDeletePost();
  // time
  const timeNow = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  //axios.request
  const [axiosSecure] = useAxiosSecure();
  // params for filtering
  const params = useParams();
  const id = params.id;
  const data = useAllData();
  // get the edit data
  let existingJobData = data.filter((data) => data?._id == id);

  // main job  data STATE
  const [jobData, setJobData] = useState({
    jobTitle: existingJobData[0]?.jobTitle || "",
    location: existingJobData[0]?.location || "",
    lastEditUser: existingJobData[0]?.lastEditUser || "",
    editTime: existingJobData[0]?.editTime || "",
    hours: existingJobData[0]?.hours || "",
    ctc: existingJobData[0]?.ctc || "",
    experience: existingJobData[0]?.experience || "",
    description: existingJobData[0]?.description || "",
    responsibilities: existingJobData[0]?.responsibilities || [""],
    requirements: existingJobData[0]?.requirements || [""],
  });

  // load job data
  useEffect(() => {
    setJobData({
      jobTitle: existingJobData[0]?.jobTitle || "",
      location: existingJobData[0]?.location || "",
      lastEditUser: user?.email,
      editTime: timeNow,
      hours: existingJobData[0]?.hours || "",
      ctc: existingJobData[0]?.ctc || "",
      experience: existingJobData[0]?.experience || "",
      description: existingJobData[0]?.description || "",
      responsibilities: existingJobData[0]?.responsibilities || [""],
      requirements: existingJobData[0]?.requirements || [""],
    });
  }, [data]);

  // console.log(jobData);
  // Responsibilities;

  // Function to add a new requirement input field
  const addResponsibilities = () => {
    setJobData({
      ...jobData,
      responsibilities: [...jobData.responsibilities, ""],
    });
  };

  // Function to remove a requirement input field
  const removeResponsibilities = (index) => {
    const updatedResponsibilities = [...jobData.responsibilities];
    updatedResponsibilities.splice(index, 1);
    setJobData({
      ...jobData,
      responsibilities: updatedResponsibilities,
    });
  };

  // Function to handle changes in requirement input fields
  const handleResponsibilities = (index, value) => {
    const updatedResponsibilities = [...jobData.responsibilities];
    updatedResponsibilities[index] = value;
    setJobData({
      ...jobData,
      responsibilities: updatedResponsibilities,
    });
  };

  ///////////////////////////////////
  // Requirement custom input fields

  // Function to add a new requirement input field
  const addRequirement = () => {
    setJobData({
      ...jobData,
      requirements: [...jobData.requirements, ""],
    });
  };

  // Function to remove a requirement input field
  const removeRequirement = (index) => {
    const updatedRequirements = [...jobData.requirements];
    updatedRequirements.splice(index, 1);
    setJobData({
      ...jobData,
      requirements: updatedRequirements,
    });
  };

  // Function to handle changes in requirement input fields
  const handleRequirementChange = (index, value) => {
    const updatedRequirements = [...jobData.requirements];
    updatedRequirements[index] = value;
    setJobData({
      ...jobData,
      requirements: updatedRequirements,
    });
  };

  // edit updates the functionality

  const update = () => {
    axiosSecure.put(`/post/${id}`, jobData).then((data) => {
      if (data.data.modifiedCount > 0) {
        toast.success("update post data");
      } else {
        toast.error("something wrong please contact with Developer");
      }
    });
  };
  return (
    <div className="mt-32 mb-10 w-10/12 mx-auto">
      <div className="grid w-full justify-between items-center">
        <button
          onClick={() => handleDelete(id)}
          className="ml-2  bg-red-600 hover:bg-red-700 hover:border-red-900 btn btn-ghost border-red-700 text-white "
        >
          delete
        </button>
      </div>
      <Toaster />
      <div className="mt-6 bg-green-50 border border-green-500 p-4 md:p-6  grid gap-4 lg:gap-10 md:grid-cols-2 ">
        {/* position name filed */}
        <div className="form-control mb-5  w-full ">
          <label className="label">
            <span className="label-text font-semibold ">
              Add position name?
            </span>
          </label>
          <input
            onChange={(e) =>
              setJobData({
                ...jobData,
                jobTitle: e.target.value,
              })
            }
            type="text"
            defaultValue={jobData?.jobTitle}
            placeholder="position  name"
            name="jobTitle"
            className="border-green-200 input  font-semibold xl:input-lg input-bordered w-full "

            // className="input  xl:input-lg  input-bordered w-full "
          />
        </div>
        {/* location name filed */}
        <div className="form-control mb-5  w-full ">
          <label className="label">
            <span className="label-text font-semibold ">
              Add Location name?
            </span>
          </label>
          <input
            type="text"
            onChange={(e) =>
              setJobData({
                ...jobData,
                location: e.target.value,
              })
            }
            defaultValue={jobData?.location}
            name="location"
            placeholder="location name"
            className=" border-green-200  input font-semibold   xl:input-lg input-bordered w-full "
          />
        </div>
        {/* working time  name filed */}
        <div className="form-control mb-5  w-full ">
          <label className="label">
            <span className="label-text font-semibold ">
              Add Work time weekly?
            </span>
          </label>
          <input
            type="text"
            onChange={(e) =>
              setJobData({
                ...jobData,
                hours: e.target.value,
              })
            }
            defaultValue={jobData?.hours}
            name="hours"
            placeholder="time weekly"
            className="input font-semibold  border-green-200  xl:input-lg input-bordered w-full "
          />
        </div>
        {/* position name filed */}
        <div className="form-control mb-5  w-full ">
          <label className="label">
            <span className="label-text font-semibold ">Add CTC (Annual)?</span>
          </label>
          <input
            type="text"
            onChange={(e) =>
              setJobData({
                ...jobData,
                ctc: e.target.value,
              })
            }
            defaultValue={jobData?.ctc}
            name="ctc"
            placeholder="position name"
            className="input  font-semibold border-green-200  xl:input-lg input-bordered w-full "
          />
        </div>
        {/* EXPERIENCE name filed */}
        <div className="form-control mb-5  w-full col-span-2 ">
          <label className="label">
            <span className="label-text font-semibold ">Add Experience?</span>
          </label>
          <input
            onChange={(e) =>
              setJobData({
                ...jobData,
                experience: e.target.value,
              })
            }
            type="text"
            defaultValue={jobData?.experience}
            name="experience"
            placeholder="Experience years"
            className="input  font-semibold border-green-200  xl:input-lg input-bordered w-full "
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
            onChange={(e) =>
              setJobData({
                ...jobData,
                description: e.target.value,
              })
            }
            className=" font-semibold rounded-xl border-yellow-400  border-2 w-full p-2"
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
                className=" font-semibold border-indigo-200 rounded-xl col-span-11 border-2 w-full p-2"
                name="responsibilities"
                value={text}
                placeholder="Responsibilities..."
                onChange={(e) => handleResponsibilities(index, e.target.value)}
              />
              {jobData?.responsibilities?.length > 1 && (
                <button
                  className="btn btn-error"
                  onClick={() => removeResponsibilities(index)}
                >
                  - Remove
                </button>
              )}
              {index === jobData?.responsibilities.length - 1 && (
                <button
                  className="btn btn-warning block"
                  onClick={addResponsibilities}
                >
                  + Add One More
                </button>
              )}
            </div>
          ))}
        </div>
        {/* Requirements */}
        <div className="mt-6 bg-indigo-50 border border-indigo-500 p-4 md:p-6">
          <label className="label">
            <span className="label-text font-semibold">Add Requirements?</span>
          </label>
          {jobData?.requirements?.map((text, index) => (
            <div
              className="flex justify-center items-center gap-2 mb-4"
              key={index}
            >
              <p className="col-span-1">{index + 1}</p>
              <textarea
                className=" font-semibold border-indigo-200 rounded-xl col-span-11 border-2 w-full p-2"
                name="requirements"
                value={text}
                placeholder="Requirements..."
                onChange={(e) => handleRequirementChange(index, e.target.value)}
              />
              {jobData?.requirements.length > 1 && (
                <button
                  className="btn btn-error"
                  onClick={() => removeRequirement(index)}
                >
                  - Remove
                </button>
              )}
              {index === jobData?.requirements.length - 1 && (
                <button
                  className="block btn btn-warning "
                  onClick={addRequirement}
                >
                  + Add One More
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className=" grid justify-end ">
        {" "}
        <button
          onClick={update}
          className="mx-auto mt-8  btn btn-success text-white bg-green-600 btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditPost;
