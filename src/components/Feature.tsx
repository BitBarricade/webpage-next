import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faSearch,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-primary mb-4 text-3xl animate-zoomIn"
              />
              <h5 className="text-xl font-semibold mb-3">{feature.title}</h5>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
