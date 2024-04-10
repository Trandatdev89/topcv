import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getJobById from "../Services/getJobs";
import { Card, Col, Row, Tag } from "antd";

function JobDetails() {
  const param = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getJobById(param.id);
      setData(res);
    };

    fetchAPI();
  }, []);

  return (
    <>
      {data ? (
        <>
          <div className="jobDetails"  style={{ padding: "80px 0" }}>
              <h3
                style={{
                  color: "#C43820",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Chi tiết Job
              </h3>
            <Card title="Chi tiết Job">
              <Row gutter={[10, 10]}>
                <Col span={24}>
                  <div style={{fontSize:"20px"}}>

                  <h3>Tên job: {data.name}</h3>
                  <div>Trạng thái: {data.status?(
                    "Bật"
                  ):("Tắt")}</div>
                  <div>
                    Công nghệ:
                    {(data.tags || []).map((item, index) => (
                      <Tag key={index} color="yellow">
                        {item}
                      </Tag>
                    ))}
                  </div>
                  <div>Mức lương: {data.salary}$</div>
                  <div>Thời gian đăng bài: {data.createAt}</div>
                  <div>Thời gian cập nhập bài: {data.updateAt || ""}</div>
                  <div>
                    Thành phố:
                    {(data.city || []).map((item, index) => (
                      <Tag key={index} color="blue">
                        {item}
                      </Tag>
                    ))}
                  </div>
                  <div>Mô tả: {data.desc}</div>
                  </div>
                </Col>
              </Row>
            </Card>
          </div>
        </>
      ) : (
        "dang tai du lieu"
      )}
    </>
  );
}

export default JobDetails;
