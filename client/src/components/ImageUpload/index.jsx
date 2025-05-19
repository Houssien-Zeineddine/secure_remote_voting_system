import React, { useContext, useRef, useState, useEffect } from "react";
import defaultImage from "../../assets/sidebar icons/default profile picture.jpg";
import editIcon from "../../assets/image-edit.svg";
import uploadingAnimation from "../../assets/Cloud uploading.gif";
import "./style.css";
import { AuthContext } from "../Context/AuthorizationContext";
import axiosInstance from "../../Utils/axios";
import getProfilePictureUrl from "../../Utils/helpers";

const ImageUpload = () => {
  const { user, setUser } = useContext(AuthContext);
  const [avatarURL, setAvatarURL] = useState(defaultImage);
  const [isUploading, setIsUploading] = useState(false);
  const access_token = localStorage.getItem("access_token");
  const fileUploadRef = useRef();

  useEffect(() => {
    if (user && user.profile_picture_path) {
      const profilePicUrl = getProfilePictureUrl(user.profile_picture_path);
      setAvatarURL(profilePicUrl || defaultImage);
    } else {
      setAvatarURL(defaultImage);
    }
  }, [user?.profile_picture_path]);

  const handleImageUploadClick = () => {
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = async () => {
    try {
      const uploadedFile = fileUploadRef.current.files[0];
      if (!uploadedFile) return;

      const tempImageUrl = URL.createObjectURL(uploadedFile);
      setAvatarURL(tempImageUrl);

      setIsUploading(true);

      const formData = new FormData();
      formData.append("image", uploadedFile);

      const response = await axiosInstance.post("/user/upload", formData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        const data = response.data;
        const imagePath = data.profile_picture_path || data.path;
        const newImageUrl = getProfilePictureUrl(imagePath);

        if (newImageUrl) {
          setUser((prevUser) => ({
            ...prevUser,
            profile_picture_path: imagePath,
          }));
        } else {
          throw new Error("Failed to get image URL");
        }
      }
    } catch (error) {
      console.error("Upload failed:", error);
      const currentProfilePic = user?.profile_picture_path
        ? getProfilePictureUrl(user.profile_picture_path)
        : defaultImage;
      setAvatarURL(currentProfilePic);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="image-upload-container">
      <div className="profile-image-wrapper">
        <img
          src={avatarURL}
          alt="Avatar"
          className={`avatar-image ${isUploading ? "uploading" : ""}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage;
          }}
        />
      </div>
      <button
        type="button"
        onClick={handleImageUploadClick}
        className="edit-button"
        disabled={isUploading}
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
