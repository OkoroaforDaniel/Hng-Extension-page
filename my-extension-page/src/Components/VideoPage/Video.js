import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import video from "./Images/video (1).png";
import "./styles/Video.css";
import facebook from "./Images/g10.png";
import telegram from "./Images/Group.png";
import whatsapp from "./Images/Vector (1).png";
import axios from "axios";

const Video = () => {
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);

  const getVideoFile = async () => {
    try {
      const { data } = await axios.get(
        `https://hng-be-t5.onrender.com/videos/uploads/`
      );
      console.log(data);
      const RecentData = data[data.length - 1];
      console.log(RecentData);
      const videoUrl = RecentData.hostFileUrl;
      setMediaBlobUrl(videoUrl);
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  useEffect(() => {
    getVideoFile();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="videoDiv">
        <div className="link">
          <h1>Your video is ready!</h1>
          <p className="NameP">Name</p>
          <p className="LinkP">Untitled_Video_20232509 </p>
          <input
            className="emailInput"
            placeholder="enter email of receiver"
          ></input>
          <span>
            <button className="Send">Send</button>
          </span>
          <p className="VideoP">Video Url</p>
          <div className="copyP">
            <p>https://www.helpmeout/Untitled_Video_20232509</p>
            <span className="copy">Copy</span>
          </div>
          <p className="shareP">Share your video </p>
          <div className="FWT">
            <span>
              <img className="facebook" src={facebook} alt="facebook" />
              Facebook
            </span>
            <span>
              <img className="whatsapp" src={whatsapp} alt="facebook" />
              Whatsapp
            </span>
            <span>
              <img className="telegram" src={telegram} alt="facebook" />
              Telegram
            </span>
          </div>
        </div>
        <hr />
        <div className="MyVideo">
          {/* <img className="video" src={video} alt="video" /> */}
          <video
            className="video"
            src={mediaBlobUrl}
            controls={true}
            autoPlay={false}
            loop={false}
          >
            <source src={mediaBlobUrl} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="SaveDiv">
        <p className="SaveP">
          To ensure the availability and privacy of your video, <br /> we
          recommend saving it to your account.
        </p>
        <button className="saveButt">Save Video</button>
        <p className="subPDiv">
          Don’t have an account? <span className="acc">Create account</span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Video;
