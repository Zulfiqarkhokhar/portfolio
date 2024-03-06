import React from "react";
import {
  FiTInstagram,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/zulfiqarkhokhar00/"
        className="home__social-icon"
        target="_blank"
      >
        <FiInstagram />
      </a>
      <a
        href="https://github.com/Zulfiqarkhokhar"
        className="home__social-icon"
        target="_blank"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/zulfiqar-ali-khokhar-93114925b/"
        className="home__social-icon"
        target="_blank"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
