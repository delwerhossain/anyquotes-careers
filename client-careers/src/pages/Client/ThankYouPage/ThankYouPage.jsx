import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../Common/Loading/Loading";

function ThankYouPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }
  }, []);

  return loading ? (
    <div className="grid justify-center items-center">
      <Loading></Loading>
    </div>
  ) : (
    <div className="bg-gradient-to-r from-blue-400 to-green-300 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Your job application to Any Quotes company has been successfully
          submitted. We appreciate your interest in joining our team.
        </p>
        <Link
          className="btn btn-success text-white bg-green-600"
          to={"/"}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
