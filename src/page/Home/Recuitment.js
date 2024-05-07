import { Swiper, SwiperSlide } from "swiper/react";
import { FireOutlined } from "@ant-design/icons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./styles.css";
import { useEffect, useState } from "react";
import { get } from "../../utils/requestAPI";
import { Link } from "react-router-dom";

function Recuitment() {
  const [company, setCompany] = useState([]);
  useEffect(() => {
    const fetchCompany = async () => {
      const res = await get("company");
      setCompany(res);
    };
    fetchCompany();
  }, []);
  return (
    <>
      {company.length > 0 && (
        <div
          className="Recuitment"
          style={{
            backgroundImage:
              "url(https://static.topcv.vn/v4/image/welcome/box-flash-badge/cover.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="boxtitle">
              <div className="boxtitle__wrap" style={{ marginBottom: "20px" }}>
                <div className="boxtitle__icon">
                  <FireOutlined />
                </div>
                <h2 className="boxtitle__title">
                  Công ty hot nhất{" "}
                  <span style={{ color: "#DD3F24" }}>hôm nay</span>
                </h2>
              </div>
            </div>
            <div className="Recuitment__slider">
              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{ height: "100%" }}
              >
                {company.map((item) => (
                  <SwiperSlide key={item.id} className=" wow animate__animated animate__fadeInDown">
                    <Link style={{textDecoration:"none",color:"#000"}} to={`company/${item.id}`}>
                    
                    <div
                      className="Recuitment__wrap"
                      style={{ height: "100%" }}
                    >
                      <div className="Recuitment__img">
                        <img src={item.thumbnail} alt="anh dang tai" />
                      </div>
                      <div className="Recuitment__content">
                        {item.companyName}
                      </div>
                    </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div style={{textAlign:"center"}}>

            <Link to="/company">
              <button
                className="mt-5 hinh hinh--one Recuitment__btn"
              >
                Xem thêm
              </button>
            </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Recuitment;
