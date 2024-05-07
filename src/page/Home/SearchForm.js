import { Button, Col, Form, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { get } from "../../utils/requestAPI";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [city, setCity] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAPI_City = async () => {
      const res = await get("city");
      const result = {
        key: 0,
        value: "All",
      };
      setCity([result, ...res]);
    };
    fetchAPI_City();
  }, []);

  const handleFinish = (e) => {
    let city = e.city || "";
    city = e.city === "All" ? "" : city;
    navigate(`/search?city=${city}&tags=${e.tags}`);
  };
  return (
    <>
      <div className="BannerSearch wow animate__animated animate__bounceInDown">
        <h3 className="mb-3" style={{color:"#C43820",fontSize:"40px",fontWeight:"bold"}}>1000+ jobs IT for Developer</h3>
        <Form onFinish={handleFinish}>
          <Row gutter={10}>
            <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
              <Form.Item name="city">
                <Select  options={city} placeholder="nhập tên thành phố..." className="BannerSearch__input"/>
              </Form.Item>
            </Col>
            <Col xxl={15} xl={15} lg={15} md={24} sm={24} xs={24}>
              <Form.Item name="tags">
                <Input  className="BannerSearch__input"/>
              </Form.Item>
            </Col>
            <Col xxl={3} xl={3} lg={3} md={24} sm={24} xs={24}>
              <Form.Item>
                <Button htmlType="submit" className="button button--active">
                  Tìm kiếm
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default SearchForm;
