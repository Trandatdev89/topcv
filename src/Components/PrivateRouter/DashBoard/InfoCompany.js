import { useEffect, useState } from "react";
import { getCookie } from "../../helper/cookie";
import { getCompanyById } from "../../../Services/getCompanyName";
import { InfoCircleOutlined } from "@ant-design/icons";

function InfoCompany() {
  const [jobs, setJobs] = useState([]);
  const id = getCookie("id");

  useEffect(() => {
    const fetchhAPI = async () => {
      const result = await getCompanyById(id);
      setJobs(result);
    };
    fetchhAPI();
  }, []);
  return (
    <>
      <div className="dashboard__info">
        <h4 className="dashboard__info--title">Thông tin công ty</h4>
        <div className="dashboard__align">
          <div className="dashboard__img dashboard__img--blue">
            <InfoCircleOutlined />
          </div>
          <div className="dashboard__text">
            <div className="mt-2">Tên công ty :{jobs.companyName}</div>
            <div className="mt-2">Email :{jobs.email}</div>
            <div className="mt-2">SDT :{jobs.phone}</div>
            <div className="mt-2">Số nhân viên:{jobs.quantityPeople}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCompany;
