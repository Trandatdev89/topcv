import { Tag } from "antd";
import "./index.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { get } from "../../utils/requestAPI";
import SearchList from "./SearchList";
import GoBack from "../../GoBack";
import LoadingAnimation from "../../Loading";
function Search() {
  const [param, setParam] = useSearchParams();
  const citySearch = param.get("city") || "";
  let tagSearch = param.get("tags") || "";
  tagSearch=tagSearch.toLowerCase(); 
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await get("jobs");
      if (res) {
        const newData = res.filter((item) => {
          const city = citySearch ? item.city?.includes(citySearch) : true;
          const tags = tagSearch ? item.tags?.includes(tagSearch) : true;
          const status = item.status;
          return city && tags && status;
        });
        setData(newData.reverse());
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="Search" style={{ minHeight: "100vh" }}>
        <div className="container">
          <GoBack />
          {data ? (
            <>
              <h3 style={{ marginBottom: "30px", color: "#C43820" }}>
                <span>Kết Quả Tìm Kiếm: {data.length} Jobs </span>
                {citySearch && <Tag color="yellow"> {citySearch}</Tag>}
                {tagSearch && <Tag color="blue"> {tagSearch}</Tag>}
              </h3>
              <SearchList data={data} />
            </>
          ) : (
            <LoadingAnimation />
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
