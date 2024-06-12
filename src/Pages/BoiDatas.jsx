import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Vortex } from "react-loader-spinner";
import MemberCard from "../Component/SharedPage/MemberCard";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAuth from "./../Hooks/useAuth";

const BoiDatas = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [filters, setFilters] = useState({
    ageMin: "",
    ageMax: "",
    type: "",
    division: "",
  });
  const { register, handleSubmit } = useForm();

  const [pageNumber, setPageNumber] = useState(0); // State to manage current page number
  const usersPerPage = 4; // Number of users to display per page
  const pagesVisited = pageNumber * usersPerPage; // Calculate the index of the first user to be displayed on the current page

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected); // Update the page number when a new page is selected
  };

  const onSubmit = (data) => {
    setFilters(data);
    setPageNumber(0); // Reset page number to 0 when filters are updated
  };

  const { ageMin, ageMax, type, division } = filters;
  const { data: premiumMemberDatas = [], isLoading } = useQuery({
    queryKey: ["boiDatas", filters, user?.email],
    queryFn: () =>
      axiosPublic
        .get(
          `/boiDatas?email=${user?.email}&ageMin=${ageMin}&ageMax=${ageMax}&type=${type}&division=${division}`
        )
        .then((res) => {
          return res.data;
        }),
  });

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

  // Paginate the user data
  const displayUsers = premiumMemberDatas
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((card) => <MemberCard key={card?._id} card={card}></MemberCard>);

  return (
    <section className="max-w-[1440px]  lg:w-10/12 w-11/12 mx-auto my-20 grid gap-5 lg:grid-cols-4">
      <div className="shadow-2xl  lg:col-span-1">
        <div className="flex p-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4  w-full bg-gray-100 border-r"
          >
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <label className="block mb-4">
              <span className="block  text-sm font-medium text-gray-700">
                Age Range:
              </span>
              <input
                type="number"
                {...register("ageMin")}
                name="ageMin"
                placeholder="Min"
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              />
              <input
                type="number"
                {...register("ageMax")}
                name="ageMax"
                placeholder="Max"
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              />
            </label>
            <label className="block mb-4">
              <span className="block text-sm font-medium text-gray-700">
                Type:
              </span>
              <select
                name="type"
                {...register("type")}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              >
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
            <label className="block mb-4">
              <span className="block text-sm font-medium text-gray-700">
                Division:
              </span>
              <select
                name="division"
                {...register("division")}
                className="mt-1 block w-full px-3 py-2 border rounded-md"
              >
                <option value="">All</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </label>
            <button
              style={{ marginTop: "10px" }}
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="lg:col-span-3">
        <div className="grid md:grid-cols-2 gap-8">{displayUsers}</div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          className="mt-10 text-center"
          pageCount={Math.ceil(premiumMemberDatas.length / usersPerPage)}
          onPageChange={handlePageChange}
          containerClassName={"flex justify-center mt-4"}
          pageClassName={"inline-block m-2"}
          pageLinkClassName={
            "rounded-md px-3 py-1"
          }
          activeClassName={
            "bg-blue-500 text-white border border-blue-500 rounded-md"
          }
          previousClassName={"inline-block  m-2"}
          nextClassName={"inline-block  m-2"}
          previousLinkClassName={
            "text-white border bg-blue-500 border-gray-300 rounded-md px-3 py-1"
          }
          nextLinkClassName={
            "text-white border bg-blue-500  border-gray-300 rounded-md px-3 py-1"
          }
        />
      </div>
    </section>
  );
};

export default BoiDatas;
