import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import DataTable from "react-data-table-component";
import { AwesomeButton } from "react-awesome-button";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: usersData, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axiosSecure.get("/boiDatas").then((res) => {
        return res.data;
      }),
  });
  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user?._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Good job!",
            text: `${user?.name} has been granted admin privileges.`,
            icon: "success",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: `An error occurred while making ${user?.name} an admin. Please try again.`,
          icon: "error",
        });
      });
  };
  refetch();
  const handleMakePremium = (user) => {
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
      name: "User name",
      selector: (user) => user.name,
    },
    {
      name: "User email",
      selector: (user) => user.contact_email,
    },
    {
      name: "Make admin",
      selector: (user) =>
        user.role === "admin" ? (
          "admin"
        ) : (
          <AwesomeButton onPress={() => handleMakeAdmin(user)} type="primary">
            Make admin
          </AwesomeButton>
        ),
    },
    {
      name: "Make premium",
      selector: (user) =>
        user.role === "premium" ? (
          "premium"
        ) : (
          <AwesomeButton onPress={() => handleMakePremium(user)} type="primary">
            Make premium
          </AwesomeButton>
        ),
    },
  ];

  return <DataTable columns={columns} data={usersData} pagination></DataTable>;
};

export default ManageUsers;
