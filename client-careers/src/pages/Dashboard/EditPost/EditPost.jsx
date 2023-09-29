import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAllData from "../../../hooks/useAllData";

const EditPost = () => {
  const params = useParams();
  const id = params.id;
  const [jobData, setJobData] = useState([]);

console.log(jobData);
  // single
  const data = useAllData();
  const dataFilter = () => {
    const allData = data.filter((data) => data?._id == id);
    setJobData(allData);
  };
  useEffect(() => {
    dataFilter();
  }, [data]);

  return (
    <div className="mt-28">
      <h1 className="text-4xl">post edit</h1>
    </div>
  );
};

export default EditPost;
