import { useEffect, useState } from "react";
import { getCookie } from "../Components/helper/cookie";
import { getCVByIdCompany } from "../Services/getCV";
import { Button, Card, Table, Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import DeleteCV from "./DeleteCV";
import { get } from "../utils/requestAPI";
import GoBack from "../GoBack";
import LoadingAnimation from "../Loading";
function ManageCV() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const id = getCookie("id");
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getCVByIdCompany(id);
      const result = await get("jobs");
      const resultFinal = [];
      for (let i = 0; i < res.length; i++) {
        resultFinal.push({
          ...res[i],
          info: result.find((item) => item.id === res[i].idJob),
        });
      }

      setData(resultFinal);
    };
    fetchAPI();
  }, [reload]);

  const coloumns = [
    {
      key: "name",
      dataIndex: "name",
      title: "Họ tên",
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      key: "nameJob",
      title: "Tên job",
      render: (_, record) => {
        return <>{record.info.name}</>;
      },
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
    },
    {
      key: "phone",
      dataIndex: "phone",
      title: "Số điện thoại",
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
    },
    {
      key: "email",
      dataIndex: "email",
      title: "Email",
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
    },
    {
      key: "desc",
      dataIndex: "desc",
      title: "Mô tả",
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
    },

    {
      key: "createAt",
      dataIndex: "createAt",
      title: "Ngày tạo",
      responsive: ["xxl", "xl", "lg", "md", "sm", "xs"],
    },
    {
      key: "statusRead",
      title: "Trạng thái",
      render: (_, record) => {
        return (
          <>
            {record.statusRead ? (
              <Tag color="success">Đã xem</Tag>
            ) : (
              <Tag color="gray">Chưa xem</Tag>
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
                justifyContent: "space-between",
              }}
            >
              <Link to={"/cvdetail/" + record.id}>
                <Tooltip title="Xem chi tiết">
                  <Button className="me-2" icon={<EyeOutlined />} />
                </Tooltip>
              </Link>
              <Tooltip title="Xóa CV">
                <DeleteCV
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
  return (
    <>
      <div style={{ padding: "80px 0" }}>
        <h3
          style={{
            color: "#C43820",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Danh sách các CV
        </h3>
        <GoBack />
        {data.length > 0 ? (
          <Card title="Danh sách các CV" style={{ overflowX: "scroll" }}>
            <Table dataSource={data.reverse()} columns={coloumns} rowKey="id" />
          </Card>
        ) : (
          <LoadingAnimation />
        )}
      </div>
    </>
  );
}

export default ManageCV;
