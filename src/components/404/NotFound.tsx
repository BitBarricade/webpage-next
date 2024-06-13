'use client'; 
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Style from "./NotFound.module.css";

const NotFound: React.FC = () => {

  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5 text-center">
        <div className="row justify-content-center py-2">
          <motion.div 
            className="col-lg-6 py-xxl-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FontAwesomeIcon 
              icon={faExclamationTriangle} 
              className={Style.NotFoundIcon}
              style={{width: "2em", display: "inline"}}
           />
            <motion.h1 
              className={Style.NotFoundTitle}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              404
            </motion.h1>
            <motion.h1 
              className={Style.NotFoundTitleSm}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Page Not Found
            </motion.h1>
            <motion.p 
              className="mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              We&apos;re sorry, the page you have looked for does not exist in
              our website! Maybe go to our home page or try to use a search?
            </motion.p>
            <Link className={`btn rounded-pill py-3 px-5 ${Style.Button}`} href="/">
              Go Back To Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
