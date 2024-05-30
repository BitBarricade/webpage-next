import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <Link href="/" className="navbar-brand p-0">
        <h1 className="m-0">DGital</h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
          <Link href="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link href="/about" className="nav-item nav-link">
            About
          </Link>
          <Link href="/service" className="nav-item nav-link">
            Service
          </Link>
          <Link href="/project" className="nav-item nav-link">
            Project
          </Link>
          <div className="nav-item dropdown">
            <Link
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </Link>
            <div className="dropdown-menu m-0">
              <Link href="/team" className="dropdown-item">
                Our Team
              </Link>
              <Link href="/testimonial" className="dropdown-item">
                Testimonial
              </Link>
              <Link href="/404" className="dropdown-item">
                404 Page
              </Link>
            </div>
          </div>
          <Link href="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <Link
          href="/login"
          className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
