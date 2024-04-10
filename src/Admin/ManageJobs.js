import { Button, Card, Col, Row, Table, Tag, Tooltip, message } from "antd";
import {
  EyeOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { getCookie } from "../Components/helper/cookie";
import { useEffect, useState } from "react";
import { getJobsByIdCompany } from "../Services/getJobsByIdCompany";
import { Link, useNavigate } from "react-router-dom";
import UpdateJob from "./UpdateJob";
import DeleteJob from "./DeleteJob";
import GoBack from "../GoBack";
import LoadingAnimation from "../Loading";
function ManageJobs() {
  const navigate = useNavigate();
  const id = getCookie("id");
  const [data, setData] = useState([]);

  const [reload, setReload] = useState(false);
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getJobsByIdCompany(id);
      setData(res);
    };
    fetchAPI();
  }, [reload]);
  const columns = [
    {
      key: "name",
      dataIndex: "name",
      title: "Tên Job",
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      key: "tags",
      dataIndex: "tags",
      title: "Tags",
      render: (_, record) =>
        record.tags.map((tag, index) => (
          <Tag style={{ marginBottom: "5px" }} key={index} color="blue">
            {tag}
          </Tag>
        )),
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
    },
    {
      key: "salary",
      dataIndex: "salary",
      title: "Mức lương($)",
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
      sorter: (a, b) => parseInt(a.salary) - parseInt(b.salary),
    },
    {
      key: "createAt",
      dataIndex: "createAt",
      title: "Thời gian đăng bài",
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
    },
    {
      key: "updateAt",
      dataIndex: "updateAt",
      title: "Thời gian cập nhập",
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
    },
    {
      key: "status",
      title: "Trạng thái",
      render: (_, record) => {
        return (
          <>
            {record.status ? (
              <Tag color="green">Đang bật</Tag>
            ) : (
              <Tag color="red">Đang tắt</Tag>
            )}
          </>
        );
      },
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
    },
    {
      key: "action",
      title: "Hành động",
      render: (_, record) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link to={`/jobdetails/${record.id}`}>
                <Tooltip title="xem chi tiet">
                  <Button className="ms-1" icon={<EyeOutlined />} />
                </Tooltip>
              </Link>
              <Tooltip title="Cập nhập Job">
                <UpdateJob
                  record={record}
                  onReload={setReload}
                  reload={reload}
                />
              </Tooltip>
              <Tooltip title="Xóa Job">
                <DeleteJob
                  record={record}
                  onReload={setReload}
                  reload={reload}
                />
              </Tooltip>
            </div>
          </>
        );
      },
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
    },
  ];
  const handleClick = () => {
    navigate("/createjob");
  };
  return (
    <>
      <Row>
        <Col span={24}>
          <div style={{ padding: "80px 0" }}>
            <h3
              style={{
                color: "#C43820",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Danh sách các Job
            </h3>
            <GoBack />
            {data ? (
              <Card
                style={{ overflowX: "scroll", height: "100vh" }}
                title="Danh sách các Job"
                extra={
                  <Button
                    onClick={handleClick}
                    size="middle"
                    style={{ marginLeft: "20px" }}
                    type="primary"
                  >
                    + Tạo việc làm
                  </Button>
                }
              >
                <Table
                  rowKey="id"
                  dataSource={data.reverse()}
                  columns={columns}
                />
              </Card>
            ) : (
              <LoadingAnimation />
            )}
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ManageJobs;
