import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faLaptopCode,
  faMailBulk,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faAndroid, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const services = [
  {
    icon: faSearch,
    title: "SEO Optimization",
    description: "Dominate search results with our powerful SEO solutions.",
    link: "#",
  },
  {
    icon: faLaptopCode,
    title: "Web Design",
    description:
      "Create an unforgettable online experience with our expert web design team.",
    link: "#",
  },
  {
    icon: faFacebookF,
    title: "Social Media Marketing",
    description:
      "Amplify your brand voice and reach new heights on social media.",
    link: "#",
  },
  {
    icon: faMailBulk,
    title: "Email Marketing",
    description:
      "Turn leads into loyal customers with targeted email marketing campaigns.",
    link: "#",
  },
  {
    icon: faThumbsUp,
    title: "PPC Advertising",
    description: "Reach your ideal audience and only pay for results with PPC.",
    link: "#",
  },
  {
    icon: faAndroid,
    title: "App Development",
    description: "We build custom apps that solve your business challenges.",
    link: "#",
  },
];

const Service: React.FC = () => {
  return (
    <div className="container-xxl py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-title text-secondary text-2xl mb-4">
            <span></span>Our Services<span></span>
          </p>
          <h1 className="text-4xl font-extrabold mb-4">
            What Solutions We Provide
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item bg-white rounded-lg shadow-lg p-6 text-center transform transition hover:scale-105"
            >
              <div className="service-icon mb-4">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-primary text-4xl"
                />
              </div>
              <h5 className="text-2xl font-semibold mb-3">{service.title}</h5>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link} className="btn btn-primary">
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
