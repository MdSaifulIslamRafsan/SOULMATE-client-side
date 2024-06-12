import { useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import Error from "../assets/Error.json";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Helmet } from "react-helmet";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>SOULMATE || Error page</title>
    </Helmet>
    <section className="flex items-center h-screen">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <div className="mb-8">
            <Lottie animationData={Error} loop={true} />
          </div>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, This Page Was {error.statusText || error.message}.</p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But{` don't`} worry, you can find plenty of other things on our
            homepage.
          </p>

          <AwesomeButton href="/" type="primary">
            Back to homepage
          </AwesomeButton>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default ErrorPage;
