import { useEffect, useState } from "react";
import { get } from "../../utils/requestAPI";
import { Col, Row, Tag } from "antd";
import {Link} from "react-router-dom";

function TagList() {
  const [tag, setTag] = useState([]);
  useEffect(() => {
    const fetchTag = async () => {
      const res = await get("tags");
      setTag(res);
    };
    fetchTag();
  }, []);
  return (
    <>
      <div className="mt-2 wow animate__animated animate__bounceInLeft">
        <h5 style={{margin:"20px 0"}}>Đề xuất từ khóa:</h5>
        <Row gutter={[10,10]}>
          <Col span={24}>
            {tag.map((item) => (
              <Link to={`search?tags=${item.value || ""}`}  key={item.key}>
                <Tag color="blue" style={{textTransform:"uppercase"}} className="Banner__tag">
                  {item.value}
                </Tag>
              </Link>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TagList;
