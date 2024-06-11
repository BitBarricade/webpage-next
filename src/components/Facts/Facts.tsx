'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faUsersCog,
  faUsers,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Styles from "./Facts.module.css";

const Facts: React.FC = () => {
  return (
    <motion.div 
      className={`container-xxl bg-primary py-5 ${Styles.fact}`} 
      initial={{ opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.5 }}
    >
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          <motion.div 
            className={`col-md-6 col-lg-3 text-center ${Styles.Animate}`} 
            initial={{ opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 0.8 }}
          >
            <FontAwesomeIcon
              icon={faCertificate}
              className={Styles.FontAwesomeIcon}
              style={{height: "auto", width: "4em", display: "inline"}}
            />
            <h1 className={`mb-2 ${Styles.TextColor}`}>2</h1>
            <p className={`mb-0 ${Styles.TextColor}`}>Years Experience</p>
          </motion.div>
          <motion.div 
            className={`col-md-6 col-lg-3 text-center ${Styles.Animate}`} 
            initial={{ opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 0.8 }}
          >
            <FontAwesomeIcon
              icon={faUsersCog}
              className={Styles.FontAwesomeIcon}
              style={{height: "auto", width: "4em", display: "inline"}}
            />
            <h1 className={`mb-2 ${Styles.TextColor}`}>4</h1>
            <p className={`mb-0 ${Styles.TextColor}`}>Team Members</p>
          </motion.div>
          <motion.div 
            className={`col-md-6 col-lg-3 text-center ${Styles.Animate}`} 
            initial={{ opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 0.8 }}
          >
            <FontAwesomeIcon
              icon={faUsers}
              className={Styles.FontAwesomeIcon}
              style={{height: "auto", width: "4em", display: "inline"}}
            />
            <h1 className={`mb-2 ${Styles.TextColor}`}>12</h1>
            <p className={`mb-0 ${Styles.TextColor}`}>Satisfied Clients</p>
          </motion.div>
          <motion.div 
            className={`col-md-6 col-lg-3 text-center ${Styles.Animate}`} 
            initial={{ opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{ duration: 0.8 }}
          >
            <FontAwesomeIcon
              icon={faCheck}
              className={Styles.FontAwesomeIcon}
              style={{height: "auto", width: "4em", display: "inline", marginBottom: "-.4em", marginTop: "-0.5em"}}
            />
            <h1 className={`mb-2 ${Styles.TextColor}`}>12</h1>
            <p className={`mb-0 ${Styles.TextColor}`}>Completed Projects</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Facts;
