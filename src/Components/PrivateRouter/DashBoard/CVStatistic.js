import { useEffect, useState } from "react";
import { getCookie } from "../../helper/cookie";
import { getCVByIdCompany } from "../../../Services/getCV";
import { UserOutlined } from "@ant-design/icons";

function CVStatistic() {
  const [CV, setCV] = useState([]);
  const id = getCookie("id");

  useEffect(() => {
    const fetchhAPI = async () => {
      const result = await getCVByIdCompany(id);

      let option = {
        CVCount: 0,
        CVOn: 0,
        CVOff: 0,
      };
      if (result.length > 0) {
        option.CVCount = result.length;
        result.forEach((item) => {
          item.statusRead ? option.CVOn++ : option.CVOff++;
        });
      }
      setCV(option);
    };
    fetchhAPI();
  }, []);

  return (
    <>
      <div className="dashboard__CV">
        <h4 className="dashboard__CV--title">Tổng lượng CV</h4>
        <div className="dashboard__align">
          <div className="dashboard__img dashboard__img--red">
            <UserOutlined />
          </div>
          <div className="dashboard__text">
            <div className="mt-2">Số lượng CV :{CV.CVCount}</div>
            <div className="mt-2">CV đang bật :{CV.CVOn}</div>
            <div className="mt-2">CV đang tắt :{CV.CVOff}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CVStatistic;
