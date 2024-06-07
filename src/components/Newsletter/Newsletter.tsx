import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import Styles from "./Newsletter.module.css";

const Newsletter: React.FC = () => {
  return (
    <div className={`container-xxl py-5 ${Styles.newsLetter}`}>
      <div className="container py-5 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">

            <p className={`justify-content-center ${Styles.SectionTitle}`}>
              <span></span>Newsletter<span></span>
            </p>
            <h1 className={`text-center mb-4 ${Styles.Color}`}>
              Stay Always In Touch
            </h1>
            <p className={`mb-4 ${Styles.Color}`}>
              Feeling Lost in the Digital Jungle? We&apos;re Your Guide! Subscribe
              to our newsletter and get the latest news in your inbox.
            </p>
            <div className="position-relative w-100 mt-3">
              <input
                className="form-control border-0 rounded-full w-full pl-4 pr-10 h-12"
                type="text"
                placeholder="Enter Your Email"
              />
              <button
                type="button"
                className="btn shadow-none absolute top-0 right-0 mt-1 mr-2"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-primary text-2xl"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
