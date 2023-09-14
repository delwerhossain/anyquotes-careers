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
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        {/* <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title></title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:700"
          rel="stylesheet"
          type="text/css"
        />
        <style>
          {`
            @import url(//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css);
            @import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);
          `}
        </style>
        <link
          rel="stylesheet"
          href="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/default_thank_you.css"
        />
        <script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/jquery-1.9.1.min.js"></script>
        <script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/html5shiv.js"></script>
      </head>
      <body className="mt-16">
        <header className="site-header" id="header">
          <h1 className="site-header__title" data-lead-id="site-header-title">
            THANK YOU!
          </h1>
        </header>

        <div className="main-content">
          <i className="fa fa-check main-content__checkmark" id="checkmark"></i>
          <p className="main-content__body" data-lead-id="main-content-body">
            Passionate about joining your dynamic team at Any Quotes, where I
            can leverage my skills and enthusiasm to contribute to your mission.
          </p>
        </div>
        <div>
          <Link to={"/"} className="btn  text-white btn-lg mt-8">
            <span
              className="text-white
            "
            >
              {" "}
              Go To Home
            </span>
          </Link>
        </div>

        <footer className="site-footer" id="footer">
          <p className="site-footer__fineprint" id="fineprint">
            © 2023 ANY QUOTES - All Right Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}

export default ThankYouPage;
