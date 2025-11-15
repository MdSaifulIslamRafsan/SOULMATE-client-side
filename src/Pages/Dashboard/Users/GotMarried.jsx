import { AwesomeButton } from "react-awesome-button";
import { useForm } from "react-hook-form";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const GotMarried = () => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axiosSecure
      .post(`/successStory`, data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your story has been submitted successfully.",
          });
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire({
            title: "Duplicate Entry",
            text: error.response.data.message,
            icon: "warning",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: error.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SOULMATE || Got married</title>
      </Helmet>
      <section className="">
        <div className="bg-white border-2 p-8 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold mb-8">Share Your Success Story</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="selfBiodataId"
                >
                  Self Biodata ID
                </label>
                <input
                  type="number"
                  id="selfBiodataId"
                  name="selfBiodataId"
                  {...register("selfBiodataId", { required: true })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="partnerBiodataId"
                >
                  Partner Biodata ID
                </label>
                <input
                  type="number"
                  name="partnerBiodataId"
                  id="partnerBiodataId"
                  {...register("partnerBiodataId", { required: true })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="rating"
                >
                  Rating
                </label>
                <select
                  id="rating"
                  name="reviewStar"
                  {...register("reviewStar", { required: true })}
                  className="block bg-white w-full p-2 border rounded-md"
                >
                  <option value="">All Ratings</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="marriageDate"
                >
                  Marriage Date
                </label>
                <input
                  type="date"
                  id="marriageDate"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  name="marriageDate"
                  {...register("marriageDate", { required: true })}
                />
              </div>
              <div className="mb-4 lg:col-span-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="coupleImage"
                >
                  Couple Image
                </label>
                <input
                  type="text"
                  id="coupleImage"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="coupleImage"
                  {...register("coupleImage", { required: true })}
                />
              </div>

              <div className="mb-4 lg:col-span-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="successStory"
                >
                  Success Story
                </label>
                <textarea
                  id="successStory"
                  {...register("successStoryText", { required: true })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <AwesomeButton className="w-1/6" type="primary">
                Submit
              </AwesomeButton>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default GotMarried;
