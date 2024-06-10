import { Vortex } from "react-loader-spinner";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AwesomeButton } from "react-awesome-button";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import usePremium from "../Hooks/usePremium";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const DetailsPage = () => {
  const axiosPublic = useAxiosPublic();
  const {user} = useAuth();
  const [isPremium , isPremiumLoading] = usePremium();
  const [isAdmin , isAdminLoading] = useAdmin();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: boiDataDetails = {}, isLoading , refetch } = useQuery({
    queryKey: ["boiDataDetails"],
    queryFn: () =>
      axiosPublic.get(`/detailsPage/${id}`).then((res) => {
        return res.data;
      }),
  });
refetch();
  const {
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
    contact_email: user?.email,
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



  if (isLoading || isPremiumLoading || isAdminLoading) {
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
          <div className="">
            <div className="flex gap-5 flex-col lg:flex-row p-5">
              <img
                src={profile_image}
                alt="Profile Image"
                className="lg:w-1/2 w-full h-96 rounded-lg lg:mr-10"
              />
              <div>
                <h5 className="font-bold text-lg">Boidata id:{biodata_id}</h5>
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-gray-600"><span className="font-bold">Date of Birth:</span> {date_of_birth}</p>
                <p className="text-gray-600"><span className="font-bold">Gender:</span> {biodata_type}</p>
                <p className="text-gray-600"><span className="font-bold">Age:</span> {age}</p>
                <p className="text-gray-600"><span className="font-bold">Height:</span> {height}</p>
                <p className="text-gray-600"><span className="font-bold">Weight:</span> {weight}</p>
                <p className="text-gray-600"><span className="font-bold">Occupation:</span> {occupation}</p>
                <p className="text-gray-600"><span className="font-bold">Race:</span> {race}</p>
                <p className="text-gray-600">
                  <span className="font-bold">{`Father's`} Name:</span> {fathers_name}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">{`Mother's`} Name:</span> {mothers_name}
                </p>
                <p className="text-gray-600">
                 <span className="font-bold"> Permanent Division:</span> {permanent_division_name}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Present Division:</span> {present_division_name}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Expected Partner Age:</span> {expected_partner_age}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Expected Partner Height:</span> {expected_partner_height}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Expected Partner Weight:</span> {expected_partner_weight}
                </p>
                {(isPremium || isAdmin) && <>
                  <p className="text-gray-600">
                  <span className="font-bold">Email:</span> {contact_email}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Phone No:</span> {mobile_number}
                </p>
                </>}
              </div>
            </div>
            <div className="mt-4 p-6 justify-center flex flex-col gap-5 md:flex-row">
              {
                !isAdmin && <AwesomeButton  onPress={() => addToFavorites()}  type="primary">Add to Favorites</AwesomeButton>
              }
              
              {!(isPremium || isAdmin) && <Link  to={`/checkout/${biodata_id}`}><AwesomeButton className="w-full" type="primary">
                Request Contact Information
              </AwesomeButton></Link>}
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
