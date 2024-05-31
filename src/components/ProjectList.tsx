import React from "react";
import Image from "next/image";
import { FaEye, FaLink } from "react-icons/fa";

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
        <div className="animate-slideInDown">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Our Projects<span></span>
          </p>
          <h1 className="text-center mb-5">Recently Completed Projects</h1>
        </div>
        <div className="row mt-n2 animate-slideInDown">
          <div className="col-12 text-center">
            <ul className="list-inline mb-5" id="portfolio-flters">
              <li className="mx-2 active" data-filter="*">
                All
              </li>
              <li className="mx-2" data-filter=".first">
                Web Design
              </li>
              <li className="mx-2" data-filter=".second">
                Graphic Design
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 portfolio-container">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item animate-zoomIn">
              <div className="rounded overflow-hidden shadow-lg">
                <div className="relative overflow-hidden">
                  <Image
                    className="w-full"
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                  />
                  <div className="portfolio-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.image}
                      className="btn btn-square btn-outline-light mx-1"
                    >
                      <FaEye />
                    </a>
                    <a
                      href="#"
                      className="btn btn-square btn-outline-light mx-1"
                    >
                      <FaLink />
                    </a>
                  </div>
                </div>
                <div className="bg-light p-4">
                  <p className="text-primary fw-medium mb-2">
                    {project.category}
                  </p>
                  <h5 className="lh-base mb-0">{project.title}</h5>
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
