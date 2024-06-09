import { useQuery } from "@tanstack/react-query";
import { AwesomeButton } from "react-awesome-button";
import DataTable from "react-data-table-component";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApprovedContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: approveContactRequests, refetch } = useQuery({
    queryKey: ["approveContactRequest"],
    queryFn: () =>
      axiosSecure.get("/contactRequest").then((res) => {
        return res.data;
      }),
  });
 
  refetch();
  const handleApprovedContactRequest = (user) => {
    axiosSecure
      .patch(`/users/contactRequest/${user?.biodata_id}`)
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
      selector: (user) => user.contactData?.name,
    },
    {
      name: "Email",
      selector: (user) => user.contactData?.contact_email,
    },
    
    {
      name: "Action",
      selector: (user) =>
        user.status === "approved" ? (
          "Approved"
        ) : (
          <AwesomeButton onPress={() => handleApprovedContactRequest(user)} type="primary">
            Approved request
          </AwesomeButton>
        ),
    },
  ];

  return <DataTable columns={columns} data={approveContactRequests} pagination></DataTable>;
};

export default ApprovedContactRequest;
