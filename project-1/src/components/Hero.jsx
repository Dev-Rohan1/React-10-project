import { AiFillMessage } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { IoMdSend } from "react-icons/io";

import styles from "../styles/Hero.module.css";

import image from "../assets/Service.svg";

const Hero = () => {
  return (
    <section>
      <div className={styles.heroContent}>
        <h1>Contact Us</h1>
        <p>
          Let’s Connect: We’re Here To Help, And We’d Love To Hear From You!
          Whether You Have A Question or comment, Or Just Want To Chat, You Can
          Reach Out To Us Through The Contact Form Page, By Phone, Email, Or
          Social Media.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.col}>
          <div className={styles.heroBtn}>
            <button>
              <AiFillMessage />
              VIA SUPPORT CHAT
            </button>
            <button>
              <IoMdCall />
              VIA SUPPORT CHAT
            </button>
          </div>
          <button className={styles.outlineBtn}>
            <AiFillMessage />
            VIA EMAIL FORM
          </button>
          <form>
            <input type="text" placeholder="Name" />

            <input type="email" placeholder="Email" />

            <textarea placeholder="Message"></textarea>
            <button style={{ marginTop: "20px" }}>
              <IoMdSend />
              Submit
            </button>
          </form>
        </div>
        <div className={styles.col}>
          <img src={image} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
