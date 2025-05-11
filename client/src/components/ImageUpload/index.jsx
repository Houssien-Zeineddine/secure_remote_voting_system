import React, { useContext, useRef, useState } from "react";
import defaultImage from "../../assets/sidebar icons/default profile picture.jpg";
import editIcon from "../../assets/image-edit.svg";
import uploadingAnimation from "../../assets/Cloud uploading.gif";
import "./style.css";
import { AuthContext } from "../Context/AuthContext";

const ImageUpload = () => {
  const { user } = useContext(AuthContext);

  const [avatarURL, setAvatarURL] = useState(defaultImage);
  const fileUploadRef = useRef();

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = async () => {
    try {
      setAvatarURL(uploadingAnimation);
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
      setAvatarURL(defaultImage);
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
            <img src={editIcon} alt="Edit Image" className="edit-icon" />
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
