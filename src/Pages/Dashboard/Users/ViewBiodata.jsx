import { Vortex } from "react-loader-spinner";
import useUserBoidata from "../../../Hooks/useUserBoidata";
import { AwesomeButton } from "react-awesome-button";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const ViewBiodata = () => {
  const { userBoidata: biodata, isLoading } = useUserBoidata();
  const axiosSecure = useAxiosSecure();

  const handleBiodataPremium = () => {
    Swal.fire({
      text: "Are you sure you want to upgrade to premium?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, premium  it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const premiumInfo = {
          biodata_id: biodata?.biodata_id,
        };
        axiosSecure
          .post("/premiumRequest", premiumInfo)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                title: "Request Successful!",
                text: "Your request has been submitted. Please wait for admin approval.",
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
      }
    });
  };

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SOULMATE || View Biodata</title>
      </Helmet>
      <div className="">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 2xl:gap-14">
          <div className="xl:col-span-1 ">
            <div className="space-y-6 sticky top-8 bg-white border-2 shadow-md rounded-xl p-8">
              <div className="relative w-full rounded-lg ">
                <img
                  src={biodata?.profile_image || "/placeholder.svg"}
                  alt={biodata?.name}
                  className="rounded-lg w-full"
                />
                <div className="absolute bottom-2 left-2">
                  {/* Premium Role */}
                  {biodata?.role === "premium" && (
                    <span className="inline-block px-4 py-1 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700">
                      Premium
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">
                    {biodata?.name}
                  </h1>
                  <p className="text-lg text-muted-foreground mt-1">
                    {biodata?.age} years old
                  </p>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-5 pt-4 border-t border-border">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">ID</p>
                    <p className="font-medium">{biodata?.biodata_id}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Occupation</p>
                    <p className="font-medium">{biodata.occupation}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Gender</p>
                    <p className="font-medium"> {biodata?.biodata_type}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Race</p>
                    <p className="font-medium">{biodata?.race}</p>
                  </div>
                </div>
              </div>
              <div className="">
                {biodata?.role !== "premium" && (
                  <AwesomeButton
                    className="w-full"
                    onPress={handleBiodataPremium}
                    type="primary"
                  >
                    biodata premium Request
                  </AwesomeButton>
                )}
              </div>
            </div>
          </div>

          <div className="xl:col-span-2 space-y-8">
            <div className="space-y-4 p-8 bg-white border-2 shadow-md rounded-xl">
              <h2 className="text-xl font-semibold">Personal Information</h2>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Date of Birth</p>
                  <p className="font-medium">{biodata?.date_of_birth}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Age</p>
                  <p className="font-medium">{biodata?.age} years</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Height</p>
                  <p className="font-medium">{biodata?.height}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Weight</p>
                  <p className="font-medium">{biodata?.weight}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 p-8 bg-white border-2 shadow-md rounded-xl">
              <h2 className="text-xl font-semibold">Family Information</h2>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    {`Father's`} Name
                  </p>
                  <p className="font-medium">{biodata?.fathers_name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    {`Mother's`} Name
                  </p>
                  <p className="font-medium">{biodata?.mothers_name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Permanent Division
                  </p>
                  <p className="font-medium">
                    {biodata?.permanent_division_name}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Present Division
                  </p>
                  <p className="font-medium">{biodata.present_division_name}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 p-8 bg-white border-2 shadow-md rounded-xl">
              <h2 className="text-xl font-semibold">Partner Expectations</h2>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Expected Age</p>
                  <p className="font-medium">{biodata?.expected_partner_age}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Expected Height
                  </p>
                  <p className="font-medium">
                    {biodata?.expected_partner_height}
                  </p>
                </div>
                <div className="col-span-2 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Expected Weight
                  </p>
                  <p className="font-medium">
                    {biodata?.expected_partner_weight}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 p-8 bg-white border-2 shadow-md rounded-xl">
              <h2 className="text-xl font-semibold">Contact Information</h2>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center justify-between  bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{biodata?.contact_email}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Mobile</p>
                      <p className="font-medium">{biodata?.mobile_number}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBiodata;
