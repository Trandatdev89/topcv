import { useEffect, useState } from "react";
import { get } from "../../utils/requestAPI";
import { Tag } from "antd";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { paginationJob } from "../../Services/PaginatonJob";

function GoodJob() {
  const [data, setData] = useState([]);
  const [dataJob, setDataJob] = useState([]);
  const [skip, setSkip] = useState(0);

  const handleChange = (e, f) => {
      setSkip(e);
  };
 
  useEffect(() => {
    const fetchAPI = async () => {
      const res=await get("jobs");
      const  dat= await paginationJob(skip);
      const dataMerge = [];
      const result = await get("company");
      for (let i = 0; i < dat.length; i++) {
        dataMerge.push({
          ...dat[i],
          infoCompany: result.find((item) => item.id === dat[i].IdCompany),
        });
      }
      setDataJob(res);
      setData(dataMerge);
    };
    fetchAPI();
  }, [skip]);
  
  
  return (
    <>
      {data.length > 0 && (
        <>
          <div className="goodJob">
            <div className="container">
             
              <div className="boxtitle">
                <h6
                  className="boxtitle__title"
                  style={{ marginBottom: "30px" }}
                >
                  Việc làm tốt nhất
                </h6>
              </div>
              <div className="goodjob__list">
                <div className="row">
                  {data.map((item) => (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"  key={item.id}>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/jobs/${item.id}`}                     
                      >
                        <div className="goodJob__item wow animate__animated animate__fadeInDown">
                          <div className="goodJob__img">
                            <img
                              src={item.infoCompany.thumbnail}
                              alt="dang tai anh"
                            />
                          </div>
                          <div className="goodJob__content">
                            <h4 className="goodJob__name">{item.name}</h4>
                            <h5 className="goodJob__companyName">
                              {item.infoCompany.companyName}
                            </h5>
                            <div className="goodJob__tag">
                              <Tag color="gray">{item.salary}$</Tag>
                              {(item.city || []).map((subitem, index) => (
                                <Tag color="purple" key={index}>
                                  {subitem}
                                </Tag>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-2" style={{textAlign:"center"}}>
                <Pagination
               
                  defaultCurrent={1}
                  total={dataJob.length}
                  pageSize={9}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default GoodJob;
