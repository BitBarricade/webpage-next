'use client';
import React from "react";
import TestimonialItem from "./Item/Item";
import { motion } from "framer-motion";
import Styles from "./Testimonial.module.css";

const testimonials = [
  {
    text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
    image: "/img/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
  },
  {
    text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
    image: "/img/testimonial-2.jpg",
    name: "Client Name",
    profession: "Profession",
  },
  {
    text: "Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.",
    image: "/img/testimonial-3.jpg",
    name: "Client Name",
    profession: "Profession",
  },
];

const TestimonialList: React.FC = () => {
  return (
    <div className="container-xxl py-5 animate">
      <div className="align-items-center container d-flex flex-column px-lg-5 py-5">
        <motion.div
          initial={{opacity: 0, y: 150}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        >
          <p className={`justify-content-center ${Styles.SectionTitle}`}>
            <span></span>Testimonial<span></span>
          </p>
          <h1 className={`text-center mb-5 ${Styles.Title}`}>What Say Our Clients!</h1>
        </motion.div>
        <div className="row g-4 w-xxl-75">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="col-lg-4 col-md-6"
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
            >
              <TestimonialItem
                text={testimonial.text}
                image={testimonial.image}
                name={testimonial.name}
                profession={testimonial.profession}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;
