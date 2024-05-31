import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <div className="bg-primary text-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-white text-lg font-semibold mb-4">Address</p>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              123 Street, New York, USA
            </p>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              +012 345 67890
            </p>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              info@example.com
            </p>
            <div className="flex mt-4 space-x-2">
              <a href="#" className="btn btn-outline-light btn-social">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="btn btn-outline-light btn-social">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="btn btn-outline-light btn-social">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="btn btn-outline-light btn-social">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <div>
            <p className="text-white text-lg font-semibold mb-4">Quick Link</p>
            <Link href="/about" className="text-white block mb-2">
              About Us
            </Link>
            <Link href="/contact" className="text-white block mb-2">
              Contact Us
            </Link>
            <Link href="/privacy" className="text-white block mb-2">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white block mb-2">
              Terms & Condition
            </Link>
            <Link href="/career" className="text-white block mb-2">
              Career
            </Link>
          </div>
          <div>
            <p className="text-white text-lg font-semibold mb-4">Gallery</p>
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
          </div>
          <div>
            <p className="text-white text-lg font-semibold mb-4">Newsletter</p>
            <p>
              Feeling Lost in the Digital Jungle? We&apos;re Your Guide!
              Subscribe to our newsletter and get the latest news in your inbox.
            </p>
            <div className="relative mt-3">
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
                  className="text-primary fs-4"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              &copy; <Link href="/">BitBarricade</Link>, All Right Reserved.{" "}
              <br />
              Designed By <a href="https://bitbarricade.in">
                Bit Barricade
              </a>{" "}
              <br />
              Distributed By{" "}
              <a href="https://bitbarricade.in" target="_blank">
                Bit Barricade Solutions
              </a>
            </div>
            <div className="text-center md:text-right">
              <Link href="/" className="text-white block mb-2">
                Home
              </Link>
              <Link href="/cookies" className="text-white block mb-2">
                Cookies
              </Link>
              <Link href="/help" className="text-white block mb-2">
                Help
              </Link>
              <Link href="/faq" className="text-white block mb-2">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
