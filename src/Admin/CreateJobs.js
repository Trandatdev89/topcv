import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Switch,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { getCookie } from "../Components/helper/cookie";
import getTimeCurrent from "../Components/helper/getTimeCurrent";
import { get } from "../utils/requestAPI";
import { createJob } from "../Services/getJobsByIdCompany";
function CreateJob() {
  const rules = [
    {
      required: true,
      message: "Please input your username!",
    },
  ];
  const [Tag, setTag] = useState([]);
  const [City, setCity] = useState([]);
  const [messageAPI, contextHolder] = message.useMessage();

  useEffect(() => {
    const fetchAPI = async () => {
      const resCity = await get("city");
      const resTag = await get("tags");
      setCity(resCity);
      setTag(resTag);
    };
    fetchAPI();
  }, []);
  const idCompany = getCookie("id");
  const [form] = Form.useForm();
  const handleFinish = async (values) => {
    values.IdCompany = parseInt(idCompany);
    values.createAt = getTimeCurrent();
    const res = await createJob(values);
    if (res) {
      form.resetFields();
      messageAPI.open({
        type: "success",
        content: "Tao Job moi thanh cong",
        duration: 3,
      });
    } else {
      messageAPI.open({
        type: "error",
        content: "Tao Job moi that bai!",
        duration: 3,
      });
    }
  };
  const handleClick=()=>{
    form.resetFields();
  }
  return (
    <>
      {contextHolder}
      <div className="createJob" style={{ padding: "50px 0" }}>
        <h2>Tao job moi</h2>
        <Form layout="vertical" onFinish={handleFinish} form={form}>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <Form.Item name="name" label="Ten job" rules={rules}>
                <Input placeholder="Ten job" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="tags" label="Cong nghe" rules={rules}>
                <Select options={Tag} mode="multiple" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="city" label="city" rules={rules}>
                <Select options={City} mode="multiple" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="salary" label="Muc luong" rules={rules}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="desc" label="mo ta" rules={rules}>
                <TextArea placeholder="mo ta" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item initialValue={false} name="status" label="Trang thai">
                <Switch/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Them job
                </Button>
                <Button type="primary" className="ms-2" onClick={handleClick}>
                  Huy
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
export default CreateJob;
