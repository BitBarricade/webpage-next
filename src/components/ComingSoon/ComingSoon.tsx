'use client';
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Style from "./ComingSoon.module.css";

type ComponentProps = {
    title: String;
};

const CommingSoon: React.FC<ComponentProps> = ({ title }) => {

    return (
        <>
            <div className={`container-xxl py-5 ${Style.heroHeader}`}>
                <div className="container my-5 py-5 px-lg-5">
                    <div className="row g-5 py-5">
                        <div className="col-12 text-center">
                            <h2 className={Style.TextLg}>Coming Soon</h2>
                            <hr className="bg-white mx-auto mt-0" style={{ width: "90px" }} />
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className={Style.TextSm} href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a className={Style.TextSm} href="#">Pages</a></li>
                                    <li className={`breadcrumb-item active ${Style.TextSm}`} aria-current="page">{title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
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
                                icon={faClock}
                                className={Style.Icon}
                                style={{ width: "2em", display: "inline" }}
                            />
                            <motion.h2
                                className={Style.Title}
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Coming Soon...!
                            </motion.h2>
                            <motion.h3
                                className={Style.TitleSm}
                                initial={{ opacity: 0, x: -80 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Page is not yet ready. Come back later
                            </motion.h3>
                            <motion.p
                                className="mb-4"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                            >
                                We&apos;re sorry, the page you have looked for is under construction!
                                Maybe go to our home page or try to use a search?
                            </motion.p>
                            <Link className={`btn rounded-pill py-3 px-5 ${Style.Button}`} href="/">
                                Go Back To Home
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommingSoon;
