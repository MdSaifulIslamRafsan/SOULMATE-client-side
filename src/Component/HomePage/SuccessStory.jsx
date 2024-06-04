import { useQuery } from "@tanstack/react-query";
import { Vortex } from "react-loader-spinner";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import SuccessStoryCard from "./SuccessStoryCard";
import { Button, Dropdown } from "keep-react";

const SuccessStory = () => {
  const axiosPublic = useAxiosPublic();
  const [sortOrder, setSortOrder] = useState("");
  const { data: successStory = [], isLoading } = useQuery({
    queryKey: ["successStory" , sortOrder],
    queryFn: () =>
      axiosPublic.get(`/successStory?order=${sortOrder}`).then((res) => {
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
  return (
        <section className="mt-20 max-w-[1440px]  lg:w-10/12 w-11/12 mx-auto">
      <div className="lg:w-2/3 space-y-3 w-full mx-auto text-center">
        <h1 className="text-xl lg:text-4xl font-bold">
        Success Stories
        </h1>
        <p className="">Celebrate the beautiful journeys of our members who found love and happiness on our platform. Read their inspiring stories and see how our website has brought hearts together.
        </p>
      </div>
      <div className="flex justify-center">
      <Dropdown
        action={<Button>ordering</Button>}
        actionClassName="my-10 border-none"
      >
      <div>
      <Dropdown.List>
          <Dropdown.Item>
            <button onClick={()=>setSortOrder('')} className="text-body-3 font-medium text-metal-800">
              normal
            </button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={()=>setSortOrder('ascending')} className="text-body-3 font-medium text-metal-800">
              ascending
            </button>
          </Dropdown.Item>
          <Dropdown.Item>
            <button onClick={()=>setSortOrder('descending')} className="text-body-3 font-medium text-metal-800">
              descending
            </button>
          </Dropdown.Item>
        </Dropdown.List>
      </div>
      </Dropdown> 
      </div>
      <div className="mb-20 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 ">

        {successStory.map((cardInfo) => (
          <SuccessStoryCard cardInfo={cardInfo}  key={cardInfo?._id}></SuccessStoryCard>
        ))}
      </div>
    </section>
  );
};

export default SuccessStory;
