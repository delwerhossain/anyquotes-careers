const ToyRow = ({ toy, index }) => {
  // console.log(toy);
  const { name, number, blood, startTime, endTime, sortCode } = toy;

  return (
    <tr className="text-xl font-medium bg-black  hover">
      <td className="">{index + 1}</td>
      <td className="">{name}</td>
      <td className="">{number}</td>
      <td className="">{blood}</td>
      <td className="">{startTime}</td>
      <td className="">{endTime}</td>
      <td className="">{sortCode}</td>

      {/* <td>
        <Link to={`/toy/${_id}`}>
          <button className="btn btn-outline btn-primary">View Details</button>
        </Link>
      </td> */}
    </tr>
  );
};

export default ToyRow;
