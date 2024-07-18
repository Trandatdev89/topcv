import { Col, Row } from "antd";
import SearchForm from "./SearchForm";
import TagList from "./TagList";
import "./index.scss";
import Recuitment from "./Recuitment.js";
import GoodJob from "./GoodJob.js";
import Setting from "./setting.js";
import Tech from "./Tech.js";
import WOW from 'wowjs';
import 'animate.css';
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);
  return (
    <>
      <div className="Banner">
        <div className="container">
          <div className="Banner__wrap">
            <div className="row">
              <div className="col-12">  
                  <SearchForm />
                  <TagList />
              </div>
              
            </div>
          </div>
          <div className="Banner__group wow animate__animated animate__fadeInRight">
            <Row gutter={[10, 10]}>
              <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                <div className="Banner__box">
                  <div className="Banner__img">
                    <img src="https://c.topdevvn.com/v4/_next/static/media/create-cv.268c1aeb.svg" />
                  </div>
                  <div className="Banner__text">Tạo cv</div>
                </div>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                <div className="Banner__box">
                  <div className="Banner__img">
                    <img src="https://c.topdevvn.com/v4/_next/static/media/convert-cv.149b487b.svg" />
                  </div>
                  <div className="Banner__text">Chuẩn hóa cv</div>
                </div>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                <div className="Banner__box">
                  <div className="Banner__img">
                    <img src="https://c.topdevvn.com/v4/_next/static/media/it-jobs-fresher.fb65728f.svg" />
                  </div>
                  <div className="Banner__text">Việc làm Fresher</div>
                </div>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                <div className="Banner__box">
                  <div className="Banner__img">
                    <img src="https://c.topdevvn.com/v4/_next/static/media/personality-test.055a829e.svg" />
                  </div>
                  <div className="Banner__text">Blog IT</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <GoodJob />
      <Recuitment />
      <Setting />
      <Tech />
    </>
  );
}

export default Home;
