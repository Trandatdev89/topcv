import { patch, post } from "../utils/requestAPI"

export const CreateCV=async(option)=>{
    const res= await post("cv",option);
    return res;
}

export const changeCV=async(id,data)=>{
    const res=await patch("cv",id,data);
    return res;
}