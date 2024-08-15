import { AiFillMessage } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";

import styles from "../styles/Hero.module.css";
import Button from "./Button";

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
        <div className={styles.heroBtn}>
          <Button icon={<AiFillMessage />} text="VIA SUPPORT CHAT" />
          <Button icon={<IoMdCall />} text="VIA CALL" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
