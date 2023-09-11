import { BiTargetLock } from "react-icons/bi";
import { LuTarget } from "react-icons/lu";

const Cit = () => {
  return (
    <div data-aos="fade-left" id="cit" className="">
      <div className="mx-auto text-center">
        <h3 className="bg-blue-50 text-orange-600 py-2 lg:w-1/5 w-3/5 mx-auto text-center font-bold lg:my-8 my-8 rounded-2xl ">
          ASSOCIATED WITH
        </h3>
        <h2 className="lg:my-6 lg:text-5xl text-3xl text-slate-700 font-bold ">
          Chowdhury Info Tech
        </h2>
      </div>
      <div className="md:mt-10 mt-4">
        <img
          className="rounded-lg border border-orange-600 md:w-full w-11/12 mx-auto"
          src="/image/us.webp"
          alt=" Chowdhury Info Tech "
          width={1400}
          height={800}
        />{" "}
      </div>
      <div className="bg-blue-50  rounded-xl px-4 py-8 my-10 lg:flex justify-center items-center text-slate-600 md:w-full w-11/12 mx-auto">
        <div className="flex ">
          <div className="my-4 mx-2">
            <BiTargetLock color="#f05c0c" size={"2em"} />
          </div>
          <div>
            <h3 className="text-xl font-bold my-4">Our Vision</h3>
            <p className=" w-10/12">
              {" "}
              To be Bangladesh’s most admired & progressive group of companies.
              For that we operate, to empower partners and the community to make
              meaningful long-term relationships through the trust we earn in
              every deal.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="my-4 mx-2 text-orange-600">
            <LuTarget color="#f05c0c" size={"2em"} />
          </div>
          <div>
            <h3 className="text-xl font-bold my-4 ">Our Mission</h3>
            <p className=" w-10/12">
              Equipage businesses with value-driven goals and excel across all
              ventures. Also, provide maximum satisfaction to our consumers with
              a high standard of products and services. And be a part of social
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cit;
