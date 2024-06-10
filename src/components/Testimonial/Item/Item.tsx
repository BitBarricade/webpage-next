import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialItemProps {
  text: string;
  image: string;
  name: string;
  profession: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  text,
  image,
  name,
  profession,
}) => {
  return (
    <div className="testimonial-item bg-light rounded my-4 p-4 shadow-lg">
      <p className="fs-5 flex items-center">
        <FaQuoteLeft className="fa-4x text-primary mt-n4 me-3" />
        {text}
      </p>
      <div className="d-flex align-items-center">
        <Image
          className="img-fluid flex-shrink-0 rounded-full"
          src={image}
          alt={name}
          width={65}
          height={65}
        />
        <div className="ps-4">
          <h5 className="mb-1">{name}</h5>
          <span>{profession}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
