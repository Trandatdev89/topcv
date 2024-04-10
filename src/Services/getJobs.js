import { get } from "../utils/requestAPI"

const getJobById=async(id)=>{
    const res=await get(`jobs/${id}`);
    return res;
}

export default getJobById;