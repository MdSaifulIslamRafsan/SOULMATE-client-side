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
import MemberCard from "../Component/SharedPage/MemberCard";
import { Helmet } from "react-helmet";

const DetailsPage = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [isPremium, isPremiumLoading] = usePremium();
  const [isAdmin, isAdminLoading] = useAdmin();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: boiDataDetails = {}, isLoading } = useQuery({
    queryKey: ["boiDataDetails", id],
    queryFn: () =>
      axiosPublic.get(`/detailsPage/${id}`).then((res) => {
        return res.data;
      }),
  });
  const { boidata, similarBoidata } = boiDataDetails;

  if (!boidata || !similarBoidata) {
    return;
  }
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
  } = boidata;

  const addToFavorites = () => {
    const userInfo = {
      contact_email: user?.email,
      biodata_id,
      name,
      permanent_division_name,
      occupation,
    };
    axiosSecure
      .post("/favouritesBiodata", userInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You have successfully added favourites Biodata",
            icon: "success",
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SOULMATE || Details Page</title>
      </Helmet>
      <div className="max-w-[1440px]  w-11/12 mx-auto mt-8">
        <div className="mx-auto">
          <div className="rounded-lg overflow-hidden">
            <div className="">
              <div className="grid grid-cols-1 mt-10 lg:grid-cols-2 gap-10">
                <div className="">
                  <img
                    src={profile_image}
                    alt="Profile Image"
                    className="w-full h-96 rounded-lg"
                  />
                  <div className="mt-4 p-6 justify-center flex flex-col gap-5 md:flex-row">
                    {!isAdmin && (
                      <AwesomeButton
                        onPress={() => addToFavorites()}
                        type="primary"
                      >
                        Add to Favorites
                      </AwesomeButton>
                    )}

                    {!(isPremium || isAdmin) && (
                      <Link to={`/checkout/${biodata_id}`}>
                        <AwesomeButton className="w-full" type="primary">
                          Request Contact Information
                        </AwesomeButton>
                      </Link>
                    )}
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-lg">Boidata id:{biodata_id}</h5>
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-5">
                    <div className="text-center py-2 rounded-md shadow-lg">
                      <img
                        src="/race.gif"
                        className="h-20 text-center w-40 inline-block p-2"
                        alt="race"
                      />
                      <p className="uppercase font-semibold">Race:</p>
                      <h3 className="text-2xl font-bold">{race}</h3>
                    </div>
                    <div className="text-center py-2 rounded-md shadow-lg">
                      <img
                        src="/age.gif"
                        className="h-20 text-center w-40 inline-block p-2"
                        alt="age"
                      />
                      <p className="uppercase font-semibold">Age:</p>
                      <h3 className="text-2xl font-bold">{age}</h3>
                    </div>
                    <div className="text-center py-2 rounded-md shadow-lg">
                      <img
                        src={biodata_type === "Male" ? "/male.gif" : "/female.gif"}
                        className="h-20 text-center w-40 inline-block p-2"
                        alt="gender"
                      />
                      <p className="uppercase font-semibold">gender:</p>
                      <h3 className="text-2xl font-bold">{biodata_type}</h3>
                    </div>
                    <div className="text-center py-2 rounded-md shadow-lg">
                      <img
                        src="/weight.gif"
                        className="h-20 text-center w-40 inline-block p-2"
                        alt="weight"
                      />
                      <p className="uppercase font-semibold">weight:</p>
                      <h3 className="text-2xl font-bold">{weight}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600">
                    <span className="font-bold">Date of Birth:</span>{" "}
                    {date_of_birth}
                  </p>
                 
                 
                  <p className="text-gray-600">
                    <span className="font-bold">Height:</span> {height}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Occupation:</span> {occupation}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">{`Father's`} Name:</span>{" "}
                    {fathers_name}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">{`Mother's`} Name:</span>{" "}
                    {mothers_name}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold"> Permanent Division:</span>{" "}
                    {permanent_division_name}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Present Division:</span>{" "}
                    {present_division_name}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Expected Partner Age:</span>{" "}
                    {expected_partner_age}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Expected Partner Height:</span>{" "}
                    {expected_partner_height}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold">Expected Partner Weight:</span>{" "}
                    {expected_partner_weight}
                  </p>
                  {(isPremium || isAdmin) && (
                    <>
                      <p className="text-gray-600">
                        <span className="font-bold">Email:</span>{" "}
                        {contact_email}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-bold">Phone No:</span>{" "}
                        {mobile_number}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">Similar Biodata</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {similarBoidata.slice(0, 3).map((boiDataInfo) => (
                <MemberCard
                  key={boiDataInfo?._id}
                  card={boiDataInfo}
                ></MemberCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
