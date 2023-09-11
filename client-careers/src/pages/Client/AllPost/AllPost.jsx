import SortPost from "./SortPost";
import sortData from "./sortPost.json";


const AllPost = () => {
  
  return (
    <div className="mt-28 ">
      <div className="grid xl:grid-cols-2 justify-center items-center">
        {sortData.map((data, b) => (
          <SortPost data={data} key={b} />
        ))}
      </div>
    </div>
  );
};

export default AllPost;
