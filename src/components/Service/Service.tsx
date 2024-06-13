'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faSearch,
  faLaptopCode,
  faMailBulk,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { faAndroid, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Styles from "./Service.module.css";

const services = [
  {
    icon: faSearch,
    title: "SEO Optimization",
    description: "Dominate search results with our powerful SEO solutions.",
    link: "#",
  },
  {
    icon: faLaptopCode,
    title: "Web Design",
    description:
      "Create an unforgettable online experience with our expert web design team.",
    link: "#",
  },
  {
    icon: faFacebookF,
    title: "Social Media Marketing",
    description:
      "Amplify your brand voice and reach new heights on social media.",
    link: "#",
  },
  {
    icon: faMailBulk,
    title: "Email Marketing",
    description:
      "Turn leads into loyal customers with targeted email marketing campaigns.",
    link: "#",
  },
  {
    icon: faThumbsUp,
    title: "PPC Advertising",
    description: "Reach your ideal audience and only pay for results with PPC.",
    link: "#",
  },
  {
    icon: faAndroid,
    title: "App Development",
    description: "We build custom apps that solve your business challenges.",
    link: "#",
  },
];

const Service: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5 w-xxl-75">
        <motion.div 
          className="text-center"
          initial={{opacity: 0, y: 150}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        >
          <p className={`justify-content-center ${Styles.SectionTitle}`}>
            <span></span>Our Services<span></span>
          </p>
          <h1 className={`text-center mb-5 ${Styles.Header}`}>
            What Solutions We Provide
          </h1>
        </motion.div>
        <div className="row g-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6"
              initial={{opacity: 0, y: 150}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: index/10+0.1}}
            >
              <div className={`d-flex flex-column text-center rounded ${Styles.serviceItem}`}>
                <div className={`flex-shrink-0 ${Styles.serviceIcon}`}>
                  <FontAwesomeIcon
                    icon={service.icon}
                    className={`mb4 ${Styles.IconColor}`}
                    style={{height: "auto", width: "2em", display: "inline"}}
                  />
                </div>
                <h5 className={`mb-3 ${Styles.Title}`}>{service.title}</h5>
                <p className="m-0">{service.description}</p>
                <Link href={service.link} className={`btn btn-square ${Styles.KnowMore}`}>
                  <FontAwesomeIcon icon={faArrowRight} style={{height: "auto", width: "1em", display: "inline"}}/>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
