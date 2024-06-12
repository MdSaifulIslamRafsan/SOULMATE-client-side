import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import DataTable from "react-data-table-component";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet";




const FavoritesBiodata = () => {
    
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: usersData , refetch} = useQuery({
        queryKey: ['users' , user?.email],
        queryFn: () => axiosSecure.get(`/favouritesBiodata/${user?.email}`)
        .then((res)=>{
            return res.data;
        })
    });
    
    refetch();
    
const handleDelete = (id) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        axiosSecure.delete(`/favouritesBiodata/${id}`)
        .then((res)=>{
            if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
        })
        .catch((error)=> {
            Swal.fire({
                title: "error!",
                text: error?.message,
                icon: "error"
              });
        })
          
        }
      });
}


    const columns =[
        {   
            name: 'User id',
            selector: user => user?.biodata_id,
        },
        {
            name: 'User name',
            selector: user => user?.name,
        },
        {
            name: 'Permanent address',
            selector: user => user?.permanent_division_name
        },
        {
            name: 'Occupation',
            selector: user => user?.occupation ,
        },
        {
            name: 'Action',
            selector: user => <button onClick={()=> handleDelete(user?._id)}><RiDeleteBin6Fill className="text-2xl" /></button>
        }]
    
    return (
        <>
         <Helmet>
      <meta charSet="utf-8" />
      <title>SOULMATE || Favorite Boidata</title>
    </Helmet>
        <DataTable
      columns={columns}
      data={usersData}
      pagination
    ></DataTable>
        </>
    );
};

export default FavoritesBiodata;