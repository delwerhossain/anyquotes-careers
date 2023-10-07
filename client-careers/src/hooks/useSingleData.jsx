import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useSingleData = (id) => {
  const [data, setData] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  const handleData = () => {
    axiosSecure
      .get(`/post/${id}`)
      .then((data) => {
        setData(data?.data);
      })
      .catch((error) => {
        setData({error: true});
        console.error(error)
      
      });
  };

  useEffect(() => {
    handleData(id);
  }, []);

  return data;
};

export default useSingleData;
