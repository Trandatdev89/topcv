import { useEffect, useState } from "react";
import { get } from "../../utils/requestAPI";
import { Card, Col, Row, Tag } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
function ListJob() {
  const [dataJobs, setDataJob] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await get("jobs");
      setDataJob(res);
    };
    fetchAPI();
  }, []);
  
  
  return (
    <>
      {dataJobs.length > 0 && (
        <div className="ListJob">
          <div className="container">
            <Row gutter={[10, 20]}>
              {dataJobs.map((item) => (
                <Col
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={12}
                  sm={12}
                  xs={24}
                  key={item.id}
                >
                  <div className="ListJob__item" style={{height:"100%"}}>
                    <Card style={{height:"100%"}}
                      title={<Link to={`/jobs/${item.id}`}>{item.name}</Link>}
                      color="blue"
                    >
                      <div className="Search__languae">
                        Ngon ngu:
                        {item.tags.map((itemTag, index) => (
                          <Tag color="blue" key={index}>
                            {itemTag}
                          </Tag>
                        ))}
                      </div>
                      <div className="Search__city">
                        Thanh pho:
                        {item.city.map((itemCity, index) => (
                          <Tag color="yellow" key={index}>
                            {itemCity}
                          </Tag>
                        ))}
                      </div>
                      <div className="Search__salary">
                        Luong: {item.salary}$
                      </div>
                      <div className="Search__company">
                        Ten cong ty : {item?.infoCompany?.companyName}
                      </div>
                      <div className="Search__day">
                        Ngay tao : {item.createAt}
                      </div>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
    </>
  );
}

export default ListJob;
