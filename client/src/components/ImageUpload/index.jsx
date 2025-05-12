import React, { useContext, useRef, useState, useEffect } from "react";
import defaultImage from "../../assets/sidebar icons/default profile picture.jpg";
import editIcon from "../../assets/image-edit.svg";
import uploadingAnimation from "../../assets/Cloud uploading.gif";
import "./style.css";
import { AuthContext } from "../Context/AuthContext";
import axiosBaseUrl from "../../Utils/axios";

const ImageUpload = () => {
  const { user } = useContext(AuthContext);

  const [avatarURL, setAvatarURL] = useState(defaultImage);
  const access_token = localStorage.getItem("access_token");
  const fileUploadRef = useRef();

  useEffect(() => {
    if (user && user.profile_picture_path) {
      setAvatarURL(user.profile_picture_path);
    } else {
      setAvatarURL(defaultImage);
    }
  }, [user]);

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

      console.log("Formdata:", formData);

      const response = await axiosBaseUrl.post("/user/upload", formData, {
        headers: { Authorization: `Bearer ${access_token}` },
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
        <form
          id="form"
          encType="multipart/form-data"
          className="upload-form"
          onSubmit={handleImageUpload}
        >
          <button type="submit" className="edit-button">
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
