import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { getCompanyName } from "../../Services/getCompanyName";
import JobItem from "./JobItem";

function SearchList(props) {
  const { data = [] } = props;
  const [queryName, setQueryName] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getCompanyName();
      const newData = data.map((item) => {
        const infoCompany = res.find(
          (itemCompany) => itemCompany.id === item.IdCompany && itemCompany
        );
        return {
          infoCompany: infoCompany,
          ...item,
        };
      });
      setQueryName(newData);
    };
    if (data.length > 0) {
      fetchAPI();
    }
  }, [data]);

 
  return (
    <>
      {queryName.length > 0 ? (
        <Row gutter={[15, 15]}>
          {queryName.map((item) => (
            <Col span={24} key={item.id}>
              <JobItem item={item} />
            </Col>
          ))}
        </Row>
      ) : (
        <h2 className="mt-3">Không có kết quả nào phù hợp cho bạn</h2>
      )}
    </>
  );
}

export default SearchList;
