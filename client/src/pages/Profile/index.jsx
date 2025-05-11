import React, { useEffect, useState, useContext } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AuthContext } from "../../components/Context/AuthContext";
import "./style.css";
import axiosBaseUrl from "../../Utils/axios";
import ImageUpload from "../../components/ImageUpload";
import defaultImage from "../../assets/sidebar icons/default profile picture.jpg";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [tempData, setTempData] = useState({ ...profileData });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    if (user) {
      setProfileData(user);
      setTempData(user);
    }
    console.log(user);
  }, [user]);

  if (!profileData) {
    return <div>Loading profile...</div>;
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setTempData({
      ...tempData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    console.log("Access token:", access_token);
    try {
      const response = await axiosBaseUrl.post("/user/editprofile", tempData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      console.log("Edit profile API response", response);

      setProfileData({ ...tempData });
      setIsEditing(false);
      setUser(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="along-sidebar-positioning">
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="add-remove-photo">
          {user.profile_picture_path ? (
            <img
              src="../../assets/developer 1.svg"
              alt="Profile Image"
              className="profile-image"
            />
          ) : (
            <img
              src={defaultImage}
              alt="Default Profile Image"
              className="profile-image"
            />
          )}
        </div>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="profile-form-container">
            <Input
              label="first_name"
              labelText="First Name"
              type="text"
              name="first_name"
              id="first_name"
              classNames="profile-form-container-input input-vertical"
              value={tempData.first_name}
              onChange={handleChange}
            />
            <Input
              label="middle_name"
              labelText="Middle Name"
              type="text"
              name="middle_name"
              id="middle_name"
              classNames="profile-form-container-input input-vertical"
              value={tempData.middle_name}
              onChange={handleChange}
            />
            <Input
              label="last_name"
              labelText="Last Name"
              type="text"
              name="last_name"
              id="last_name"
              classNames="profile-form-container-input input-vertical"
              value={tempData.last_name}
              onChange={handleChange}
            />
            <Input
              label="birthday"
              labelText="Birthday"
              type="date"
              name="birthday"
              id="birthday"
              classNames="input-vertical edit-profile-birthday-input"
              value={tempData.birthday}
              placeholder="Enter your birthday"
              onChange={handleChange}
            />
            <Input
              label="id_number"
              labelText="ID Number"
              type="text"
              name="id_number"
              id="id_number"
              classNames="profile-form-container-input input-vertical"
              value={tempData.id_number}
              onChange={handleChange}
            />
            <Button
              text={isLoading ? "Saving..." : "Save Changes"}
              variant="blue"
              size="small"
              type="submit"
            />
          </form>
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
