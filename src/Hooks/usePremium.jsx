import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from './useAxiosSecure';


const usePremium = () => {
    const {user , loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isPremium , isLoading: isPremiumLoading} = useQuery({
        queryKey: ['premium', user?.email],
          enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async()=> {
            const res = await axiosSecure.get(`/users/premium/${user?.email}`)
           return res.data?.premium;
        }
    })

    return  [isPremium , isPremiumLoading];
};

export default usePremium;