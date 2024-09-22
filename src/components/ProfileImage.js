import React, { useState } from 'react';
import "../assets/card.css";

const ProfileImage = ({ celebInfo }) => {
    const [imageUrl, setImageUrl] = useState(celebInfo?.picture || '');
    const [file, setFile] = useState(null);

    // Reference for the hidden file input
    const hiddenFileInput = React.useRef(null);

    // Function to handle file input change
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setFile(file);

        // Create a file reader to display image preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUrl(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    // Function to handle image click and trigger file input
    const handleImageClick = () => {
        hiddenFileInput.current.click();
    };

    return (
        <div className="profile-container">
            {/* Clickable image */}
            <img
                src={imageUrl || 'default-image-path.jpg'} // You can replace 'default-image-path.jpg' with a default image URL
                className="img-fluid img-thumbnail"
                alt="Profile"
                onClick={handleImageClick}
                style={{ cursor: 'pointer' }}
            />
            
            {/* Hidden file input */}
            <input
                type="file"
                accept="image/*"
                ref={hiddenFileInput}
                style={{ display: 'none' }} // Hides the input element
                onChange={handleImageUpload}
            />
        </div>
    );
};

export default ProfileImage;
