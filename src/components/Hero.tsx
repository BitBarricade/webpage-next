import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="bg-primary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-white text-4xl font-extrabold mb-4 animate-slideInDown">
              A digital agency comprised of intelligent and creative individuals
            </h1>
            <p className="text-white text-lg mb-6 animate-slideInDown">
              They may not wear capes, but they definitely know how to save the
              day with killer digital strategies 🦸‍♂️🦸‍♀️
            </p>
            <div className="space-x-4">
              <Link href="/login" passHref>
                <span className="inline-block bg-secondary text-white py-3 px-5 rounded-full shadow-lg transform transition hover:scale-105 animate-slideInLeft">
                  Read More
                </span>
              </Link>
              <Link href="/contact" passHref>
                <span className="inline-block bg-white text-primary py-3 px-5 rounded-full shadow-lg transform transition hover:scale-105 animate-slideInRight">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              className="rounded-lg shadow-lg transform transition hover:scale-105 animate-zoomIn"
              src="/img/hero.png"
              alt="Hero Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
