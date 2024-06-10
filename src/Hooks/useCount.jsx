import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCount = () => {
        const axiosPublic = useAxiosPublic();
            const { data: count = {}, isLoading } = useQuery({
                queryKey: ["count"],
                queryFn: () => axiosPublic.get(`/count`)
                    .then((res) => {
                      return res.data;
                    }),
              });
        return [count , isLoading];
};

export default useCount;