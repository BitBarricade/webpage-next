import React from "react";
import TestimonialItem from "./Item/Item";

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
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">
        <p className="section-title text-secondary justify-content-center">
          <span></span>Testimonial<span></span>
        </p>
        <h1 className="text-center mb-5">What Say Our Clients!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              text={testimonial.text}
              image={testimonial.image}
              name={testimonial.name}
              profession={testimonial.profession}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;
