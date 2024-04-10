import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getJobById from "../Services/getJobs";
import { getCVById } from "../Services/getCV";
import { Card, Col, Row, Tag } from "antd";
import { changeCV } from "../Services/CreateCV";
function CVDetail() {
  const param = useParams();
  const [data, setData] = useState([]);
  const [dataJob, setDataJob] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getCVById(param.id);
      const result = await getJobById(res.idJob);
      setData(res);
      setDataJob(result);
      changeCV(param.id, { statusRead: true });
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div style={{ padding: "50px 0" }}>
        {data ? (
          <>
            <div className="CVDetails">
              <h3
                style={{
                  color: "#C43820",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Chi tiết CV
              </h3>
              <Card title="Chi tiết CV">
                <Row gutter={[10, 10]}>
                  <Col span={24}>
                    <div style={{ fontSize: "18px" }}>
                      <h4 className="mt-2">Họ và tên: {data.name}</h4>
                      <div className="mt-2">Số điênh thoại : {data.phone}</div>
                      <div className="mt-2">Email : {data.email}</div>
                      <div className="mt-2">Ngày gửi: {data.createAt}</div>
                      <div className="mt-2">
                        Thành phố :
                        {(data.city || []).map((item, index) => (
                          <Tag key={index} color="blue">
                            {item}
                          </Tag>
                        ))}
                      </div>
                      <div className="mt-2">Link Project:</div>
                      <div className="mt-2">
                        {(data.linkProject || []).map((item, index) => (
                          <div key={index}>
                            <a href={item} target="_blank">
                              {item}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
          </>
        ) : (
          "dang tai du lieu"
        )}
        {dataJob && (
          <>
            <div className="JobDetails">
              <Card title="Job muốn ứng tuyển" style={{ marginTop: "20px" }}>
                <Row gutter={[10, 10]}>
                  <Col span={24}>
                    <h4 className="mt-2">Tên Job: {dataJob.name}</h4>
                    <div className="mt-2">
                      Thành phố :
                      {(dataJob.city || []).map((item, index) => (
                        <Tag key={index} color="blue">
                          {item}
                        </Tag>
                      ))}
                    </div>
                    <div className="mt-2">
                      Công nghệ :
                      {(dataJob.tags || []).map((item, index) => (
                        <Tag key={index} color="blue">
                          {item}
                        </Tag>
                      ))}
                    </div>
                    <div className="mt-2">Mức lương: {dataJob.salary}</div>
                    <div className="mt-2">Mô tả: {dataJob.desc}</div>
                  </Col>
                </Row>
              </Card>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CVDetail;
