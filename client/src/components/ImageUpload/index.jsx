import React, { useRef, useState } from "react";
import DefaultImage from "../../assets/sidebar icons/default profile picture.jpg";
import EditIcon from "../../assets/image-edit.svg";

const ImageUpload = () => {
  const [avatarURL, setAvatarURL] = useState(DefaultImage);
  const fileUploadRef = useRef();

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
