import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import DataTable from "react-data-table-component";
import { RiDeleteBin6Fill } from "react-icons/ri";




const FavouritesBiodata = () => {
    
    const axiosSecure = useAxiosSecure();
    const {data: usersData , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: () => axiosSecure.get('/favouritesBiodata')
        .then((res)=>{
            return res.data;
        })
    });
    
    refetch();
    
const handleDelete = (id) =>{

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
        <DataTable
      columns={columns}
      data={usersData}
      pagination
    ></DataTable>
    );
};

export default FavouritesBiodata;