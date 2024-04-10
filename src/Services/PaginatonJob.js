import { get } from "../utils/requestAPI"

export const paginationJob=async(number)=>{
    const res=await get(`jobs?_page=${number}&_limit=9`);
    return res;
}

export const paginationCompany=async(number)=>{
    const res=await get(`company?_page=${number}&_limit=8`);
    return res;
}