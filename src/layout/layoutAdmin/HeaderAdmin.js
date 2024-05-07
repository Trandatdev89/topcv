import { Button } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
import { useDispatch } from "react-redux";
import { BarsOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Reload } from "../../Action/index";
import { getCookie } from "../../Components/helper/cookie";
import DropDown from "./Dropdown";
import logofold from "../../img/logo-fold.png";
import logoAdmin from "../../img/logoAdmin.png";
import DropdownCompany from "./DropdownCompany.js";
function HeaderAdmin() {
  const [click, setClick] = useState(false);
 

  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(Reload(!click));
    setClick(!click);
  };
  const getFullName = getCookie("companyName");

  return (
    <>
      <div className="HeaderAdmin">

        <div
          className={
            click
              ? "HeaderAdmin__logo HeaderAdmin__logo--active"
              : "HeaderAdmin__logo"
          }
        >
          <img
            className="HeaderAdmin__img"
            src={
              click
                ? logofold
                : logoAdmin
            }
            alt="dang tai anh"
          />
        </div>
        <div className="HeaderAdmin__content">
          <div className="HeaderAdmin__bars">
            <Button size="large" icon={<BarsOutlined />} onClick={handleClick}></Button>
          </div>
          <div className="HeaderAdmin__wrap">
            <div className="HeaderAdmin__dropdown" style={{marginRight:"10px"}}>
              <DropDown/>
            </div>
            <DropdownCompany getFullName={getFullName}/>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderAdmin;
