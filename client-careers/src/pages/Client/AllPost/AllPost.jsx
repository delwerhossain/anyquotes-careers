import SortPost from "./SortPost";
import sortData from "../../../data/sortPost.json";
import { useEffect, useState } from "react";
import Loading from "../../../Common/Loading/Loading";


const AllPost = () => {
  // console.log(sortData);
  const [loading, setLoading] = useState(true);

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
        {sortData.map((data, b) => (
          <SortPost data={data} key={b} />
        ))}
      </div>
    </div>
  );
};

export default AllPost;
