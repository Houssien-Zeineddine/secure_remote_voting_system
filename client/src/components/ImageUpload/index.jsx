import React, { useRef, useState } from "react";
import DefaultImage from "../../assets/sidebar icons/default profile picture.jpg";
import EditIcon from "../../assets/image-edit.svg";

const ImageUpload = () => {
  const [avatarURL, setAvatarURL] = useState(DefaultImage);
  const fileUploadRef = useRef();

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = async () => {
    try {
      setAvatarURL(UploadingAnimation);
      const uploadedFile = fileUploadRef.current.files[0];
      const formData = new FormData();

      formData.append("image", uploadedFile);

      const response = await fetch("http://127.0.0.1:8000/api/upload", {
        method: "post",
        body: formData,
      });

      if (response.status === 200) {
        const data = await response.json();
        setAvatarURL(data?.url);
      }
    } catch (error) {
      console.log(error);
      setAvatarURL(DefaultImage);
    }
  };

  return (
    <div>
      <div className="image-upload-container">
        <img src={avatarURL} alt="Avatar" className="avatar-image" />
        <form id="form" encType="mutipart/form-data" className="upload-form">
          <button
            type="submit"
            className="edit-button"
            onClick={{ handleImageUpload }}
          >
            <img src={EditIcon} alt="Edit Image" className="edit-icon" />
          </button>
          <input
            type="file"
            id="file"
            ref={fileUploadRef}
            onChange={uploadImageDisplay}
            className="file-input"
          />
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;
