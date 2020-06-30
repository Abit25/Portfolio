import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <p className="text">
        Made with
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: "red", marginLeft: "4px", marginRight: "5px" }}
        />
        by Abheet
      </p>

      <p className={"contact"}>
        If you like my work and want to contact me, please use any of the above
        mentioned Social Media profiles.
      </p>
    </div>
  );
}

export default Footer;
