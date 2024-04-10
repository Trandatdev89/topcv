import {
  FacebookOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="Footer__contact">
                <img src="https://cdn.topdev.vn/v4/assets/images/td-logo.png" />
                <p className="Footer__desc">
                  Tầng 12A, Toà nhà AP Tower, 518B Điện Biên Phủ, Phường 21,
                  Quận Bình Thạnh, Thành phố Hồ Chí Minh
                </p>
                <p className="Footer__desc">
                  Liên hệ: 028 6273 3496 - contact@topdev.vn
                </p>
                <h4>
                  <strong>Chứng nhận bởi</strong>
                </h4>
                <img src="https://accounts.topdev.vn/asset/images/logo_bocongthuong.jpgx" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="Footer__content">
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <ul className="Footer__list">
                      <li className="Footer__item">
                        <b>Về TopDev</b>
                      </li>
                      <li className="Footer__item">Liên hệ</li>
                      <li className="Footer__item">Thỏa thuận sử dụng</li>
                      <li className="Footer__item">Cơ hội việc làm</li>
                      <li className="Footer__item">Quy định bảo mật</li>
                      <li className="Footer__item">
                        Quy chế hoạt động của sàn giao dịch thương mại điện tử
                        TopDev
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <ul className="Footer__list">
                      <li className="Footer__item">
                        <b>Ứng viên</b>
                      </li>
                      <li className="Footer__item">Tính lương Gross - Net</li>
                      <li className="Footer__item">Tạo CV</li>
                      <li className="Footer__item">Tìm kiếm công việc IT</li>
                      <li className="Footer__item">Trắc nghiệm tính cách</li>
                    </ul>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <ul className="Footer__list">
                      <li className="Footer__item">
                        <b>Nhà tuyển dụng</b>
                      </li>
                      <li className="Footer__item">Đăng việc làm IT</li>
                      <li className="Footer__item">Tìm kiếm nhân tài</li>
                      <li className="Footer__item">Báo cáo thị trường IT</li>
                      <li className="Footer__item">Tạo tài khoản</li>
                    </ul>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <ul className="Footer__list">
                      <li className="Footer__item">
                        <b>Theo dõi chúng tôi tại</b>
                      </li>
                      <div className="Footer__icons">
                      <li className="Footer__item">
                        <a href ="https://daca.vn" className="Footer__link">
                          <FacebookOutlined />
                        </a>
                      </li>
                      <li className="Footer__item">
                        <a href ="https://daca.vn" className="Footer__link">
                          <LinkedinOutlined />
                        </a>
                      </li>
                      <li className="Footer__item">
                        <a href ="https://daca.vn" className="Footer__link">
                          <YoutubeOutlined />
                        </a>
                      </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-12">
              <div className="Footer__year">
                © 2014-2024 TopCV Vietnam JSC. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
