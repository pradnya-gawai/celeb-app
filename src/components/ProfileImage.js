import React, { useState } from 'react';
import "../assets/card.css";

const ProfileImage = ({ celebInfo,  }) => {
    return (
        <div className="profile-container">
            {/* Clickable image */}
            <img
                src={celebInfo?.picture || 'default-image-path.jpg'} 
                className="img-fluid img-thumbnail"
                alt="Profile"
            />

        </div>
    );
};

export default ProfileImage;
