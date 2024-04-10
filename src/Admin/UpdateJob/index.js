import { Button, Col, Form, Input, InputNumber, Modal, Row, Select, Switch, message } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import getTimeCurrent from "../../Components/helper/getTimeCurrent";
import TextArea from "antd/es/input/TextArea";
import { get } from "../../utils/requestAPI";
import { updateJob } from "../../Services/getJobsByIdCompany";
function UpdateJob(props) {
  const { record ,onReload,reload} = props;
  const [isModel,setModel]=useState(false);
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
  const rules = [
    {
      required: true,
      message: "Please input your username!",
    },
  ];
  const handleFinish=async(value)=>{
     value.updateAt=getTimeCurrent();
     value.createAt=record.createAt;
     value.IdCompany=record.IdCompany;
     value.id=record.id;
     const res=await updateJob(value.id,value);
     if (res) {
        messageAPI.open({
          type: "success",
          content: "Tạo Job mới thành công",
          duration: 3,
        });
        onReload(!reload);
        setModel(false);
      } else {
        messageAPI.open({
          type: "error",
          content: "Tạo Job mới thất bại!",
          duration: 3,
        });
      }
  }
  const handleCancel=()=>{
    setModel(false);
  }
  const handleClick=()=>{
     setModel(true);
  }
  return (
    <>   
     {contextHolder}
      <Button className="ms-1" onClick={handleClick} icon={<AppstoreAddOutlined />} />
      <Modal title="Cập nhập Job"  open={isModel} footer={null} onCancel={handleCancel} width={1000}>
      <Form layout="vertical" onFinish={handleFinish} initialValues={record}>
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
              <Form.Item name="status" label="Trang thai">
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
      </Modal>
    </>
  );
}

export default UpdateJob;
