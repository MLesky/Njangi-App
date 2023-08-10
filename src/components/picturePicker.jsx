import React, { useState } from 'react';
import { Typography, Avatar } from '@mui/material';

const PicturePicker = ({ selectedPhoto, setSelectedPhoto, photoError, setPhotoError }) => {
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.split('/')[0] === 'image' && file.size <= 1000000) {
      setPhotoError('');
      setSelectedPhoto(URL.createObjectURL(file));
    } else {
      setPhotoError(
        'Invalid file type or size (must be an image file with a size less than or equal to 1 MB).'
      );
      setSelectedPhoto(null);
    }
  };

  return (
    <div>
      <label htmlFor="profile-image">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar alt="profile-pic" src={selectedPhoto} sx={{ width: 100, height: 100 }} />
          <Typography sx={{ color: 'white' }}>Upload Profile Picture</Typography>
        </div>
      </label>
      <input
        type="file"
        id="profile-image"
        accept="image/*"
        hidden
        onChange={handlePhotoChange}
      />
      {photoError !== '' && (
        <Typography sx={{ color: 'red' }}>{photoError}</Typography>
      )}
    </div>
  );
};

export default PicturePicker;