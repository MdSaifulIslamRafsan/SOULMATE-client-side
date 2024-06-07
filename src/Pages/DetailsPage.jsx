import { Vortex } from "react-loader-spinner";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const DetailsPage = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: boiDataDetails = [], isLoading } = useQuery({
    queryKey: ["boiDatas"],
    queryFn: () =>
      axiosPublic.get(`/detailsPage/${id}`).then((res) => {
        return res.data;
      }),
  });
  const {
    _id,
    biodata_id,
    biodata_type,
    name,
    profile_image,
    date_of_birth,
    height,
    weight,
    age,
    occupation,
    race,
    fathers_name,
    mothers_name,
    permanent_division_name,
    present_division_name,
    expected_partner_age,
    expected_partner_height,
    expected_partner_weight,
    contact_email,
    mobile_number,
  } = boiDataDetails;


const addToFavorites = () => {
  const userInfo = {
    biodata_id,
    name,
    permanent_division_name,
    occupation
  }
  axiosSecure.post('/favouritesBiodata', userInfo)
  .then((res)=> {
    if (res.data.insertedId) {
      Swal.fire({
          title: "Good job!",
          text: "You have successfully added favourites Biodata",
          icon: "success"
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
  
}




  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }
  return (
    <div className="max-w-[1440px]  lg:w-10/12 w-11/12 mx-auto mt-8">
      <div className="mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <div className="flex items-center">
              <img
                src={profile_image}
                alt="Profile Image"
                className="w-1/2 h-96 rounded-lg mr-10"
              />
              <div>
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-gray-600">Date of Birth: {date_of_birth}</p>
                <p className="text-gray-600">Age: {age}</p>
                <p className="text-gray-600">Height: {height}</p>
                <p className="text-gray-600">Weight: {weight}</p>
                <p className="text-gray-600">Occupation: {occupation}</p>
                <p className="text-gray-600">Race: {race}</p>
                <p className="text-gray-600">
                  {`Father's`} Name: {fathers_name}
                </p>
                <p className="text-gray-600">
                  {`Mother's`} Name: {mothers_name}
                </p>
                <p className="text-gray-600">
                  Permanent Division: {permanent_division_name}
                </p>
                <p className="text-gray-600">
                  Present Division: {present_division_name}
                </p>
                <p className="text-gray-600">
                  Expected Partner Age: {expected_partner_age}
                </p>
                <p className="text-gray-600">
                  Expected Partner Height: {expected_partner_height}
                </p>
                <p className="text-gray-600">
                  Expected Partner Weight: {expected_partner_weight}
                </p>
              </div>
            </div>
            <div className="mt-4 space-x-3">
              <AwesomeButton onPress={() => addToFavorites()}  type="primary">Add to Favorites</AwesomeButton>
              <AwesomeButton onPress={() => requestContactInfo()} type="primary">
                Request Contact Information
              </AwesomeButton>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Similar Biodata</h2>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
