import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getJobById from "../../Services/getJobs";
import { Button, Col, Form, Input, Row, Select, Tag, notification } from "antd";
import { getCompanyById } from "../../Services/getCompanyName";
import TextArea from "antd/es/input/TextArea";
import { CreateCV } from "../../Services/CreateCV";
import getTimeCurrent from "../../Components/helper/getTimeCurrent";
import GoBack from "../../GoBack";
import LoadingAnimation from "../../Loading";

function Jobs() {
  const rules = [
    {
      required: true,
      message: "Please input your username!",
    },
  ];
  const param = useParams();
  const [data, setData] = useState({});
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getJobById(param.id);
      const result = await getCompanyById(res.IdCompany);
      const option = {
        ...res,
        infoCompany: result,
      };

      setData(option);
    };

    fetchAPI();
  }, []);
  const handleFinish = async (value) => {
    let listProject = value.linkProject.split(/\s+/);
    value.linkProject = listProject;
    value.idJob = data.id;
    value.createAt = getTimeCurrent();
    value.idCompany = data.IdCompany;
    value.statusRead = false;
    const res = await CreateCV(value);
    if (res) {
      form.resetFields();
      api.success({
        message: "Chúc mừng bạn đã nộp thành công",
        description:
          "Nhà tuyển dụng sẽ liên hệ với bạn trong thời gian sớm nhất!",
        placement: "topRight",
      });
    } else {
      api.error({
        message: "Bạn nộp không thành công",
        description: "Chúng tôi chưa nhận được CV của bạn!",
        placement: "topRight",
      });
    }
  };
  return (
    <>
      {contextHolder}
      <div className="jobsDetail">
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#C43820",
            }}
          >
            Chi tiết tuyển dụng
          </h2>
          {data && Object.keys(data).length > 0 ? (
            <Row gutter={[10, 10]}>
              <Col span={24}>
                <div className="mb-3">
                  <Button type="primary" href="#formApply" size="large">
                    Ứng tuyển ngay
                  </Button>
                  <span style={{display:"inline-block",marginLeft:"10px"}}><GoBack/></span>
                </div>
                <div className="jobsDetail__content">
                  <h2 className="jobsDetail__title">{data.name}</h2>
                  <div className="jobsDetail__languae">
                    Ngôn ngữ:
                    {(data.tags || []).map((itemTag, index) => (
                      <Tag color="blue" key={index}>
                        {itemTag}
                      </Tag>
                    ))}
                  </div>
                  <div className="jobsDetail__city">
                    Thành phố:
                    {(data.city || []).map((itemCity, index) => (
                      <Tag color="yellow" key={index}>
                        {itemCity}
                      </Tag>
                    ))}
                  </div>
                  <div className="jobsDetail__salary">
                    Lương: {data.salary}$
                  </div>
                  <div className="jobsDetail__address">
                    Địa chỉ: {data.infoCompany.address}
                  </div>
                  <div className="jobsDetail__day">
                    Ngày tạo : {data.createAt}
                  </div>
                  <div className="jobsDetail__desc mt-20">
                    <div className="mb-20">Mô tả công việc:</div>
                    <div>{data.infoCompany.desc}</div>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <h3
                  style={{
                    textAlign: "center",
                    marginBottom: "30px",
                    color: "#C43820",
                  }}
                >
                  Điền CV vào form dưới đây
                </h3>
                <div className="jobsDetail__form">
                  <Form
                    onFinish={handleFinish}
                    name="formApply"
                    layout="vertical"
                    form={form}
                  >
                    <Row gutter={[10, 10]}>
                      <Col xxl={6}>
                        <Form.Item name="name" label="Họ và tên" rules={rules}>
                          <Input placeholder="Họ và tên" la />
                        </Form.Item>
                      </Col>
                      <Col xxl={6}>
                        <Form.Item name="phone" label="SĐT" rules={rules}>
                          <Input placeholder="SDT" />
                        </Form.Item>
                      </Col>
                      <Col xxl={6}>
                        <Form.Item name="email" label="Email" rules={rules}>
                          <Input placeholder="Email" />
                        </Form.Item>
                      </Col>
                      <Col xxl={6}>
                        <Form.Item name="city" label="Thành phố" rules={rules}>
                          <Select mode="multiple">
                            {data.city.map((item, index) => (
                              <Select.Option
                                label={item}
                                value={item}
                                key={index}
                              >
                                {item}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item
                      name="desc"
                      label="Giới thiệu bản thân"
                      rules={rules}
                    >
                      <TextArea placeholder="Giới thiệu bản thân" />
                    </Form.Item>
                    <Form.Item
                      name="linkProject"
                      label="Link project đã làm"
                      rules={rules}
                    >
                      <TextArea />
                    </Form.Item>
                    <Form.Item>
                      <Button htmlType="submit" size="large" type="primary">
                        Gửi yêu cầu
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Col>
            </Row>
          ):(
            <LoadingAnimation/>
          )}
        </div>
      </div>
    </>
  );
}

export default Jobs;
