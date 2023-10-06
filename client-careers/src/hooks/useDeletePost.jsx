import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";

const useDeletePost = () => {
  // redirect route
  const navigate = useNavigate();

  //axios.request
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/post/${id}`).then((data) => {
          if (data.data.acknowledged) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            navigate("/");
          }
        });
      }
    });
  };
  return { handleDelete };
};

export default useDeletePost;