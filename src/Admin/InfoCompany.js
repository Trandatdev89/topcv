import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { getCookie } from "../Components/helper/cookie";
import { useEffect, useState } from "react";
import { getCompanyById, updateInfoCompany } from "../Services/getCompanyName";
import GoBack from "../GoBack";
import LoadingAnimation from "../Loading";

function InfoCompany() {
  const rules = [
    {
      required: true,
      message: "Please input your username!",
    },
  ];
  const id = getCookie("id");
  const [data, setData] = useState();
  const [form] = Form.useForm();
  const [messageAPI, contextHolder] = message.useMessage();
  const [Edit, IsEdit] = useState(true);
  const fetchAPI = async () => {
    const res = await getCompanyById(id);
    if (res) {
      setData(res);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  const handleClick = () => {
    IsEdit(false);
  };
  const handleCancel = () => {
    IsEdit(true);
  };
  const handleFinish = async (value) => {
    const res = await updateInfoCompany(data.id, value);
    IsEdit(true);
    if (res) {
      messageAPI.open({
        type: "success",
        content: "Cập nhập thông tin thành công!",
        duration: 3,
      });
    } else {
      messageAPI.open({
        type: "error",
        content: "Cập nhập thông tin thất bại!",
        duration: 3,
      });
    }
  };
  return (
    <>
      {contextHolder}
      <div style={{ padding: "20px" }}>
        <h2
          style={{
            color: "#C43820",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Thông tin công ty
        </h2>
        <GoBack />
        {data ? (
          <Card
            title="Thông tin công ty"
            extra={
              Edit ? (
                <Button onClick={handleClick} danger size="middle">
                  Chỉnh sửa
                </Button>
              ) : (
                <Button onClick={handleCancel}>Hủy</Button>
              )
            }
          >
            <Form
              layout="vertical"
              initialValues={data}
              form={form}
              disabled={Edit}
              onFinish={handleFinish}
            >
              <Row gutter={[20, 10]}>
                <Col span={24}>
                  <Form.Item
                    label="Tên công ty"
                    name="companyName"
                    rules={rules}
                  >
                    <Input placeholder="Tên công ty" />
                  </Form.Item>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                  <Form.Item label="email" name="email" rules={rules}>
                    <Input placeholder="email" />
                  </Form.Item>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                  <Form.Item label="SDT" name="phone" rules={rules}>
                    <Input placeholder="SDT" />
                  </Form.Item>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                  <Form.Item label="Địa chỉ" name="address" rules={rules}>
                    <Input placeholder="Địa chỉ" />
                  </Form.Item>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                  <Form.Item
                    label="Số nhân sự"
                    name="quantityPeople"
                    rules={rules}
                  >
                    <InputNumber style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                  <Form.Item
                    label="Thời gian làm việc"
                    name="workingTime"
                    rules={rules}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                  <Form.Item label="Link Website" name="website" rules={rules}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Logo công ty"
                    name="thumbnail"
                    rules={rules}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Mô tả" name="desc" rules={rules}>
                    <TextArea />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Mô tả chi tiết" name="detail" rules={rules}>
                    <TextArea />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item>
                    <Button type="primary" className="me-2" htmlType="submit">
                      Cập nhập
                    </Button>
                    <Button type="primary">Cancel</Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        ) : (
          <LoadingAnimation />
        )}
      </div>
    </>
  );
}

export default InfoCompany;
