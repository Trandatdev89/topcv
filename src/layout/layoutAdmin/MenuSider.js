import { Menu } from "antd";
import { DashboardOutlined,UserOutlined,TableOutlined,BarsOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function MenuSider() {
  const css={
    textDecoration:"none"
  }
  const item = [
    {
      key: 1,
      label: <Link style={css}  to="/admin">DashBoard</Link>,
      icon: <DashboardOutlined />,
    },
    {
      key: 2,
      label: <Link style={css} to="/infocompany">Thông tin công ty</Link>,
      icon: <UserOutlined />,
    },
    {
      key: 3,
      label: <Link  style={css}  to="/managecv">Quản lý CV</Link>,
      icon: <BarsOutlined />,
    },
    {
      key: 4,
      label: <Link  style={css}  to="/managejob">Quản lý công việc</Link>,
      icon: <TableOutlined />,
    },
  ];
  return (
    <>
      <Menu style={{
         fontSize: "19px",
      }}  items={item} mode="inline" defaultOpenKeys={["1"]}/>
    </>
  );
}

export default MenuSider;
