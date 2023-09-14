import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      id="spinner"
      className="sweet-loading h-screen flex justify-center items-center"
    >
      <MoonLoader color="#36d7b7" loading size={250} speedMultiplier={2} />
    </div>
  );
};

export default Loading;
