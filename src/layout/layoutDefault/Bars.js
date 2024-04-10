import { NavLink } from "react-router-dom";
import { getCookie } from "../../Components/helper/cookie";

function Bars(props) {
  const { setShow } = props;
  const token = getCookie("token");
  const handleClick1 = () => {
    setShow(false);
  };
  return (
    <>
      <ul className="Header__barlist">
        <li className="Header__baritem" onClick={handleClick1}>
          <NavLink to="/">Trang chủ</NavLink>
        </li>
        <li className="Header__baritem" onClick={handleClick1}>
          <NavLink to="/jobs">Việc làm IT</NavLink>
        </li>
        <li className="Header__baritem" onClick={handleClick1}>
          <NavLink to="/cv">CV & Hồ Sơ</NavLink>
        </li>
        <li className="Header__baritem" onClick={handleClick1}>
          <NavLink to="/company">Công ty</NavLink>
        </li>
        <li className="Header__baritem" onClick={handleClick1}>
          <NavLink to="/blog">Tin tức</NavLink>
        </li>
        <li className="Header__baritem" onClick={handleClick1}>
          {token ? (
            <NavLink to="/logout">Đăng xuất</NavLink>
          ) : (
            <NavLink to="/login">Đăng nhập</NavLink>
          )}
        </li>
        {token ? (
          <li className="Header__baritem" onClick={handleClick1}>
            <NavLink to="/admin">Trang quản lý</NavLink>
          </li>
        ) : (
          <li className="Header__baritem" onClick={handleClick1}>
            <NavLink to="/register">Đăng ký</NavLink>
          </li>
        )}
      </ul>
    </>
  );
}

export default Bars;
