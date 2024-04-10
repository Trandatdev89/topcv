import { Button, Col, Form, Input, Row, message,Spin} from "antd";
import "./index.scss";
import { RegisterCompany, getCompanyName } from "../../Services/getCompanyName";
import { useNavigate } from "react-router-dom";
import generateToken from "../../Components/helper/generateToken";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [spining,setSpining]=useState(false);
  const rules = [
    {
      required: true,
      message: "Please input your username!",
    },
  ];
  const [messageApi, contextHolder] = message.useMessage();

  const handleFinish = async (values) => {
    setSpining(true);
    const res = await getCompanyName();
    const result = res.find((item) => item.email === values.email);
    if (result) {
      messageApi.open({
        type: "error",
        content: "Email nay da ton tai.Vui long chon Email khac de dang ky",
      });
    } else {
      values.token = generateToken();
      const resultFinal = await RegisterCompany(values);
      form.resetFields();
      if (resultFinal) {
        setSpining(false);
        messageApi.open({
          type: "success",
          content: "Dang ky thanh cong",
        });
        navigate("/login");
      } else {
        setSpining(false);
        messageApi.open({
          type: "error",
          content: "Dang ky khong thanh cong",
        });
      }
    }
  };
  return (
    <>
      {contextHolder}
      <div className="register">
        <div className="container">
          <div className="register__box">
            <h2 style={{ textAlign: "center" }}>Đăng ký tài khoản</h2>
            <Spin spinning={spining} tip="Đang đăng ký">
            <Form onFinish={handleFinish} layout="vertical" form={form}>
              <Form.Item label="Tên công ty" name="companyName" rules={rules}>
                <Input placeholder="Nhap Tên công ty..." />
              </Form.Item>
              <Form.Item label="Nhập SDT" name="phone" rules={rules}>
                <Input placeholder="Nhập SDT..." />
              </Form.Item>
              <Form.Item label="Nhập Email" name="email" rules={rules}>
                <Input placeholder="Nhập Email..." />
              </Form.Item>
              <Form.Item label="Nhập mật khẩu" name="password" rules={rules}>
                <Input.Password placeholder="Nhập mật khẩu..." />
              </Form.Item>
              <Form.Item>
                <Button type="primary" size="large" style={{width:"100%"}} htmlType="submit">
                  Register
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

export default Register;
