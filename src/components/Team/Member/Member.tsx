import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image }) => {
  return (
    <div className="team-item bg-light rounded shadow-lg">
      <div className="text-center border-b p-4">
        <Image
          className="img-fluid rounded-full mb-4"
          src={image}
          alt={name}
          width={150}
          height={150}
        />
        <h5>{name}</h5>
        <span>{position}</span>
      </div>
      <div className="d-flex justify-center p-4">
        <a className="btn btn-square mx-1" href="#">
          <FaFacebookF />
        </a>
        <a className="btn btn-square mx-1" href="#">
          <FaTwitter />
        </a>
        <a className="btn btn-square mx-1" href="#">
          <FaInstagram />
        </a>
        <a className="btn btn-square mx-1" href="#">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
