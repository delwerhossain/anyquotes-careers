import { useParams } from "react-router-dom";
import sortData from "../../../data/sortPost.json";
import { useEffect, useState } from "react";

const EditPost = () => {
  const params = useParams();
  const id = params.id;
  const [jobData, setJobData] = useState([]);

  // single
  const dataFilter = () => {
    const data = sortData.filter((data) => data?.id == id);
    setJobData(data);
  };
  useEffect(() => {
    dataFilter();
  }, [sortData]);
  console.log(jobData);

  return (
    <div className="mt-28">
      <h1 className="text-4xl">post edit</h1>
    </div>
  );
};

export default EditPost;
