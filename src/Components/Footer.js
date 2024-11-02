import React from "react";
import { FaLinkedin } from "react-icons/fa6";

import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <footer >
        <div className="footer_text">
          <p className="text-black">&copy; 2024 Dinesh Tummalapalli, Inc</p>
          <ul className="social-icons">
            <strong> Contact Me :</strong>
            <li>
              <a href="https://www.linkedin.com/in/tummalapalli-dinesh/" target="_blank">
                <FaLinkedin size={30} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Dinesh0727" target="_blank">
                <FaGithub color="black" size={30} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/dinesh-tummalapalli">
                <FaInstagram className="insta" size={30} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
