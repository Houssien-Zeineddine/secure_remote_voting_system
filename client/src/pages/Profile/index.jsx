import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Calendar from "../../assets/calendar 1.svg";
import { useState } from "react";
import "./style.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    first_name: "Houssien",
    middle_name: "mahdi",
    last_name: "Zeineddine",
    birthday: "11/10/1993",
    id_number: "1234 2144 5215",
  });

  const [tempData, setTempData] = useState({ ...profileData });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setTempData({
      ...tempData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setProfileData({ ...tempData });
    setIsEditing(false);
    //API added here to send the saved data to bachend to database
  };

  return (
    <div className="along-sidebar-positioning">
      <div className="profile-container">
        <h1>Profile</h1>
        <div>
          <a href="">Add Photo</a>
          <a href="">Remove Photo</a>
        </div>
        {isEditing ? (
          <div className="profile-form-container">
            <Input
              label="first_name"
              labelText="First Name"
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter your first name"
              classNames="profile-form-container-input"
              value={tempData.first_name}
              onChange={handleChange}
            />
            <Input
              label="middle_name"
              labelText="Middle Name"
              type="text"
              name="middle_name"
              id="middle_name"
              placeholder="Enter your first name"
              classNames="profile-form-container-input"
              value={tempData.middle_name}
              onChange={handleChange}
            />
            <Input
              label="last_name"
              labelText="Last Name"
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Enter your last name"
              classNames="profile-form-container-input"
              value={tempData.last_name}
              onChange={handleChange}
            />
            <div className="input-wrapper profile-form-container-input">
              <Input
                label="birthday"
                labelText="Birthday"
                type="text"
                name="birthday"
                id="birthday"
                placeholder="Birthday"
                classNames="profile-form-container-input"
                value={tempData.birthday}
                onChange={handleChange}
              />
              <img src={Calendar} alt="" className="birthday-calendar" />
            </div>
            <Input
              label="id_number"
              labelText="ID Number"
              type="text"
              name="id_number"
              id="id_number"
              placeholder="ID Number"
              classNames="profile-form-container-input"
              value={tempData.id_number}
              onChange={handleChange}
            />
            <Button
              text="Save Changes"
              variant="blue"
              size="small"
              onClick={handleSave}
            />
          </div>
        ) : (
          <div className="view-mode">
            <div className="view-mode-label">
              <label htmlFor="first_name">First Name</label>
              <span>{profileData.first_name}</span>
            </div>
            <div className="view-mode-label">
              <label htmlFor="middle_name">Middle Name</label>
              <span>{profileData.middle_name}</span>
            </div>
            <div className="view-mode-label">
              <label htmlFor="last_name">Last Name</label>
              <span>{profileData.last_name}</span>
            </div>
            <div className="view-mode-label">
              <label htmlFor="birthday">Birthday</label>
              <span>{profileData.birthday}</span>
            </div>
            <div className="view-mode-label">
              <label htmlFor="id_number">ID Number</label>
              <span>{profileData.id_number}</span>
            </div>
            <Button
              text="Edit Profile"
              variant="white"
              size="small"
              type="submit"
              className="edit-profile-btn"
              onClick={handleEdit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
