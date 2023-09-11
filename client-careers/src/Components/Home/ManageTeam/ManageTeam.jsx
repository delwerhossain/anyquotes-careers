import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const team = [
  {
    id: 1,
    name: "Abdullah Al Mamun",
    position: "Manager (Customer Service)",
    img: "/image/team-1.webp",
  },
  {
    id: 2,
    name: "Saima Siddiqua",
    position: "Manager (HR)",
    img: "/image/team-2.webp",
  },
  {
    id: 3,
    name: "Mohammed Rased Iqbal",
    position: "Q T Supervisor",
    img: "/image/team-3.webp",
  },
  {
    id: 4,
    name: "Shahed Iqbal",
    position: "Q T Supervisor",
    img: "/image/team-4.webp",
  },
];

const ManageTeam = () => {
  return (
    <div data-aos="fade-up-right" className="mt-20">
      <h1 className="md:text-5xl text-slate-700 text-3xl font-bold text-center grid grid-col-1 justify-center my-12 bg-orange-50 rounded-xl lg:py-2 py-3 lg:w-2/3 w-11/12 mx-auto">
        <span>
          {" "}
          Our Management <span className="text-orange-600">Team</span>
        </span>
        {/* <span className="w-full border-b-2 border-solid border-orange-600 inline-block mt-3"></span> */}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 justify-center items-center mb-8">
        {team.map((data) => (
          <div
            key={data.id}
            className="bg-slate-50 hover:bg-orange-100 md:w-full w-11/12 mx-auto mt-4 rounded-lg border  border-orange-600"
          >
            <div className="card shadow-md">
              <img
                src={data.img}
                alt={data.name}
                width={300}
                height={200}
                className="rounded-t-lg w-full"
              />
              <div className="card-body p-6">
                <h2 className="font-bold text-slate-600 text-xl mb-2">
                  {data.name}
                </h2>
                <p className="text-slate-500 mb-2">{data.position}</p>

                {/* icon */}
                <div className="social mt-4 flex justify-around items-center bg-white py-2 rounded-xl">
                  <a className="text-orange-600">
                    <FaTwitter size={"1.5em"} />
                  </a>
                  <a className="text-orange-600">
                    <FaFacebook size={"1.5em"} />
                  </a>
                  <a className="text-orange-600">
                    <FaInstagram size={"1.5em"} />
                  </a>
                  <a className="text-orange-600">
                    <FaLinkedin size={"1.5em"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageTeam;
