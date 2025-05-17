import React from 'react'
import axios from 'axios';
import { RiAlbumFill, RiSearchLine, RiPlayCircleLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram , FaTwitter} from "react-icons/fa";
import { LuCamera } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import {
  FaHandsHelping,
  FaApple,
  FaGooglePlay,
  FaAmazon,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";
import { useState, useEffect } from "react";
const images = [
  "/images/concert1.png", // Top-left
  "/images/concert2.png", // Middle top
  "/images/concert3.png", // Top-right
  "/images/concert4.png", // Middle-right top
  "/images/concert5.png", // Bottom-right top
  "/images/concert6.png", // Middle column middle
  "/images/concert7.png", // Bottom-left
  "/images/concert8.png", // Bottom middle
  "/images/concert9.png", // Bottom-right
]

function Home() {
    
     const [discography, setDiscography] = useState([ ]);
  const [songs, setSongs] = useState([]);

const fetchSongs = async () => {
  try {
    const res = await axios.get("https://music-backend-mmlv.onrender.com/api/getallsongs");
    setSongs(res.data.songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
  }
};


const deleteSong = async (id) => {
  if (!window.confirm("Are you sure you want to delete this song?")) return;
  try {
    await axios.delete(`https://music-backend-mmlv.onrender.com/api/deletesong/${id}`);
    alert("Song deleted successfully!");
    fetchSongs(); // Refresh the list
  } catch (error) {
    console.error("Error deleting song:", error);
    alert("Failed to delete song.");
  }
};
const fetchDiscography = async () => {
  try {
    const response = await axios.get("https://music-backend-mmlv.onrender.com/api/getalldiscography");
    setDiscography(response.data.discography);
  } catch (error) {
    console.error("Error fetching discography:", error);
  }
};

useEffect(() => {
  fetchSongs();
  fetchDiscography();
}, []);
    const [expanded, setExpanded] = useState(null);
  return (
    <><nav className="navbar navbar-expand-lg navbar-dark bg-black position-fixed w-100 z-3">
      <div className="container-fluid">
        <a className="navbar-brand me-4 d-flex align-items-center text-white" href="#home">
  <img 
    src="/images/logo.png" 
    alt="Preet Music Logo" 
    style={{ height: "40px", marginRight: "10px" }} 
  />
  PREET MUSIC
</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "white" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto align-items-center">
            <a className="nav-link active text-white" href="#home">
              HOME
            </a>
            <a className="nav-link text-white" href="#about">
              ABOUT
            </a>
             <a className="nav-link text-white" href="#album">
              ALBUM
            </a>
            <a className="nav-link text-white" href="#discography">
              DISCOGRAPHY
            </a>
            <a className="nav-link text-white" href="#gallery">
              GALLERY
            </a>
            <a className="nav-link text-white" href="#contact">
              CONTACT
            </a>
            
          </div>
        </div>
      </div>
    </nav>

      {/* No inline padding here */}
      <div id="home" className="section text-white m-0 p-0">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active position-relative"
              data-bs-interval="10000"
            >
              <img
                src="/images/preet.jpg"
                className=" img-fluid animated-image w-100 bg-dark"
                alt="Slide 1"
              />

              {/* Properly positioned text over image */}
              <div
                className="position-absolute text-center text-white"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  // backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  padding: "20px",
                  borderRadius: "10px",
                  width: "90%", // so text doesn't overflow on small screens
                }}
              >
                <h1 className="display-4 display-md-2 fw-bold">
                  Welcome to <br></br>PREET MUSIC
                </h1>
                <p className="lead fs-1 fs-md-2">
                  Music Band and Musician Bootstrap Template
                </p>
                <FaHandsHelping size={55} className="p-0" />
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="/images/prret.jpg "
                className="d-block animated-image w-100"
                alt="Slide 2"
              />
              <div
                className="position-absolute text-center text-white"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  // backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  padding: "20px",
                  borderRadius: "10px",
                  width: "90%", // so text doesn't overflow on small screens
                }}
              >
                <h1 className="display-4 display-md-2 fw-bold">PREET VIBES</h1>
                <p className="lead fs-1 fs-md-3">
                  <b>New Album Available Everywhere</b>
                </p>
                <RiPlayCircleLine size={50} />
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section id="about" className="about-section">
        <div className="container about-content ">
          <div className="row align-items-center ">
            {/* <!-- Profile Image --> */}
            <div className="col-md-5">
              <img
                src="/images/preet1.jpg"
                alt="Preet Photo"
                className="img-fluid rounded profile-img"
                style={{ width: "100%", maxWidth: "400px", height: "auto" }}
              />
            </div>

            {/* <!-- About Text --> */}
            <div className="col-md-7 text-white px-3">
              <h2>About Me</h2>
              <p>
                <strong>Preet</strong>, a passionate singer on{" "}
                <strong>StarMaker</strong>
                Loves creating music and connecting with listeners around the
                world. His voice blends emotion with energy, captivating
                audiences of all ages. Whether it’s a heartfelt ballad or a
                high-energy anthem, Preet delivers each performance with
                authenticity. Music isn’t just a hobby — it’s his language, his
                therapy, and his way to inspire others.
              </p>

              <p>
                <strong>Label:</strong> Limitless
              </p>
              <p>
                <strong>Genre:</strong> Pop / Rock / Techno
              </p>
              <p>
                <strong>Styles:</strong> Revival / Indie Rock
              </p>

              
            </div>
          </div>
        </div>
      </section>

      <div id="album" className="bg-dark">
        <section className="latest-album text-white text-center py-5">
          <h2 className="album-title border-bottom border-4 border-danger">LATEST ALBUM</h2>

          <div className="album-details mt-4">
            <p>
              <span className="label-key">LABEL</span>{" "}
              <span className="label-value">PREET VIBES</span>
            </p>

            <p>
              <span className="label-key">GENRE</span>{" "}
              <span className="label-value">Pop/Rap/Classical</span>
            </p>
            <p>
              <span className="label-key">STYLES</span>{" "}
              <span className="label-value">Instrumental/Acoustic</span>
            </p>
          </div>

          <div className="album-icons mt-4 d-flex justify-content-center gap-3">
            <FaApple className="icon-btn" size={40} />
            <FaGooglePlay className="icon-btn" size={40} />
            <FaAmazon className="icon-btn" size={40} />
            <FaSoundcloud className="icon-btn" size={40} />
            <FaSpotify className="icon-btn" size={40} />
            <FaYoutube className="icon-btn" size={40} />
          </div>
        </section>
      </div>
      <div
        className="album-section min-vh-100 bg-dark text-white py-5 "
        style={{ paddingLeft: "130px", paddingRight: "130px" }}
      >
        <div className="bg-dark container px-0">
          {/* Responsive Header Image */}
          <div className="text-center border border-secondary ">
            <img
              src="/images/img_5.jpg"
              alt="Header"
              className="img-fluid w-100"
              style={{ maxHeight: "1000px", objectFit: "cover" }}
            />
          </div>

          {/* Song List Section */}
          {songs.map((song, index) => (
            <div
              key={index}
              className="border border-secondary p-3 text-light"
              style={{
                background:
                  " linear-gradient(to bottom right, #1b1f3a, #2a2f45)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                // borderRadius: '12px',
              }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 flex-wrap text-center text-md-start">
                <div>
                  <button
                    className="btn btn-link text-uppercase fw-bold text-white p-0"
                    onClick={() =>
                      setExpanded(expanded === index ? null : index)
                    }
                  >
                    {song.songTitle}
                  </button>
                  <p className="m-0">{song.songlabel}</p>
                </div>
                <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2">
                  {song.hasLyrics && (
                    <button className="btn btn-outline-danger btn-sm">
                      🎵 Lyrics
                    </button>
                  )}
                   <button
          onClick={() => deleteSong(song._id)}
          className="btn btn-danger"
        >
          <MdDelete size={20} />
        </button>
                  <a href={song.songTrack} download>
                    <button className="btn btn-outline-light btn-sm">
                      ⬇️ Download
                    </button>
                  </a>
                </div>
              </div>

              {expanded === index && (
                <div className="text-light mt-2">
                  <p>
                    This is a preview of the lyrics or description for "
                    {song.title}".
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div id="discography" className="bg-dark text-white py-5 px-4">
  <div className="container">
   <h1 className="text-center text-white fs-2 fs-md-1 mb-5">
  <span className="border-bottom border-4 border-danger pb-1">DISCOGRAPHY</span>
</h1>


    <div className="row justify-content-center">
      {discography.map((album, index) => (
  <div key={index} className="col-lg-3 col-md-6 mb-4 d-flex">
    <div className="card bg-dark text-white w-100 border">
      <div className="border m-2" style={{ height: "300px", overflow: "hidden" }}>
        <img
          src={album.songimage}
          alt={album.songTitle}
          className="img-fluid"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>
      <div className="card-body text-center">
        <h2 className="card-title fs-5 fw-semibold">{album.songTitle}</h2>
      </div>
    </div>
  </div>
))}

    </div>
  </div>
</div>


      {/* <div id="band" className="section bg-light">
        <h1>Band</h1>
        <p>Meet the band members.</p>
      </div>

      <div id="tours" className="section text-white bg-dark">
        <h1>Tours</h1>
        <p>Tour dates and locations.</p>
      </div> */}

         <div id="gallery" className="gallery-section bg-light">
          <h1 className="text-center text-gray"><LuCamera size={70}/></h1>
  <div className="container bg-dark py-4">
    <div className="row g-2">
      
      {/* Left Column */}
      <div className="col-12 col-md-4 d-flex flex-column gap-2">
        <div className="gallery-img-wrapper animate-fade">
          <img src={images[0]} alt="img1" className="img-fluid gallery-img" />
        </div>
        <div className="gallery-img-wrapper animate-fade">
          <img src={images[3]} alt="img4" className="img-fluid gallery-img" />
        </div>
        <div className="gallery-img-wrapper animate-fade">
          <img src={images[6]} alt="img7" className="img-fluid gallery-img" />
        </div>
      </div>

      {/* Middle Column */}
      <div className="col-12 col-md-4 d-flex flex-column gap-2">
        <div className="gallery-img-wrapper animate-fade">
          <img src={images[1]} alt="img2" className="img-fluid gallery-img" />
        </div>
        <div className="gallery-img-wrapper animate-fade">
          <img src={images[5]} alt="img6" className="img-fluid gallery-img" />
        </div>
        <div className="gallery-img-wrapper animate-fade">
          <img src={images[7]} alt="img8" className="img-fluid gallery-img" />
        </div>
      </div>

      {/* Right Column */}
      <div className="col-12 col-md-4 d-flex flex-column gap-2">
        <div className="gallery-img-wrapper animate-fade">
          <img src={images[2]} alt="img3" className="img-fluid gallery-img" />
        </div>
        <div className="gallery-img-wrapper animate-fade">
          <img src={images[4]} alt="img5" className="img-fluid gallery-img" />
        </div>
        <div className="gallery-img-wrapper animate-fade">
          <img src={images[8]} alt="img9" className="img-fluid gallery-img" />
        </div>
      </div>

    </div>
  </div>
</div>

      <div id="contact" className="bg-dark text-white  py-5">
      <h1 className="mb-5 text-center">
  <span className="d-inline-block border-bottom border-5 border-danger">
    Stay in touch
  </span>
</h1>

  <div className="container">
    
    <div className="row justify-content-center">
  <div className="col-md-6 col-lg-4 mb-4 text-center">
    <h2>Booking</h2>
    <h4>Preet Music </h4>
    <h5>T + (123) 456-7890</h5>
    <p>booking@preetmusic.com</p>
  </div>
  <div className="col-md-6 col-lg-4 mb-4 text-center">
    <h2>Media / Press</h2>
    <h4>Preet Public Relations</h4>
    <h5>T + (123) 456-7891</h5>
    <p>press@preetmusic.com</p>
  </div>
  <div className="col-md-6 col-lg-4 mb-4 text-center">
    <h2>General Info</h2>
    <h4>Preet Music Support</h4>
    <h5>T + (123) 456-7892</h5>
    <p>info@preetmusic.com</p>
  </div>
</div>

<div className="container text-secondary py-4 social-icons-container"> 
  <div className="row justify-content-center text-center">
    {/* Icon groups container */}
    <div className="col-12 px-3">
      <div className="row text-white justify-content-center">
        
        {/* First group of icons */}
        <div className="col-12 col-md-6 mb-4 d-flex justify-content-around flex-wrap gap-3">
          <FaFacebookF className="social-icon" size={60} />
          <FaInstagram className="social-icon" size={60} />
          <FaTwitter className="social-icon" size={60} />
        </div>

        {/* Second group of icons */}
        <div className="col-12 col-md-6 mb-4 d-flex justify-content-around flex-wrap gap-3">
          <FaYoutube className="social-icon" size={60} />
          <FaApple className="social-icon" size={60} />
          <FaAmazon className="social-icon" size={60} />
        </div>

      </div>
    </div>
  </div>
</div>


  </div>
</div></>
  )
}

export default Home