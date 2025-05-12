import React, { useContext, useRef, useState, useEffect } from "react";
import defaultImage from "../../assets/sidebar icons/default profile picture.jpg";
import editIcon from "../../assets/image-edit.svg";
import uploadingAnimation from "../../assets/Cloud uploading.gif";
import "./style.css";
import { AuthContext } from "../Context/AuthContext";
import axiosBaseUrl from "../../Utils/axios";

const ImageUpload = () => {
  const { user, setUser } = useContext(AuthContext);
  const [avatarURL, setAvatarURL] = useState(defaultImage);
  const access_token = localStorage.getItem("access_token");
  const fileUploadRef = useRef();

  useEffect(() => {
    if (user && user.profile_picture_path) {
      setAvatarURL(
        `http://127.0.0.1:8000/storage/${user.profile_picture_path}`
      );
    } else {
      setAvatarURL(defaultImage);
    }
  }, [user?.profile_picture_path]);

  const handleImageUploadClick = () => {
    fileUploadRef.current.click(); // opens file dialog
  };

  const uploadImageDisplay = async () => {
    try {
      const uploadedFile = fileUploadRef.current.files[0];
      if (!uploadedFile) return;

      setAvatarURL(uploadingAnimation);

      const formData = new FormData();
      formData.append("image", uploadedFile);

      const response = await axiosBaseUrl.post("/user/upload", formData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        const data = response.data;
        setAvatarURL(
          `http://127.0.0.1:8000/storage/${user.profile_picture_path}`
        );
        setUser((prevUser) => ({
          ...prevUser,
          profile_picture_path: data.path,
        }));
      }
    } catch (error) {
      console.log("Upload failed", error);
      setAvatarURL(defaultImage);
    }
  };

  return (
    <div className="image-upload-container">
      <img src={avatarURL} alt="Avatar" className="avatar-image" />
      <button
        type="button"
        onClick={handleImageUploadClick}
        className="edit-button"
      >
        <img src={editIcon} alt="Edit" className="edit-icon" />
      </button>
      <input
        type="file"
        ref={fileUploadRef}
        onChange={uploadImageDisplay}
        className="file-input"
        style={{ display: "none" }}
        accept="image/*"
      />
    </div>
  );
};

export default ImageUpload;
