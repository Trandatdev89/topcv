import { Delete, get, patch, post } from "../utils/requestAPI"

export const getJobsByIdCompany=async(id)=>{
    const res=await get(`jobs?IdCompany=${id}`);
    return res;
}

export const createJob=async(data)=>{
    const res=await post("jobs",data);
    return res;
}
export const updateJob=async(id,data)=>{
    const res=await patch("jobs",id,data);
    return res;
}
export const deleteJob=async(id)=>{
    const res=await Delete("jobs",id);
    return res;
}
