'use client';
import React, { useEffect, useState } from 'react'
import Styles from "./BackToTop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const BackToTop = () => {

    const [isShown, setShown] = useState(false);

    const toggleShown = () => {
        if(window.scrollY > 100) {
            setShown(true);
        } else setShown(false);
    };

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleShown);
        return () => {
            window.removeEventListener('scroll', toggleShown);
        }
    }, []);

    return (
        <a 
            href="#" 
            className={`${Styles.BackToTop} ${isShown ? Styles.show : Styles.hide}`}
            onClick={ScrollToTop}
        >
            <FontAwesomeIcon icon={faArrowUp} style={{ height: "auto", width: "1em", display: "inline" }} />
        </a>
    )
};
export default BackToTop;