import React, { useState } from 'react';
import axios from 'axios';

const Discography = () => {
  const [songTitle, setSongTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => setSongTitle(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = async () => {
    if (!songTitle || !image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("songTitle", songTitle);
    formData.append("songimage", image); // This must match upload.single("image")

    try {
      const response = await axios.post("http://localhost:5000/api/addDiscography", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      if (response.data.success) {
        alert("Discography item added successfully!");
        setSongTitle('');
        setImage(null);
      } else {
        alert("Failed to add discography item.");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container-fluid py-5" style={{ background: "linear-gradient(to right, #f5f7fa, #c3cfe2)", minHeight: "100vh" }}>
      <h1 className="text-center mb-4 fw-bold" style={{ color: "#34495e" }}>🎶 Add to Discography</h1>
      
      <div className="p-4 mx-auto rounded-4 shadow-lg border" style={{ maxWidth: '600px', backgroundColor: "#fff" }}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Song Title</label>
          <input
            type="text"
            className="form-control form-control-lg rounded-3"
            value={songTitle}
            placeholder="Enter song title"
            onChange={handleTitleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Upload Image</label>
          <input
            type="file"
            className="form-control form-control-lg rounded-3"
            onChange={handleImageChange}
          />
        </div>

        <button
          className="btn btn-lg btn-primary w-100 fw-bold mt-3"
          onClick={handleSubmit}
        >
          📤 Upload
        </button>
      </div>
    </div>
  );
};

export default Discography;
