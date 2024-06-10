import { Vortex } from "react-loader-spinner";
import useUserBoidata from "../../../Hooks/useUserBoidata";
import { AwesomeButton } from "react-awesome-button";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ViewBoidata = () => {
    const {userBoidata: biodata , isLoading} = useUserBoidata();
    const axiosSecure = useAxiosSecure();

    const handleBoidataPremium = () =>{
        Swal.fire({
            text: "Are you sure you want to upgrade to premium?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, premium  it!"
          }).then((result) => {
            if (result.isConfirmed) {
                const premiumInfo = {
                    biodata_id:  biodata?.biodata_id
                }
                axiosSecure.post('/premiumRequest', premiumInfo)
                .then((res)=>{
                    if(res.data.insertedId){
                        Swal.fire({
                            title: "Request Successful!",
                            text: "Your request has been submitted. Please wait for admin approval.",
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
        <div className="mx-auto my-8 md:mr-5 bg-white rounded-xl shadow-md overflow-hidden ">
        <div className="">
          <div className="">
            <img className=" w-full h-72 object-cover " src={biodata?.profile_image} alt={biodata?.name} />
          </div>
          <div className="p-8 w-full">
            <div className="grid lg:grid-cols-2 md:gap-4">
              <div>
                <h1 className="block mt-1 text-xl leading-tight font-bold text-black">{biodata?.name}</h1>
                <p className="mt-2 text-gray-500"><span className="font-bold">Gender:</span> {biodata?.biodata_type}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">Date of Birth:</span> {biodata?.date_of_birth}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">Height:</span> {biodata?.height}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">Weight:</span> {biodata?.weight}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">Age:</span> {biodata?.age}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">Occupation:</span> {biodata.occupation}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">Race:</span> {biodata?.race}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">{`Father's`} Name:</span> {biodata?.fathers_name}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">{`Mother's`} Name:</span> {biodata?.mothers_name}</p>
              </div>
              <div>
                <p className="mt-2 text-gray-500"><span className="font-bold">Permanent Division:</span> {biodata?.permanent_division_name}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">Present Division:</span> {biodata?.present_division_name}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">Expected Partner Age:</span> {biodata?.expected_partner_age}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">Expected Partner Height:</span> {biodata?.expected_partner_height}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">Expected Partner Weight:</span> {biodata?.expected_partner_weight}</p>
                <p className="mt-2 text-gray-500"><span className="font-bold">Contact Email:</span> {biodata?.contact_email}</p>
                <p className="mt-2 mb-5 text-gray-500"><span className="font-bold">Mobile Number:</span> {biodata?.mobile_number}</p>
                {
                   !(biodata?.role === 'premium')  && <AwesomeButton onPress={handleBoidataPremium} type="primary">biodata premium Request</AwesomeButton>
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ViewBoidata;