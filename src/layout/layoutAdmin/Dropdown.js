import {
  BellOutlined,
  MailOutlined,
  UserAddOutlined,
  WarningOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import { Badge, Button, Dropdown } from "antd";

function DropDown() {
  const items = [
    {
      label: (
        <div className="headDrop__box">
          <div className="headDrop__icon">
            <MailOutlined />
          </div>
          <div className="headDrop__content">
            <div>Bạn nhân được 1 tin nhắn mới</div>
            <div>8 phút trước</div>
          </div>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="headDrop__box">
          <div className="headDrop__icon">
            <UserAddOutlined />
          </div>
          <div className="headDrop__content">
            <div>Có người dùng mới đã ứng tuyển</div>
            <div>7 phút trước</div>
          </div>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="headDrop__box">
          <div className="headDrop__icon">
            <WarningOutlined />
          </div>
          <div className="headDrop__content">
            <div>Hệ thống thông báo</div>
            <div>8 phút trước</div>
          </div>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="headDrop__box">
          <div className="headDrop__icon">
            <VerticalAlignBottomOutlined />
          </div>
          <div className="headDrop__content">
            <div>Bạn có một bản nâng cấp mới</div>
            <div>2 phút trước</div>
          </div>
        </div>
      ),
      key: "3",
    },
  ];
  return (
    <>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        placement="bottomRight"
        arrow={true}
        dropdownRender={(menu) => (
          <>
            <div className="headDrop">
              <div className="headDrop__head">
                <div className="headDrop__ring">
                  <BellOutlined /> Notification
                </div>
                <div className="headDrop__view">
                  <a href="https://daca.vn">View All</a>
                </div>
              </div>
              <div className="headDrop__body">{menu}</div>
            </div>
          </>
        )}
      >
        <Badge dot>
          <Button size="large" icon={<BellOutlined />} />
        </Badge>
      </Dropdown>
    </>
  );
}

export default DropDown;
