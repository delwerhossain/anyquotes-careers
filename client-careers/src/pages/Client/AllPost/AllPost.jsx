import SortPost from "./SortPost";
import { useEffect, useState } from "react";
import Loading from "../../../Common/Loading/Loading";
import useAllData from "../../../hooks/useAllData";

const AllPost = () => {
  const [loading, setLoading] = useState(true);
  const data = useAllData();


  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, []);

  return loading ? (
    <div className="grid justify-center items-center">
      <Loading></Loading>
    </div>
  ) : (
    <div className="mt-28 ">
      <div className="grid xl:grid-cols-2 justify-center ">
        {data.map((data, b) => (
          <SortPost data={data} key={b} />
        ))}
      </div>
    </div>
  );
};

export default AllPost;
