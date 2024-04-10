import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import { getCookie } from "../../Components/helper/cookie";
import { useSelector } from "react-redux";
import logo from "../../img/Tím Hiện đại Logo Công nghệ & Trò chơi.png";
import { useState } from "react";
import Bars from "./Bars";
function Header() {
  const [show, setShow] = useState(false);
  const token = getCookie("token");
  const reload = useSelector((state) => state.ReloadReducer);
  const handleClick = (e) => {
    return e.isActive ? "Header__link Header__link--active" : "Header__link";
  };
  const showBar = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="Header">
        <div className="Header__logo">
          <Link to="/">
            <img src={logo} alt="dang tai anh" />
          </Link>
        </div>
        <div className="Header__nav">
          <ul className="Header__list">

            <li className="Header__item">
              <NavLink to="/jobs" className={handleClick}>
                Việc làm IT
              </NavLink>
            </li>
            <li className="Header__item">
              <NavLink to="http://daca.vn" target="_blank" className={handleClick}>
                Hồ sơ & CV
              </NavLink>
            </li>
            <li className="Header__item">
              <NavLink to="/company" className={handleClick}>
                Công ty
              </NavLink>
            </li>
            <li className="Header__item">
              <NavLink to="/blog" className={handleClick}>
                Tin tức
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Header__login">
          {token ? (
            <>
              <Link to="/admin" style={{ color: "#fff" }}>
                <button className="hinh hinh--one">Trang quản lý</button>
              </Link>
              <Link to="/logout" style={{ color: "#fff" }}>
                <button className="hinh hinh--one">Đăng xuất</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/register" style={{ color: "#fff" }}>
                <button className="hinh hinh--one">Đăng ký</button>
              </Link>
              <Link to="/login" style={{ color: "#fff" }}>
                <button className="hinh hinh--one">Đăng nhập</button>
              </Link>
            </>
          )}
        </div>
        <div className="Header__bar" onClick={showBar}>
          {show ? <CloseOutlined /> : <MenuOutlined />}
        </div>
      </div>
      {show ? <Bars setShow={setShow} /> : ""}
    </>
  );
}

export default Header;
