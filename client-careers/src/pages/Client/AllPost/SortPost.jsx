const SortPost = ({ data }) => {
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
  } = data;
  return (
    <div className="lg:m-6 m-2 lg:p-10 px-3 py-5 border border-green-200 rounded-xl hover:bg-slate-50 relative ">
      <h5 className="border rounded p-1 w-40 hover:bg-green-50 border-green-400 text-center text-sm  text-slate-700 font-semibold">
        <span className="font-bold">Post Date :</span> <br /> {publishTime}
      </h5>
      <div className="mt-6 text-slate-700">
        <h3 className="text-2xl font-semibold lg:mb-6 mb-2  ">{jobTitle}</h3>
        <h6 className="font-bold text-slate-500"> Location : {location}</h6>
        <div className="mt-7 grid lg:flex justify-around items-center  gap-8 p-3 lg:p-6 bg-green-50 border border-green-200 rounded-xl">
          <div className="">
            {" "}
            <p className="font-bold text-slate-500 text-lg lg:mb-6 mb-2 ">
              Start Date
            </p>
            <p className="font-semibold "> {hours}</p>
          </div>

          <div>
            {" "}
            <p className="font-bold text-slate-500 text-lg lg:mb-6 mb-2 ">
              CTC (Annual)
            </p>
            <p className="font-semibold ">${ctc}</p>
          </div>
          <div>
            {" "}
            <p className="font-bold text-slate-500 text-lg lg:mb-6 mb-2 ">
              EXPERIENCE
            </p>
            <p className="font-semibold ">{experience}</p>
          </div>
        </div>
      </div>
      <div className="h-20">
        <button className="btn mt-8 btn-warning absolute right-10  bottom-5">
          View Details
        </button>
      </div>

      <div className="p-6">
        <p>
          <span className="font-bold">Description : </span>
          {description}
        </p>
        <p>
          <span>Responsibilities : </span>
          {responsibilities}
        </p>
        <p>
          <span>Requirements : </span>
          {requirements}
        </p>
      </div>
    </div>
  );
};

export default SortPost;
