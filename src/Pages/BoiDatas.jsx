import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Vortex } from "react-loader-spinner";
import MemberCard from "../Component/SharedPage/MemberCard";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAuth from './../Hooks/useAuth';

const BoiDatas = () => {
  const axiosPublic = useAxiosPublic();
  const {user} = useAuth();
  const [filters, setFilters] = useState({
    ageMin: "",
    ageMax: "",
    type: "",
    division: "",
    page: 1,
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFilters({ ...data, page: 1 }); 
  };

  const { ageMin, ageMax, type, division, page } = filters;

  const { data: paginatedData, isLoading } = useQuery({
    queryKey: ["boiDatas", filters, user?.email],
    queryFn: () =>
      axiosPublic
        .get(
          `/boiDatas?email=${user?.email}&ageMin=${ageMin}&ageMax=${ageMax}&type=${type}&division=${division}&page=${page}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const handlePrevPage = () => {
    if (page > 1) {
      setFilters({ ...filters, page: page - 1 });
    }
  };

  const handleNextPage = () => {
    setFilters({ ...filters, page: page + 1 });
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
    <section className="max-w-[1440px]  lg:w-10/12 w-11/12 mx-auto my-20 grid gap-5 lg:grid-cols-4">
      <div className="shadow-2xl  lg:col-span-1">
        <div className="flex p-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4  w-full bg-gray-100 border-r"
          >
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <label className="block mb-4">
              <span className="block text-sm font-medium text-gray-700">
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
            <AwesomeButton
              style={{ marginTop: "10px" }}
              type="primary"
              className="w-full"
            >
              Search
            </AwesomeButton>
          </form>
        </div>
      </div>
      <div className="lg:col-span-3">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Display paginated data */}
          {paginatedData?.data.map((card) => (
            <MemberCard key={card?._id} card={card}></MemberCard>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <AwesomeButton
            type="primary"
            className="mx-2"
            onPress={handlePrevPage}
            disabled={page === 1}
          >
            Previous
          </AwesomeButton>
          <span className="mx-2">Page {page}</span>
          <AwesomeButton type="primary" className="mx-2" onPress={handleNextPage} disabled={page >= (paginatedData?.total / paginatedData?.pageSize)}>
            Next
          </AwesomeButton>
        </div>
      </div>
    </section>
  );
};

export default BoiDatas;
