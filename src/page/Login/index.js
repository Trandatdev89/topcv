import { useState } from "react";
import { getCompanyName } from "../../Services/getCompanyName";
import { Button, Form, Input, Spin, message } from "antd";
import { setCookie } from "../../Components/helper/cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Reload } from "../../Action";
import "./index.scss";

function Login() {
  const rules = [
    {
      required: true,
      message: "Please input your username!",
    },
  ];
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [spining, setSpining] = useState(false);
  const handleFinish = async (values) => {
    setSpining(true);
    const res = await getCompanyName();
    const result = res.find(
      (item) => item.email === values.email && item.password === values.password
    );
    if (result) {
      setCookie("id", result.id, 1);
      setCookie("companyName", result.companyName, 1);
      setCookie("email", result.email, 1);
      setCookie("token", result.token, 1);
      setSpining(false);
      messageApi.open({
        type: "success",
        content: "Đăng nhập thành công",
      });
      dispatch(Reload(true));
      navigate("/");
    } else {
      setSpining(false);
      messageApi.open({
        type: "error",
        content: "Đăng nhập thất bại",
      });
    }
  };

  return (
    <>
      {contextHolder}
      <div className="login">
        <div className="container">
          <div className="login__box">
            <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
            <Spin spinning={spining} tip="Đang đăng nhập">
              <Form onFinish={handleFinish} layout="vertical">
                <Form.Item label="Nhập email" name="email" rules={rules}>
                  <Input placeholder="Nhập email..." />
                </Form.Item>
                <Form.Item label="Nhập mật khẩu" name="password" rules={rules}>
                  <Input.Password placeholder="Nhập mật khẩu..." />
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{ width: "100%" }}
                    size="large"
                    type="primary"
                    htmlType="submit"
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </Spin>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
