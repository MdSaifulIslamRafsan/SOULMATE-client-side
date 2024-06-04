import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Vortex } from "react-loader-spinner";
import { useState } from "react";
import { Dropdown, Button } from "keep-react";
import MemberCard from "../SharedPage/MemberCard";

const PremiumMember = () => {
  const axiosPublic = useAxiosPublic();
  const [sortOrder, setSortOrder] = useState("");
  const { data: premiumMemberDatas = [], isLoading } = useQuery({
    queryKey: ["premiumMember" , sortOrder],
    queryFn: () =>
      axiosPublic.get(`/premiumMember?order=${sortOrder}`).then((res) => {
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
          Premium Member Profiles
        </h1>
        <p className="">
          Browse through our carefully verified profiles of premium members.
          Each profile offers a glimpse into the authentic and exciting lives of
          potential matches.
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
      <div className="mb-20 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7">
        {premiumMemberDatas?.map((card) => (
          <MemberCard key={card?._id} card={card}></MemberCard>
        ))}
      </div>
    </section>
  );
};

export default PremiumMember;
