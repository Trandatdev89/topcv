import { Badge, Col, Progress, Row } from "antd";
import JobStatistic from "./JobStatistic";
import CVStatistic from "./CVStatistic";
import InfoCompany from "./InfoCompany";
import "./index.scss";
import Chart from "./Chart/Chart";
import ChartPie from "./Chart/ChartPie";
import ChartColumns from "./Chart/ChartColumns";
import GoBack from "../../../GoBack";
function DashBoard() {
  return (
    <>
      <div className="dashboard">
        <GoBack/>
        <div className="dashboard__box">
          <Row gutter={[10, 10]}>
            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
              <JobStatistic />
            </Col>
            <Col  xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
              <CVStatistic />
            </Col>
            <Col  xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
              <InfoCompany />
            </Col>
          </Row>
        </div>
        <div className="dashboard__chart">
          <Row gutter={[20, 40]}>
            <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
              <div className="dashboard__chartLine">
                <h4>Nhu cầu tuyển dụng theo các năm</h4>
                <Chart />
              </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
              <div className="dashboard__chartPie">
              <h4>Thống kê số lượng CV</h4>
                <ChartPie />
              </div>
            </Col>
          </Row>
        </div>
        <div className="statisic">
          <h2 style={{ marginBottom: "30px" }}>
            Thống kê tuyển dụng các vị trị theo hàng tháng:
          </h2>
          <Row gutter={[20, 20]}>
            <Col xxl={10} xl={10} lg={10} md={24} sm={24} xs={24}>
              <div className="statisic__box">
                <Row gutter={[10, 20]}>
                  <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div className="statisic__scale">
                      <div className="statisic__title">Tester</div>
                      <div className="statisic__salary">$23,523</div>
                      <div className="statisic__flex">
                        <Badge dot color="purple">
                          Monthly
                        </Badge>
                        <p>70%</p>
                      </div>
                      <div>Goal</div>
                      <div>
                        <Progress percent={70} strokeColor="blue" />
                      </div>
                    </div>
                  </Col>
                  <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div className="statisic__scale">
                      <div className="statisic__title">Tester</div>
                      <div className="statisic__salary">$23,523</div>
                      <div className="statisic__flex">
                        <Badge dot color="red">
                          Monthly
                        </Badge>
                        <p>70%</p>
                      </div>
                      <div>Goal</div>
                      <div>
                        <Progress percent={70} strokeColor="blue" />
                      </div>
                    </div>
                  </Col>
                  <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div className="statisic__scale">
                      <div className="statisic__title">Tester</div>
                      <div className="statisic__salary">$23,523</div>
                      <div className="statisic__flex">
                        <Badge dot color="blue">
                          Monthly
                        </Badge>
                        <p>70%</p>
                      </div>
                      <div>Goal</div>
                      <div>
                        <Progress percent={70} strokeColor="blue" />
                      </div>
                    </div>
                  </Col>
                  <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <div className="statisic__scale">
                      <div className="statisic__title">Tester</div>
                      <div className="statisic__salary">$23,523</div>
                      <div className="statisic__flex">
                        <Badge dot color="green">
                          Monthly
                        </Badge>
                        <p>70%</p>
                      </div>
                      <div>Goal</div>
                      <div>
                        <Progress percent={70} strokeColor="blue" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xxl={14} xl={14} lg={14} md={24} sm={24} xs={24}>
              <div className="statisic__chart">
                <ChartColumns />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
