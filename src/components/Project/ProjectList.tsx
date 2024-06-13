import React from "react";
import Image from "next/image";
import { FaEye, FaLink } from "react-icons/fa";
import Styles from "./ProjectList.module.css";

const projects = [
  {
    id: 1,
    category: "UI / UX Design",
    title: "Digital Agency Website Design And Development",
    image: "/img/portfolio-1.jpg",
  },
  {
    id: 2,
    category: "UI / UX Design",
    title: "Digital Agency Website Design And Development",
    image: "/img/portfolio-2.jpg",
  },
  {
    id: 3,
    category: "UI / UX Design",
    title: "Digital Agency Website Design And Development",
    image: "/img/portfolio-3.jpg",
  },
  {
    id: 4,
    category: "UI / UX Design",
    title: "Digital Agency Website Design And Development",
    image: "/img/portfolio-4.jpg",
  },
  {
    id: 5,
    category: "UI / UX Design",
    title: "Digital Agency Website Design And Development",
    image: "/img/portfolio-5.jpg",
  },
  {
    id: 6,
    category: "UI / UX Design",
    title: "Digital Agency Website Design And Development",
    image: "/img/portfolio-6.jpg",
  },
];

const ProjectList: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="animate">
          <p className={`justify-content-center ${Styles.SectionTitle}`}>
            <span></span>Our Projects<span></span>
          </p>
          <h1 className={`text-center mb-5 ${Styles.Title}`}>Recently Completed Projects</h1>
        </div>
        <div className="row mt-n2 animate">
          <div className="col-12 text-center">
            <ul className={`list-inline mb-5 ${Styles.portfolioFlters}`}>
              <li className="mx-2 active">
                All
              </li>
              <li className="mx-2">
                Web Design
              </li>
              <li className="mx-2">
                Graphic Design
              </li>
            </ul>
          </div>
        </div>
        <div className={`row px-xxl-5 g-4 ${Styles.PortfolioContainer}`}>
          {projects.map((project) => (
            <div key={project.id} className={`col-lg-4 col-xxl-3 col-xl-4 col-md-6 ${Styles.portfolioItem}`}>
              <div className="rounded overflow-hidden shadow-lg">
                <div className="position-relative overflow-hidden">
                  <Image
                    className="img-fluid w-100"
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                  />
                  <div className={Styles.portfolioOverlay}>
                    <a
                      href={project.image}
                      className="btn btn-square btn-outline-light mx-1"
                    >
                      <FaEye style={{display: "inline"}}/>
                    </a>
                    <a
                      href="#"
                      className="btn btn-square btn-outline-light mx-1"
                    >
                      <FaLink style={{display: "inline"}}/>
                    </a>
                  </div>
                </div>
                <div className={`p-4 ${Styles.CardBg}`}>
                  <p className={`fw-medium mb-2 ${Styles.CardCategory}`}>
                    {project.category}
                  </p>
                  <h5 className={`lh-base mb-0 ${Styles.CardText}`}>{project.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
