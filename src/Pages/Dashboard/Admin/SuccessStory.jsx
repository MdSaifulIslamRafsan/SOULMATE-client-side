import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import DataTable from "react-data-table-component";
import { AwesomeButton } from "react-awesome-button";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import SuccessStoryCard from "../../../Component/HomePage/SuccessStoryCard";

const SuccessStory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userInfo , setUserinfo] = useState(null);

  const openModal = (user) => {
    setIsModalOpen(true);
    setUserinfo(user);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const axiosSecure = useAxiosSecure();
  const { data: successInfo, refetch } = useQuery({
    queryKey: ["successInfoForAdmin"],
    queryFn: () =>
      axiosSecure.get("/successInfoForAdmin").then((res) => {
        return res.data;
      }),
  });

  refetch();

  const columns = [
    {
      name: "Male Biodata Id",
      selector: (user) =>
        user.selfUserData?.biodata_type === "Male"
          ? user?.selfBiodataId
          : user?.partnerBiodataId,
    },
    {
      name: "Female Biodata Id",
      selector: (user) =>
        user.partnerUserData?.biodata_type === "Male"
          ? user?.selfBiodataId
          : user?.partnerBiodataId,
    },
    {
      name: "Make admin",
      selector: (user) =>
        user.role === "admin" ? (
          "admin"
        ) : (
          <AwesomeButton onPress={()=>openModal(user)} type="primary">
            View Story 
          </AwesomeButton>
        ),
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={successInfo} pagination></DataTable>
      {isModalOpen && (
        <div id="modelConfirm" className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
          <div className="relative top-10 mx-auto shadow-xl rounded-md bg-white max-w-md">
            <div className="flex justify-end p-2">
              <button
                onClick={closeModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
               <RxCross2 className="text-2xl"></RxCross2>
              </button>
            </div>
            <div className="p-6 pt-0">
              <SuccessStoryCard cardInfo={userInfo}></SuccessStoryCard>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessStory;
