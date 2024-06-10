import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Style from "./NotFound.module.css";

const NotFound: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5 text-center">
        <div className="row justify-content-center py-2">
          <div className="col-lg-6">
            <FontAwesomeIcon 
              icon={faExclamationTriangle} 
              className={Style.NotFoundIcon}
              style={{width: "2em", display: "inline"}}
           />
            <h1 className={Style.NotFoundTitle}>404</h1>
            <h1 className={Style.NotFoundTitleSm}>Page Not Found</h1>
            <p className="mb-4">
              We&apos;re sorry, the page you have looked for does not exist in
              our website! Maybe go to our home page or try to use a search?
            </p>
            <Link className={`btn rounded-pill py-3 px-5 ${Style.Button}`} href="/">
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
