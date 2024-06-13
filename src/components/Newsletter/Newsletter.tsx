'use client';
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import Styles from "./Newsletter.module.css";

const Newsletter: React.FC = () => {
  return (
    <motion.div 
      className={`container-xxl py-5 ${Styles.newsLetter}`}
      initial={{opacity: 0, y: 80}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
    >
      <div className="container py-5 px-lg-5">
        <div className="row justify-content-center">
          <motion.div 
            className="col-lg-7 col-xl-6 col-xxl-4 text-center"
            initial={{opacity: 0, scale: 0.50}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.7}}
          >

            <p className={`justify-content-center ${Styles.SectionTitle}`}>
              <span></span>Newsletter<span></span>
            </p>
            <h1 className={`text-center mb-4 ${Styles.Title}`}>
              Stay Always In Touch
            </h1>
            <p className={`mb-4 ${Styles.Color}`}>
              Feeling Lost in the Digital Jungle? We&apos;re Your Guide! Subscribe
              to our newsletter and get the latest news in your inbox.
            </p>
            <div className="position-relative w-100 mt-3">
              <input
                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                type="text"
                placeholder="Enter Your Email"
                style={{height: "48px"}}
              />
              <button
                type="button"
                className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{height: "auto", width: "1.5em", display: "inline", color: "var(--primary-color)"}}
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
