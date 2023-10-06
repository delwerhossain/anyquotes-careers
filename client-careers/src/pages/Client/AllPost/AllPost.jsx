import SortPost from "./SortPost";
import { useEffect, useState } from "react";
import Loading from "../../../Common/Loading/Loading";
import useAllData from "../../../hooks/useAllData";

const AllPost = () => {
  const [loading, setLoading] = useState(true);
  const data = useAllData();
  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
    else {
      setLoading(true);
    }
  }, [data]);

  return loading ? (
    <div className="grid justify-center items-center">
      <Loading></Loading>
    </div>
  ) : (
    <div className="mt-28 ">
      <div className="grid w-full md:grid-cols-2 items-center justify-center ">
        {data.map((data, b) => (
          <SortPost data={data} key={b} />
        ))}
      </div>
    </div>
  );
};

export default AllPost;
