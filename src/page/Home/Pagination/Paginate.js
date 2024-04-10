import {Pagination} from "antd";
import { useEffect, useState } from "react";
import { paginationJob } from "../../../Services/PaginatonJob";

function Paginate(props){
    const {data}=props;
    const [dataPagi,setDataPagi]=useState(data);
    const [skip,setSkip]=useState(0);
    const handleChange=(e,f)=>{
        setSkip()
    }
    useEffect(()=>{
        const fetchAPI=async()=>{
            const res= await paginationJob(skip);
            
        }
        fetchAPI();
    },[])
    return(
        <>
             <Pagination defaultCurrent={1} total={data.length} pageSize={2} onChange={handleChange}/>
        </>
    )
}

export default Paginate;