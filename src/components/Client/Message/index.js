import { message } from "antd";

const Message = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Đăng nhập thành công!",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Đăng nhập thất bại!",
    });
  };

  return <>{contextHolder}</>;
};

export default Message;
