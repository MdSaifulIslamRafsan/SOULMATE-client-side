import { useQuery } from "@tanstack/react-query";
import { AwesomeButton } from "react-awesome-button";
import DataTable from "react-data-table-component";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApprovedPremium = () => {
  const axiosSecure = useAxiosSecure();
  const { data: approvePremiumRequest, refetch } = useQuery({
    queryKey: ["approvePremiumRequest"],
    queryFn: () =>
      axiosSecure.get("/approvePremiumRequest").then((res) => {
        return res.data;
      }),
  });
 
  refetch();
  const handleApprovePremiumRequest = (user) => {
  
    axiosSecure
      .patch(`/users/premium/${user?._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Good job!",
            text: `${user?.name} has been granted premium membership.`,
            icon: "success",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: `An error occurred while making ${user?.name} a premium member. Please try again.`,
          icon: "error",
        });
      });
  };

  const columns = [
    {
      name: "Boidata id",
      selector: (user) => user.biodata_id,
    },
    {
      name: "Name",
      selector: (user) => user?.userData?.name,
    },
    {
      name: "Email",
      selector: (user) => user?.userData?.contact_email,
    },
    
    {
      name: "Action",
      selector: (user) =>
        user?.userData?.role === "premium" ? (
          "Approved"
        ) : (
          <AwesomeButton onPress={() => handleApprovePremiumRequest(user?.userData)} type="primary">
            Approved request
          </AwesomeButton>
        ),
    },
  ];

  return <DataTable columns={columns} data={approvePremiumRequest} pagination></DataTable>;
};

export default ApprovedPremium;
