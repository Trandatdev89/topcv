import { Pagination, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "../../utils/requestAPI";
import "./index.scss";
import AI from "../../img/pexels-photo-373543.jpeg";
import GoBack from "../../GoBack";
import { paginationCompany } from "../../Services/PaginatonJob";
function Company() {
  const [company, setCompany] = useState([]);
  const [skip, setSkip] = useState(0);
  const [dataJob, setDataJob] = useState([]);
  const handleChange = (e, f) => {
    setSkip(e);
  };
  useEffect(() => {
    const fetchCompany = async () => {
      const res = await get("company");
      const result=await paginationCompany(skip);
      setDataJob(res);
      setCompany(result);
    };
    fetchCompany();
  }, [skip]);
  
  return (
    <>
      <div className="Listcompany">
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Danh sách một số công ty
        </h2>
        <div className="container">
          <GoBack />
          <Row gutter={[10, 10]}>
            {company.map((item) => (
              <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} key={item.id}>
                <Link to={`/company/${item.id}`}>
                  <div className="Listcompany__box">
                    <div className="Listcompany__img">
                      <img src={item.thumbnail} />
                    </div>
                    <img className="Listcompany__AI" src={AI} />
                    <div className="Listcompany__content">
                      <div className="Listcompany__companyName">
                        {item.companyName}
                      </div>
                      <div className="Listcompany__desc">{item.desc}</div>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
          <div className="mt-2" style={{ textAlign: "center" }}>
            <Pagination
              defaultCurrent={1}
              total={dataJob.length}
              pageSize={8}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
