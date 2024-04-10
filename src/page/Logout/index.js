import { useEffect, useState } from "react";
import { deleteCookie } from "../../Components/helper/cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Reload } from "../../Action";
function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteToken = deleteCookie("token");
  const reload=useSelector(state=>state.ReloadReducer);
  console.log(reload);
  useEffect(() => {
    const fetchAPI=async()=>{
      dispatch(Reload(false));
      navigate("/login");
    }
    fetchAPI();
  }, [reload]);

  return <></>;
}

export default Logout;
