import Footer from "../layoutDefault/footer";
import { Drawer, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import HeaderAdmin from "./HeaderAdmin";
import { Outlet } from "react-router-dom";
import MenuSider from "./MenuSider";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { Reload } from "../../Action";
import MenuDrawer from "./MenuDrawer";
function LayoutAdmin() {
  const dispatch = useDispatch();
  const reload = useSelector((state) => state.ReloadReducer);
  // console.log(reload);
  const handleClose = (e) => {
    dispatch(Reload(false));
  };
  return (
    <>
      <Layout>
        <HeaderAdmin />
        <Layout>
          <Sider
            theme="light"
            width="250px"
            collapsed={reload}
            className="slide"
            
          >
            <MenuSider />
          </Sider>
          
          
            <Drawer
              title="Menu"
              placement="left"
              width={300}
              onClose={handleClose}
              open={reload}
            >
              <MenuDrawer/>
            </Drawer>
          
          
         
          <Content>
            <div className="container">
              <Outlet />
            </div>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </>
  );
}

export default LayoutAdmin;
