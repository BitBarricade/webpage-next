import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Styles from "./Member.module.css";

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image }) => {
  return (
    <div className={`rounded shadow-lg ${Styles.teamItem}`}>
      <div className={`text-center p-4 ${Styles.teamBox}`}>
        <Image
          className="img-fluid rounded-circle mb-4 m-auto"
          src={image}
          alt={name}
          width={180}
          height={180}
        />
        <h5>{name}</h5>
        <span>{position}</span>
      </div>
      <div className="d-flex justify-content-center p-4">
        <a className={`btn btn-square mx-1 shadow ${Styles.btn}`} href="#">
          <FaFacebookF style={{width: "1em", display: "inline", margin: "auto"}}/>
        </a>
        <a className={`btn btn-square mx-1 shadow ${Styles.btn}`} href="#">
          <FaTwitter style={{width: "1em", display: "inline", margin: "auto"}}/>
        </a>
        <a className={`btn btn-square mx-1 shadow ${Styles.btn}`} href="#">
          <FaInstagram style={{width: "1em", display: "inline", margin: "auto"}}/>
        </a>
        <a className={`btn btn-square mx-1 shadow ${Styles.btn}`} href="#">
          <FaLinkedinIn style={{width: "1em", display: "inline", margin: "auto"}}/>
        </a>
      </div>
    </div>
  );
};

export default TeamMember;
