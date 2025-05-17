import React, { useState } from 'react';
import axios from 'axios';

function Songs() {
  const [title, setsongsTitle] = useState("");
  const [label, setlabel] = useState("");
  const [track, setTrack] = useState(null);

  const fileChange = (e) => setTrack(e.target.files[0]);
  const handleTitleChange = (e) => setsongsTitle(e.target.value);
  const handleLabelChange = (e) => setlabel(e.target.value);

  const doPost = async () => {
    if (!title || !label || !track) {
      alert("Please fill all fields and select a video!");
      return;
    }

    const formData = new FormData();
    formData.append("songTrack", track);
    formData.append("songTitle", title);
    formData.append("songlabel", label);

    try {
      await axios.post('https://music-backend-mmlv.onrender.com/api/addsongs', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert("Song added successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload song.");
    }
  };

  return (
    <div className="container-fluid py-5" style={{ background: "linear-gradient(to right, #e0eafc, #cfdef3)", minHeight: '100vh' }}>
      <h1 className="text-center mb-5 fw-bold" style={{ color: "#2c3e50" }}>🎨 Add New Songs</h1>
      <div className="p-4 mb-5 mx-auto shadow-lg rounded-4 border" style={{
        backgroundColor: "#111",
        color: "#fff",
        maxWidth: '600px',
        border: "1px solid #333"
      }}>
        <div className="mb-3">
          <label className="form-label fw-semibold text-white">Song Title</label>
          <input
            type="text"
            className="form-control form-control-lg rounded-3 white-placeholder"
            placeholder="Enter song title"
            value={title}
            onChange={handleTitleChange}
            style={{
              backgroundColor: "#1c1c1c",
              border: "1px solid #444",
              color: "#fff"
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold text-white">Label</label>
          <input
            className="form-control form-control-lg rounded-3 white-placeholder"
            placeholder="Enter song label"
            value={label}
            onChange={handleLabelChange}
            style={{
              backgroundColor: "#1c1c1c",
              border: "1px solid #444",
              color: "#fff"
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold text-white">Upload Image</label>
          <input
            type="file"
            className="form-control form-control-lg rounded-3"
            onChange={fileChange}
            style={{
              backgroundColor: "#1c1c1c",
              border: "1px solid #444",
              color: "#fff"
            }}
          />
        </div>

        <button
          className="btn btn-lg w-100 mt-3 fw-bold text-white"
          style={{
            background: "linear-gradient(45deg, #3498db, #2ecc71)",
            border: "none"
          }}
          onClick={doPost}
        >
          🚀 Add song
        </button>
      </div>
    </div>
  );
}

export default Songs;
