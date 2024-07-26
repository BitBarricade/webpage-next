"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Styles from './NavBar.module.css';

const Navbar: React.FC = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 45) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg px-4 px-lg-5 py-3 py-lg-0 ${isSticky ? Styles.stickyTop + " shadow-sm": ""} ${Styles.navbarLight} ${Styles.navbar}`}>
            <Link href="/" className={`navbar-brand p-0 ${Styles.navbarBrand}`}>
                <h1 className="m-0">BitB</h1>
                {/* <Image 
                    src="/img/logo/icon.nobg.png" 
                    className="img-fluid flex-shrink-0"
                    alt="Logo"
                    width={50}
                    height={50}
                />  */}
            </Link>
            <button className={`navbar-toggler ${Styles.Toggler} ${!isNavOpen ? "collapsed" : ""}`} type="button" onClick={() => setNavOpen(!isNavOpen)}>
                <span className="fa fa-bars">
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </span>
            </button>
            <div className={`navbar-collapse ${isNavOpen ? "show" : "collapse"} ${Styles.navbarCollapse}`}>
                <div className={`navbar-nav mx-auto py-0 ${Styles.navbarNav}`}>
                    <Link 
                        href="/" 
                        className={`nav-item nav-link ${Styles.navItem} ${Styles.navLink}`}
                        onClick={() => setNavOpen(false)}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/about" 
                        className={`nav-item nav-link ${Styles.navItem} ${Styles.navLink}`}
                        onClick={() => setNavOpen(false)}
                    >
                        About
                    </Link>
                    <Link 
                        href="/service" 
                        className={`nav-item nav-link ${Styles.navItem} ${Styles.navLink}`}
                        onClick={() => setNavOpen(false)}
                    >
                        Service
                    </Link>
                    <Link 
                        href="/project" 
                        className={`nav-item nav-link ${Styles.navItem} ${Styles.navLink}`}
                        onClick={() => setNavOpen(false)}
                    >
                        Project
                    </Link>
                    <div className={`nav-item dropdown ${Styles.navItem}`}>
                        <Link 
                            href="#" 
                            className={`nav-link dropdown-toggle ${Styles.navLink} ${Styles.dropdownToggle} ${isSubMenuOpen ? "show" : ""}`} 
                            onClick={() => setSubMenuOpen(!isSubMenuOpen)}
                        >
                            Pages
                        </Link>
                        <div className={`dropdown-menu m-0 ${Styles.dropdownMenu} ${isSubMenuOpen ? "show" : ""}`}>
                            <Link 
                                href="/team" 
                                className="dropdown-item"
                                onClick={() => setNavOpen(false)}
                            >
                                Our Team
                            </Link>
                            <Link 
                                href="/testimonial" 
                                className="dropdown-item"
                                onClick={() => setNavOpen(false)}
                            >
                                Testimonial
                            </Link>
                        </div>
                    </div>
                    <Link 
                        href="/contact" 
                        className={`nav-item nav-link ${Styles.navItem} ${Styles.navLink}`}
                        onClick={() => setNavOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link 
                        href="/login" 
                        className={`nav-item nav-link d-block d-lg-none ${Styles.navItem} ${Styles.navLink}`}
                        onClick={() => setNavOpen(false)}
                    >
                        Login
                    </Link>
                </div>
                <Link 
                    href="/login" 
                    className={Styles.getStarted}
                    onClick={() => setNavOpen(false)}
                >
                    Get Started
                </Link>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
