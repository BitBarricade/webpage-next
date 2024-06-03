import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faSearch,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./Feature.module.css";

const features = [
  {
    icon: faMailBulk,
    title: "Digital Marketing",
    description:
      "When companies use computers and the internet to tell people about their products and try to get them to buy them. They use things like websites, social media, and emails to show people what they have to offer.",
  },
  {
    icon: faSearch,
    title: "SEO & Backlinks",
    description:
      "Search Engine Optimization, which is like a magic trick that helps websites show up higher in Google search results. Backlinks are like little roads that connect one website to another, and the more roads a website has, the more popular it looks to Google. So, if a website has lots of backlinks, it can help it show up higher in search results and get more visitors.",
  },
  {
    icon: faLaptopCode,
    title: "Design & Development",
    description:
      "It's like building a really cool toy on a computer. First, you think about what the toy will look like and how it will work. Then, you use special tools and programs to create the toy on the computer. Finally, you make sure the toy works perfectly and looks amazing before you can play with it.",
  },
];

const Feature: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`col-lg-4 ${Styles.fadeInUp}`}
            >
              <div className={`bg-light rounded text-center p-4 ${Styles.featureItem}`}>
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-primary mb-4"
                  style={{width: "4em", display: "inline"}}
                />
                <h5 className="mb-3">{feature.title}</h5>
                <p className="m-0">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
