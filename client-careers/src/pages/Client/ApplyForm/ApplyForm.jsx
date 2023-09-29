import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import SortPost from "../AllPost/SortPost";
import Loading from "../../../Common/Loading/Loading";
import { MoonLoader } from "react-spinners";
import ReCAPTCHA from "react-google-recaptcha";
import FileUpload from "../../../Components/FileUpload/FileUpload";
import useAllData from "../../../hooks/useAllData";

export const ApplyForm = () => {
  const params = useParams();
  const id = params.id;
  const [axiosSecure] = useAxiosSecure();
  const [error, setError] = useState("");
  const [jobData, setJobData] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [captcha, setCaptcha] = useState(false);

  // console.log(jobData);
  // get single data
  const data = useAllData();
  const dataFilter = () => {
    const allData = data.filter((data) => data?._id == id);
    setJobData(allData);
  };
  useEffect(() => {
    dataFilter();
  }, [data]);

  const navigate = useNavigate();
  // form submission
  const handleSubmit = (e) => {
    setBtn(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    // const link = form.link.value;
    const about = form.about.value;
    const jobName = jobData[0].jobTitle;

    const data = { name, email, number, pdfFile, about, jobName };
    // console.log({ name, email, number, about, jobName });
    axiosSecure.post("/email/sendEmail", data).then((data) => {
      // console.log(data.data.acknowledged);
      if (data.data.acknowledged) {
        toast.success("success message");
        setBtn(false);
        navigate("/success");
      } else {
        toast.error("error ");
        setError("error ");
        setBtn(false);
      }
    });
  };
  // pdf file upload function
  const handlePdfFileChange = (selectedFile) => {
    setPdfFile(selectedFile);
  };

  // captcha Check
  const captchaCheck = (value) => {
    if (value) {
      setCaptcha(true);
    } else {
      setCaptcha(false);
    }
  };

  // loading indicator
  const [loading, setLoading] = useState(true);
  const [btn, setBtn] = useState(false);

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
    <div className="xl:mt-32 mt-24   ">
      <div className="mb-16 xl:w-4/5 mx-auto">
        {jobData.map((data, b) => (
          <SortPost applyBtn={true} data={data} key={b} />
        ))}
      </div>
      {/* <div className="border-b  w-3/5  mx-auto"></div> */}
      <div className="bg-green-100 pt-1 xl:w-5/6 w-11/12 mx-auto rounded-2xl border border-green-500 mb-5">
        <form
          onSubmit={handleSubmit}
          className="xl:w-4/5 w-11/12 mx-auto mb-8 "
        >
          <Toaster position="bottom-center" />
          <div className="space-y-12">
            <div className="border-b  border-green-400 pb-12">
              <h2 className="xl:text-2xl mt-10 xl:font-semibold font-bold leading-7 text-gray-900">
                <span className="bg-green-600  text-white rounded-lg mt-10  xl:px-4 px-2 xl:py-2 py-1  ">
                  {" "}
                  {jobData[0]?.jobTitle}
                </span>{" "}
                For Apply
              </h2>

              <div className="xl:mt-10 mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      type="text"
                      name="name"
                      id="full-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      id="number"
                      name="number"
                      type="text"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* <div className="sm:col-span-4">
                  <label
                    htmlFor="link"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    CV Drive Link
                  </label>
                  <div className="mt-2">
                    <input
                      id="link"
                      name="link"
                      type="text"
                      autoComplete="link"
                      className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4 bg-green-50 py-4 px-3 rounded-xl">
                  <label
                    htmlFor="link"
                    className="block  rounded-xl font-medium leading-6 text-gray-900 bg-white p-3  "
                  >
                    Please email your CV with a Cover Letter via email to :
                    <a
                      href="mailto:hr@anyquotes.co.uk"
                      className="text-blue-700 font-bold"
                    >
                      {" "}
                      hr@anyquotes.co.uk
                    </a>
                  </label>
                  <a
                    href="mailto:hr@anyquotes.co.uk"
                    className="btn btn-primary mt-3"
                  >
                    Send on mail{" "}
                  </a>
                </div> */}

                {/* pdf file upload option */}
                <div className="sm:col-span-4 bg-green-50 py-4 px-3 rounded-xl">
                  <label
                    htmlFor="file"
                    className="block  rounded-xl font-medium leading-6 text-gray-900 bg-white p-3  "
                  >
                    Please upload your CV{" "}
                    <span className="text-primary font-bold">(PDF Format)</span>
                    :
                  </label>
                  <div className="mt-2">
                    <FileUpload onPdfFileChange={handlePdfFileChange} />
                    {/* <input
                      id="file"
                      name="file"
                      type="file"
                      accept=".pdf"
                      className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    /> */}
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      required
                      id="about"
                      name="about"
                      rows={3}
                      className=" block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                  {error && (
                    <div>
                      <h5 className="text-red-500">{error}</h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 ">
            {/* ReCAPTCHA verification */}
            <div className="grid gap-5 justify-end mb-3">
              <ReCAPTCHA
                sitekey="6LfO7ygoAAAAAL0wZ0wRsrMTxe2LDm08gagMnksG"
                onChange={captchaCheck}
              />
              {btn && (
                <progress className="progress progress-success w-full"></progress>
              )}
            </div>
            <div className="flex items-center justify-end gap-x-6">
              <Link
                to={"/"}
                type="button"
                className=" font-semibold leading-6 text-gray-900"
              >
                Cancel
              </Link>
              <button
                disabled={!captcha}
                type="submit"
                className=" disabled:bg-slate-300 flex justify-center items-center gap-3 rounded-md  bg-green-800 px-3 py-2 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Apply
                {btn && <MoonLoader size={20} color="#FFFF" loading />}
                <span className="loading loading-spinner"></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
