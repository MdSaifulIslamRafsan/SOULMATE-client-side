
import { AwesomeButton } from "react-awesome-button";
import { useForm } from "react-hook-form";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import Swal from "sweetalert2";

const GotMarried = () => {
  const axiosSecure = useAxiosSecure();
    const {
      register,
      handleSubmit,
      reset
    } = useForm();
   

    const onSubmit = (data) => {
      axiosSecure.post(`/successStory` , data)
      .then((res)=>{
       if(res.data.insertedId){
        reset()
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your story has been submitted successfully.',
        });
       }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire({
            title: 'Duplicate Entry',
            text: error.response.data.message,
            icon: 'warning'
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: error.message,
            icon: 'error'
          });
        }
      });
    };


    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Share Your Success Story
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          >
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
                htmlFor="coupleImage"
              >
                Couple Image
              </label>
            <input type="text" id="coupleImage" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" name="coupleImage" {...register("coupleImage", { required: true })}/>
              
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
          className="block w-full p-2 border rounded-md"
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
            <input type="date" id="marriageDate" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 " name="marriageDate" {...register("marriageDate", { required: true })}/>
              
            </div>
           
            <div className="mb-4">
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
            <AwesomeButton className="w-full" type="primary">Submit</AwesomeButton>
          </form>
        </div>
      </section>
    );
  };

export default GotMarried;
