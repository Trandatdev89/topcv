import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteCV } from "../../Services/getCV";
function DeleteCV(props) {
    const {record,onReload,reload}=props;
    const handleComfirm=async(id)=>{
        const res=await deleteCV(id);
        if(res){
          onReload(!reload);  
        }
        else{
            alert("xoa khong thanh cong!")
        }
    }
  return (
    <>
      <Popconfirm
        title="Ban co chac chan muon xoa no"
        description="Neu xoa thi se khong the khoi phuc job nay?"
        okText="Yes"
        cancelText="No"
        onConfirm={() => handleComfirm(record.id)}
      >
        <Button className="ms-1" danger icon={<DeleteOutlined />} />
      </Popconfirm>
    </>
  );
}

export default DeleteCV;
