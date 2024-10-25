import { Image, Upload } from "antd";
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

// Helper function to convert file to Base64
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

// UploadAdmin Component
const UploadAdmin = ({ onFileChange, avatar }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState(
    avatar ? [{ url: avatar, name: "Avatar", status: "done" }] : []
  );

  useEffect(() => {
    if (avatar) {
      setFileList([{ url: avatar, name: "Avatar", status: "done" }]);
    }
  }, [avatar]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (onFileChange) {
      onFileChange(newFileList); // Send fileList back to the parent component
    }
  };

  const beforeUpload = (file) => {
    return false; // Disable automatic upload
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div className="upload">
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={beforeUpload}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
};

export default UploadAdmin;
