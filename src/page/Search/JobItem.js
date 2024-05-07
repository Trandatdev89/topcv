import { Col, Row, Tag } from "antd";
import { Link } from "react-router-dom";

function JobItem(props) {
  const { item } = props;
  
  return (
    <>
      <Link to={`/jobs/${item.id}`}>
        <div className="Search__item">
          
          <Row gutter={[15,15]}>
            <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
              <div className="Search__img">
                <img src={item?.infoCompany?.thumbnail} />
              </div>
            </Col>
            <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
              <div className="Search__content">
                <div className="Search__name">{item.name}</div>
                <div className="Search__languae">
                  Ngôn ngữ:
                  {item.tags.map((itemTag, index) => (
                    <Tag color="blue" key={index}>
                      {itemTag}
                    </Tag>
                  ))}
                </div>
                <div className="Search__city">
                  Thành phố:
                  {item.city.map((itemCity, index) => (
                    <Tag color="yellow" key={index}>
                      {itemCity}
                    </Tag>
                  ))}
                </div>
                <div className="Search__salary">Lương: {item.salary}$</div>
                <div className="Search__company">
                  Tên công ty : {item?.infoCompany?.companyName}
                </div>
                <div className="Search__day">Ngày tạo : {item.createAt}</div>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </>
  );
}

export default JobItem;
