import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faUsersCog,
  faUsers,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./Facts.module.css";

const Facts: React.FC = () => {
  return (
    <div className={`container-xxl bg-primary py-5 ${Styles.fact}`} style={{ visibility: "visible", animationDelay: "0.1s" }}>
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          <div className={`col-md-6 col-lg-3 text-center ${Styles.Animate}`} style={{ visibility: "visible", animationDelay: "0.1s" }}>
            <FontAwesomeIcon
              icon={faCertificate}
              className="text-secondary mb-3"
              style={{ width: "4em", display: "inline" }}
            />
            <h1 className="text-white mb-2">2</h1>
            <p className="text-white mb-0">Years Experience</p>
          </div>
          <div className={`col-md-6 col-lg-3 text-center ${Styles.Animate}`} style={{ visibility: "visible", animationDelay: "0.3s" }}>
            <FontAwesomeIcon
              icon={faUsersCog}
              className="text-secondary mb-3"
              style={{ width: "4em", display: "inline" }}
            />
            <h1 className="text-white mb-2">4</h1>
            <p className="text-white mb-0">Team Members</p>
          </div>
          <div className={`col-md-6 col-lg-3 text-center ${Styles.Animate}`} style={{ visibility: "visible", animationDelay: "0.5s" }}>
            <FontAwesomeIcon
              icon={faUsers}
              className="text-secondary mb-3"
              style={{ width: "4em", display: "inline" }}
            />
            <h1 className="text-white mb-2">12</h1>
            <p className="text-white mb-0">Satisfied Clients</p>
          </div>
          <div className={`col-md-6 col-lg-3 text-center ${Styles.Animate}`} style={{ visibility: "visible", animationDelay: "0.7s" }}>
            <FontAwesomeIcon
              icon={faCheck}
              className="text-secondary mb-3"
              style={{ width: "4em", display: "inline" }}
            />
            <h1 className="text-white mb-2">12</h1>
            <p className="text-white mb-0">Completed Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
