import { Delete, get } from "../utils/requestAPI"

export const getCVByIdCompany=async(id)=>{
    const res=await get(`cv?idCompany=${id}`);
    return res;
}
export const getCVById=async(id)=>{
    const res=await get(`cv/${id}`);
    return res;
}
export const deleteCV=async(id)=>{
    const res=await Delete("cv",id);
    return res;
}