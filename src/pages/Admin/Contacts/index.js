/* eslint-disable jsx-a11y/anchor-is-valid */
import { Radio, Space, Table, Tag } from "antd";

const columns = [
  {
    title: "From",
    dataIndex: "from",
    key: "from",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    from: "John Brown",
    email: 32,
    subject: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    from: "Jim Green",
    email: 42,
    subject: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    from: "Joe Black",
    email: 32,
    subject: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const Contacts = () => {
  return (
    <div>
      <div></div>
      <Radio.Group
        style={{
          marginBottom: 10,
        }}
      />
      <Table
        columns={columns}
        pagination={{
          position: ["bottomCenter"],
        }}
        dataSource={data}
      />
    </div>
  );
};
export default Contacts;
