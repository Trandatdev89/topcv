import { useEffect, useState } from "react";
import { getJobsByIdCompany } from "../../../Services/getJobsByIdCompany";
import { getCookie } from "../../helper/cookie";
import { PoundCircleOutlined } from "@ant-design/icons";
function JobStatistic() {
  const [jobs, setJobs] = useState([]);
  const id = getCookie("id");

  useEffect(() => {
    const fetchhAPI = async () => {
      const result = await getJobsByIdCompany(id);
      let option = {
        JobCount: 0,
        JobOn: 0,
        JobOff: 0,
      };
      if (result.length > 0) {
        option.JobCount = result.length;
        result.forEach((item) => {
          item.status ? option.JobOn++ : option.JobOff++;
        });
      }
      setJobs(option);
    };
    fetchhAPI();
  }, []);
  return (
    <>
      <div className="dashboard__job">
        <h4 className="dashboard__job--title">Tổng lượng jobs</h4>
        <div className="dashboard__align">
          <div className="dashboard__img dashboard__img--green">
            <PoundCircleOutlined />
          </div>
          <div className="dashboard__text">
            <div className="mt-2">Số lượng Job :{jobs.JobCount}</div>
            <div className="mt-2">Job đang bật :{jobs.JobOn}</div>
            <div className="mt-2">Job đang tắt :{jobs.JobOff}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobStatistic;
