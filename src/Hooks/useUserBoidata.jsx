import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useUserBoidata = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
        const { data: userBoidata = [], isLoading } = useQuery({
            queryKey: ["userBoiatas"],
            queryFn: () => axiosSecure.get(`/boiData/${user?.email}`)
                .then((res) => {
                  return res.data;
                }),
          });
    return {userBoidata , isLoading};
};

export default useUserBoidata;