import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BiShare } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";

import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-bg"></div>
      <div className="profile-card">
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/736/967/original/web-developer-job-line-concept-spot-illustration-editable-2d-flat-cartoon-character-on-white-for-web-design-man-working-on-laptop-creative-lineart-idea-for-website-mobile-blog-vector.jpg"
          alt="image"
        />
        <div className="profile-content">
          <h2>Dev Rohan</h2>
          <p>Frontend Developer & Youtuber</p>
        </div>
        <div className="profile-icon">
          <FaSquareFacebook />
          <FaSquareTwitter />
          <FaSquareInstagram />
          <FaYoutubeSquare />
        </div>
        <div className="profile-btn">
          <button>Subcribe</button>
          <button>Message</button>
        </div>
        <div className="follower">
          <div className="follower-btn">
            <FaRegHeart />
            <span>60.5k</span> <p></p>
          </div>
          <div className="follower-btn">
            <FaRegComment />
            <span>20k</span> <p></p>
          </div>
          <div className="follower-btn">
            <BiShare />

            <span>12.4k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
