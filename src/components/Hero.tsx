import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="container-xxl bg-primary hero-header">
      <div className="container px-lg-5">
        <div className="row g-5 align-items-end">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="text-white mb-4 animated slideInDown">
              A digital agency comprised of intelligent and creative individuals
            </h1>
            <p className="text-white pb-3 animated slideInDown">
              They may not wear capes, but they definitely know how to save the
              day with killer digital strategies 🦸‍♂️🦸‍♀️
            </p>
            <Link
              href="/login"
              className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
            >
              Read More
            </Link>
            <Link
              href="/contact"
              className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
            >
              Contact Us
            </Link>
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <Image
              className="img-fluid animated zoomIn"
              src="/img/hero.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
