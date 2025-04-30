import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Calendar from "../../assets/calendar 1.svg";
import { useState } from "react";
import "./style.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(true);
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
            />
            <Input
              label="middle_name"
              labelText="Middle Name"
              type="text"
              name="middle_name"
              id="middle_name"
              placeholder="Enter your first name"
              classNames="profile-form-container-input"
            />
            <Input
              label="last_name"
              labelText="Last Name"
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Enter your last name"
              classNames="profile-form-container-input"
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
            />
            <Button
              text="Edit Profile"
              variant="white"
              size="small"
              type="submit"
            />
          </div>
        ) : (
          <Input
            label="first_name"
            labelText="First Name"
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Enter your first name"
            classNames="input-vertical"
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
