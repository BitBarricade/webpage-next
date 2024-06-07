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
              className="mb-3"
              style={{ width: "4em", display: "inline" }}
            />
            <h1 className={`mb-2 ${Styles.TextColor}`}>2</h1>
            <p className={`mb-0 ${Styles.TextColor}`}>Years Experience</p>
          </div>
          <div className={`col-md-6 col-lg-3 text-center ${Styles.Animate}`} style={{ visibility: "visible", animationDelay: "0.3s" }}>
            <FontAwesomeIcon
              icon={faUsersCog}
              className="mb-3"
              style={{ width: "4em", display: "inline" }}
            />
            <h1 className={`mb-2 ${Styles.TextColor}`}>4</h1>
            <p className={`mb-0 ${Styles.TextColor}`}>Team Members</p>
          </div>
          <div className={`col-md-6 col-lg-3 text-center ${Styles.Animate}`} style={{ visibility: "visible", animationDelay: "0.5s" }}>
            <FontAwesomeIcon
              icon={faUsers}
              className="mb-3"
              style={{ width: "4em", display: "inline" }}
            />
            <h1 className={`mb-2 ${Styles.TextColor}`}>12</h1>
            <p className={`mb-0 ${Styles.TextColor}`}>Satisfied Clients</p>
          </div>
          <div className={`col-md-6 col-lg-3 text-center ${Styles.Animate}`} style={{ visibility: "visible", animationDelay: "0.7s" }}>
            <FontAwesomeIcon
              icon={faCheck}
              className="mb-2"
              style={{ width: "4em", display: "inline" }}
            />
            <h1 className={`mb-2 ${Styles.TextColor}`}>12</h1>
            <p className={`mb-0 ${Styles.TextColor}`}>Completed Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
