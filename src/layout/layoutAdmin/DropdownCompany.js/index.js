import { Dropdown } from "antd";
import { Link } from "react-router-dom";

function DropdownCompany(props) {
  const { getFullName } = props;
  
  const styleCSS={
    "textDecoration":"none",
  }
  const items = [
    {
      key: "1",
      label: (
        <>
          <Link style={styleCSS} to="/">Trang tuyển dụng</Link>
        </>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <Link style={styleCSS} to="/logout">Đăng xuất</Link>
        </>
      ),
    },
    {
      key: "3",
      label: (
        <>
          <Link style={styleCSS} to="/blog">Thông báo</Link>
        </>
      ),
    },
  ];
  return (
    <>
      <Dropdown
        menu={{
          items
        }}
      >
        <div className="HeaderAdmin__user">
          <img src="https://i.imgur.com/dn1R8ys.png" alt="dang tai anh" />
          <div className="HeaderAdmin__info">
            <div className="HeaderAdmin__name">{getFullName}</div>
            <div>Nhà tuyển dụng</div>
          </div>
        </div>
      </Dropdown>
    </>
  );
}

export default DropdownCompany;
