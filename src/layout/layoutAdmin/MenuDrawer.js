import { Menu } from "antd";
import { DashboardOutlined,UserOutlined,TableOutlined,BarsOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Reload } from "../../Action";
function MenuDrawer() {
  const css={
    textDecoration:"none"
  }
  const dispatch=useDispatch();
  const item = [
    {
      key: 1,
      label: <Link onClick={()=>dispatch(Reload(false))}  style={css}  to="/admin">DashBoard</Link>,
      icon: <DashboardOutlined />,
    },
    {
      key: 2,
      label: <Link onClick={()=>dispatch(Reload(false))} style={css} to="/infocompany">Thông tin công ty</Link>,
      icon: <UserOutlined />,
    },
    {
      key: 3,
      label: <Link onClick={()=>dispatch(Reload(false))}  style={css}  to="/managecv">Quản lý CV</Link>,
      icon: <BarsOutlined />,
    },
    {
      key: 4,
      label: <Link onClick={()=>dispatch(Reload(false))}  style={css}  to="/managejob">Quản lý công việc</Link>,
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

export default MenuDrawer;
