import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useAllData = () => {
  const [data, setData] = useState([]);
//   console.log(data);
  const [axiosSecure] = useAxiosSecure();

  const handleData = () => {
    axiosSecure
      .get("/all")
        .then((data) => {
           setData(data?.data);
        })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    handleData();
  }, []);

  return data;
};

export default useAllData;
