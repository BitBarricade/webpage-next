import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={`container-xxl bg-primary hero-header ${Styles.heroHeader}`}>
      <div className="container px-lg-5">
        <div className="row g-5 align-items-end">
          <div className="col-lg-6 text-center text-lg-start"> 
            <h1 className={`text-white mb-4 ${Styles.TextLg}`}>A digital agency comprised of intelligent and creative individuals...</h1>
            <p className={`text-white pb-3 ${Styles.TextSm}`}>Imagine transforming your business with tailor-made software solutions, delivered perfectly within the shortest timeframes..</p>
            <Link href="/login" className={`btn btn-secondary py-sm-2 px-sm-3 rounded-pill me-3 ${Styles.ReadMore}`}>Read More</Link>
            <Link href="/contact" className={`btn btn-light py-sm-2 px-sm-3 rounded-pill ${Styles.ContactUs}`}>Contact Us</Link>
          </div>
          <div className="col-lg-6 text-center text-lg-start text-xl-center">
            <Image className={`img-fluid ${Styles.Image}`} src="/img/hero.png" alt="hero illustration" width={500} height={500}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
