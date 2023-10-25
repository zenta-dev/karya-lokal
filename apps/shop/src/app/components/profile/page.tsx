"use client";
import React, { useState } from "react";
import { useNavigation } from "react-router-dom";

const Profile = () => {
  const navigation = useNavigation();

  const [profileData, setProfileData] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    address: "123 Main St, City",
  });

  const changeProfilePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageElement = document.getElementById(
          "profile-picture"
        ) as HTMLImageElement;
        imageElement.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <img
          id="profile-picture"
          src="path/to/profile-image.jpg"
          alt="Profile Picture"
          className="w-24 h-24 rounded-full"
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="profile-picture-input"
          onChange={changeProfilePicture}
        />
        <label
          htmlFor="profile-picture-input"
          className="mt-2 bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
        >
          Change Profile Picture
        </label>
      </div>
    </div>
  );
};

export default Profile;
