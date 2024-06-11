'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./Footer.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <motion.div 
      className={`container-fluid text-light ${Styles.footer}`}
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5}}
    >
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          <motion.div 
            className={`col-md-6 col-lg-3 ${Styles.Color}`}
            initial={{ opacity: 0, y: 150, scale: 0.5}}
            whileInView={{opacity: 1, y: 0, scale: 1}}
            transition={{ duration: 0.5 }}
          >
            <p className={`h5 mb-4 ${Styles.SectionTitle}`}>Address<span></span></p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" style={{width: "1em", display: "inline"}}/>
              123 Street, New York, USA
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" style={{width: "1em", display: "inline"}}/>
              +012 345 67890
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" style={{width: "1em", display: "inline"}}/>
              info@example.com
            </p>
            <div className="d-flex pt-2">
              <a href="#" className={`btn btn-outline-light ${Styles.btnSocial}`}>
                <FontAwesomeIcon icon={faTwitter} style={{width: "1em", display: "inline"}}/>
              </a>
              <a href="#" className={`btn btn-outline-light ${Styles.btnSocial}`}>
                <FontAwesomeIcon icon={faFacebookF} style={{width: "1em", display: "inline"}}/>
              </a>
              <a href="#" className={`btn btn-outline-light ${Styles.btnSocial}`}>
                <FontAwesomeIcon icon={faInstagram} style={{width: "1em", display: "inline"}}/>
              </a>
              <a href="#" className={`btn btn-outline-light ${Styles.btnSocial}`}>
                <FontAwesomeIcon icon={faLinkedinIn} style={{width: "1em", display: "inline"}}/>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className={`col-md-6 col-lg-3 ${Styles.Color}`}
            initial={{ opacity: 0, y: 150, scale: 0.5}}
            whileInView={{opacity: 1, y: 0, scale: 1}}
            transition={{ duration: 0.7 }}
          >
            <p className={`h5 mb-4 ${Styles.SectionTitle}`}>Quick Link<span></span></p>
            <Link href="/about" className={`btn ${Styles.btnLink}`}>
              About Us
            </Link>
            <Link href="/contact" className={`btn ${Styles.btnLink}`}>
              Contact Us
            </Link>
            <Link href="/privacy" className={`btn ${Styles.btnLink}`}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={`btn ${Styles.btnLink}`}>
              Terms & Condition
            </Link>
            <Link href="/career" className={`btn ${Styles.btnLink}`}>
              Career
            </Link>
          </motion.div>
          <motion.div 
            className={`col-md-6 col-lg-3 ${Styles.Color}`}
            initial={{ opacity: 0, y: 150, scale: 0.5}}
            whileInView={{opacity: 1, y: 0, scale: 1}}
            transition={{ duration: 0.9 }}
          >
            <p className={`h5 mb-4 ${Styles.SectionTitle}`}>Gallery<span></span></p>
            <div className="grid grid-cols-3 gap-2">
              <Image
                className="w-full"
                src="/img/portfolio-1.jpg"
                alt="Gallery"
                width={100}
                height={100}
              />
              <Image
                className="w-full"
                src="/img/portfolio-2.jpg"
                alt="Gallery"
                width={100}
                height={100}
              />
              <Image
                className="w-full"
                src="/img/portfolio-3.jpg"
                alt="Gallery"
                width={100}
                height={100}
              />
              <Image
                className="w-full"
                src="/img/portfolio-4.jpg"
                alt="Gallery"
                width={100}
                height={100}
              />
              <Image
                className="w-full"
                src="/img/portfolio-5.jpg"
                alt="Gallery"
                width={100}
                height={100}
              />
              <Image
                className="w-full"
                src="/img/portfolio-6.jpg"
                alt="Gallery"
                width={100}
                height={100}
              />
            </div>
          </motion.div>
          <motion.div 
            className={`col-md-6 col-lg-3 ${Styles.Color}`}
            initial={{ opacity: 0, y: 150, scale: 0.5}}
            whileInView={{opacity: 1, y: 0, scale: 1}}
            transition={{ duration: 1.1 }}
          >
            <p className={`h5 mb-4 ${Styles.SectionTitle}`}>Newsletter<span></span></p>
            <p>
              Feeling Lost in the Digital Jungle? We&apos;re Your Guide!
              Subscribe to our newsletter and get the latest news in your inbox.
            </p>
            <div className="position-relative w-100 mt-3">
              <input
                className="form-control border-0 rounded-full w-full pl-4 pr-10"
                type="text"
                placeholder="Your Email"
                style={{ height: "48px" }}
              />
              <button
                type="button"
                className="btn shadow-none absolute top-0 right-0 mt-1 mr-2"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{height: "auto", width: "1.5em", display: "inline", color: "var(--primary-color)"}}
                />
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="container px-lg-5"
          initial={{ opacity: 0, y: 50, scale: 0.5}}
          whileInView={{opacity: 1, y: 0, scale: 1}}
          transition={{ duration: 1 }}
        >
          <div className={Styles.copyright}>
            <div className="row">
              <div className={`col-md-6 text-center text-md-start mb-3 mb-md-0 ${Styles.Color}`}>
                &copy; <Link href="/" className="border-bottom">BitBarricade</Link>, All Right Reserved.{" "}
                Designed By <a className="border-bottom" href="https://bitbarricade.in">
                  Bit Barricade
                </a>{" "}
                <br />
                Distributed By{" "}
                <a className="border-bottom" href="https://bitbarricade.in" target="_blank">
                  Bit Barricade Solutions
                </a>
              </div>
              <div className={`col-md-6 text-center text-md-end ${Styles.Color}`}>
                <div className={Styles.footerMenu}>
                  <Link href="/">
                    Home
                  </Link>
                  <Link href="/cookies">
                    Cookies
                  </Link>
                  <Link href="/help">
                    Help
                  </Link>
                  <Link href="/faq">
                    FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
