import DataTable from "react-data-table-component";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const MyContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: usersData } = useQuery({
    queryKey: ["myContactRequest", user?.email],
    queryFn: () =>
      axiosSecure.get(`/myContactRequest/${user?.email}`).then((res) => {
        return res.data;
      }),
  });

  const columns = [
    {
      name: "Boidata id",
      selector: (user) => user?.biodata_id,
    },
    {
      name: "Boidata name",
      selector: (user) => user?.contactData?.name,
    },
    {
      name: "Status",
      selector: (user) => user?.status,
    },
    {
      name: "Email",
      selector: (user) =>
        user?.status === "approved"
          ? user?.contactData?.contact_email
          : "Wait for admin approval",
    },
    {
      name: "Mobile no",
      selector: (user) =>
        user?.status === "approved"
          ? user?.contactData?.mobile_number
          : "Wait for admin approval",
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SOULMATE || My Contact Request</title>
      </Helmet>

      <DataTable columns={columns} data={usersData} pagination></DataTable>
    </>
  );
};

export default MyContactRequest;
