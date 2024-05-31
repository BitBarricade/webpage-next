import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8">
      <Image
        src="/img/shape4.jpg"
        alt="Illustration"
        width={200}
        height={200}
        className="mb-4"
      />
      <h2 className="text-3xl font-bold">Bit Barricade</h2>
      <p className="mt-2 text-center">Unleash Your Creativity</p>
    </div>
  );
};

export default LeftSection;
