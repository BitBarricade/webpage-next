import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Newsletter: React.FC = () => {
  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-title text-white text-2xl mb-4">
          <span></span>Newsletter<span></span>
        </p>
        <h1 className="text-white text-4xl font-extrabold mb-4">
          Stay Always In Touch
        </h1>
        <p className="text-white text-lg mb-8">
          Feeling Lost in the Digital Jungle? We&apos;re Your Guide! Subscribe
          to our newsletter and get the latest news in your inbox.
        </p>
        <div className="relative max-w-md mx-auto">
          <input
            className="form-control border-0 rounded-full w-full pl-4 pr-10 h-12"
            type="text"
            placeholder="Enter Your Email"
          />
          <button
            type="button"
            className="btn shadow-none absolute top-0 right-0 mt-1 mr-2"
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-primary text-2xl"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
