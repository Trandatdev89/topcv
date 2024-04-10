import { Outlet } from "react-router-dom";
import { getCookie } from "../helper/cookie";

function PrivateRouter(){
    const token=getCookie("token");
    return(
        <>
           {token?(<Outlet/>):("ban chua dang nhap")}
        </>
    )
}

export default PrivateRouter;