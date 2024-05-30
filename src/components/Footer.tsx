import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div
      className="container-fluid bg-primary text-light footer wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">
              <span></span>
            </p>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>
            </p>
            <p>
              <i className="fa fa-phone-alt me-3">+012 345 67890</i>
            </p>
            <p>
              <i className="fa fa-envelope me-3">BitBarricade@gmail.com</i>
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">
              Quick Link<span></span>
            </p>
            <Link href="/about" className="btn btn-link">
              About Us
            </Link>
            <Link href="/contact" className="btn btn-link">
              Contact Us
            </Link>
            <Link href="/privacy-policy" className="btn btn-link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="btn btn-link">
              Terms & Condition
            </Link>
            <Link href="/career" className="btn btn-link">
              Career
            </Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="section-title text-white h5 mb-4">
              Newsletter<span></span>
            </p>
            <p>
              Feeling Lost in the Digital Jungle? We&apos;re Your Guide!
              Subscribe to our newsletter and get the latest news in your inbox.
            </p>
            <div className="position-relative w-100 mt-3">
              <input
                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                type="text"
                placeholder="Your Email"
                style={{ height: "48px" }}
              />
              <button
                type="button"
                className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
              >
                <i className="fa fa-paper-plane text-primary fs-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <Link href="#" className="border-bottom">
                BitBarricade
              </Link>
              , All Right Reserved. Designed By{" "}
              <Link href="https://bitbarricade.in" className="border-bottom">
                Bit Barricade
              </Link>
              <br />
              <br />
              Distributed By{" "}
              <Link
                href="https://bitbarricade.in"
                target="_blank"
                className="border-bottom"
              >
                Bit Barricade Solutions
              </Link>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link href="/">Home</Link>
                <Link href="/cookies">Cookies</Link>
                <Link href="/help">Help</Link>
                <Link href="/faqs">FQAs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
