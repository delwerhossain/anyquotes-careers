import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useSingleData = (id) => {
  const [data, setData] = useState([]);
    // console.log(data);
  const [axiosSecure] = useAxiosSecure();

  const handleData = () => {
    axiosSecure
      .get(`/post/${id}`)
      .then((data) => {
        setData(data?.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    handleData(id);
  }, []);

  return data;
};

export default useSingleData;
