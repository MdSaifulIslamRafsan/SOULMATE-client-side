import { Vortex } from "react-loader-spinner";
import useUserBoidata from "../../../Hooks/useUserBoidata";


const ViewBoidata = () => {
    const {userBoidata: biodata , isLoading} = useUserBoidata();
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
        <div className="mx-auto my-8 md:mr-5 bg-white rounded-xl shadow-md overflow-hidden ">
        <div className="">
          <div className="">
            <img className=" w-full h-72 object-cover " src={biodata?.profile_image} alt={biodata?.name} />
          </div>
          <div className="p-8 w-full">
            <div className="grid lg:grid-cols-2 md:gap-4">
              <div>
                <h1 className="block mt-1 text-xl leading-tight font-bold text-black">{biodata?.name}</h1>
                <p className="mt-2 text-gray-500">Gender: {biodata?.biodata_type}</p>
                <p className="mt-2 text-gray-500">Date of Birth: {biodata?.date_of_birth}</p>
                <p className="mt-2 text-gray-500">Height: {biodata?.height}</p>
                <p className="mt-2 text-gray-500">Weight: {biodata?.weight}</p>
                <p className="mt-2 text-gray-500">Age: {biodata?.age}</p>
                <p className="mt-2 text-gray-500">Occupation: {biodata.occupation}</p>
                <p className="mt-2 text-gray-500">Race: {biodata?.race}</p>
                <p className="mt-2 text-gray-500">{`Father's`} Name: {biodata?.fathers_name}</p>
                <p className="mt-2 text-gray-500">{`Mother's`} Name: {biodata?.mothers_name}</p>
              </div>
              <div>
                <p className="mt-2 text-gray-500">Permanent Division: {biodata?.permanent_division_name}</p>
                <p className="mt-2 text-gray-500">Present Division: {biodata?.present_division_name}</p>
                <p className="mt-2 text-gray-500">Expected Partner Age: {biodata?.expected_partner_age}</p>
                <p className="mt-2 text-gray-500">Expected Partner Height: {biodata?.expected_partner_height}</p>
                <p className="mt-2 text-gray-500">Expected Partner Weight: {biodata?.expected_partner_weight}</p>
                <p className="mt-2 text-gray-500">Contact Email: {biodata?.contact_email}</p>
                <p className="mt-2 text-gray-500">Mobile Number: {biodata?.mobile_number}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ViewBoidata;