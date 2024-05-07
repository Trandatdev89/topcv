import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompanyById } from "../../Services/getCompanyName";
import { Col, Row } from "antd";
import { getJobsByIdCompany } from "../../Services/getJobsByIdCompany";
import JobItem from "../Search/JobItem";
function CompanyDetail() {
  const param = useParams();
  const [data, setData] = useState([]);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getCompanyById(param.id);
      const jobCompany = await getJobsByIdCompany(param.id);
      const dataMerge = [];
      for (let i = 0; i < jobCompany.length; i++) {
        dataMerge.push({
          infoCompany: res,
          ...jobCompany[i],
        });
      }
      setJobs(dataMerge);
      setData(res);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <div className="CompanyDetails">
        <div className="container">
          <h1 style={{textAlign:"center",marginBottom:"30px",color:"#C43820"}}>Chi tiết công ty</h1>
          {data && (
            <Row>
              <Col span={24}>
                <div className="CompanyDetails__wrap">
                  <div className="mb-2">
                    Tên công ty :<strong>{data.companyName}</strong>
                  </div>
                  <div className="mb-2">
                    Địa chỉ :<strong>{data.address}</strong>
                  </div>
                  <div className="mb-2">
                    Số lượng nhân sự :<strong>{data.quantityPeople}</strong>
                  </div>
                  <div className="mb-2">
                    Thời gian làm việc :<strong>{data.workingTime}</strong>
                  </div>
                  <div className="mb-2">
                    Link website:
                    <strong>{data.website}</strong>
                  </div>
                  <div className="mb-2">
                    Mô tả
                    <strong>:{data.desc}</strong>
                  </div>
                  <div className="mb-2">
                    Mô tả chi tiết :<strong>{data.detail}</strong>
                  </div>
                </div>
              </Col>
            </Row>
          )}
          <h1 className="mb-5 mt-3" style={{textAlign:"center",marginBottom:"30px",color:"#C43820"}}>Danh sách các Jobs:</h1>
          {jobs.length > 0 && (
            <>
              <Row gutter={[20, 20]}>
                {jobs.map((item, index) => (
                  <Col xxl={8} xl={8} lg={12} md={12} sm={24} xs={24} key={index}>
                    <div className="mb-2" style={{height:"100%"}}>
                      <JobItem item={item} />
                    </div>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CompanyDetail;
