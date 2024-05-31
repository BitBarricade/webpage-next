import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faUsersCog,
  faUsers,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Facts: React.FC = () => {
  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <FontAwesomeIcon
                icon={faCertificate}
                className="text-secondary mb-4 text-3xl animate-zoomIn"
              />
              <h1 className="text-white text-4xl mb-2 animate-slideInDown">
                2
              </h1>
              <p className="text-white">Years Experience</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <FontAwesomeIcon
                icon={faUsersCog}
                className="text-secondary mb-4 text-3xl animate-zoomIn"
              />
              <h1 className="text-white text-4xl mb-2 animate-slideInDown">
                4
              </h1>
              <p className="text-white">Team Members</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-secondary mb-4 text-3xl animate-zoomIn"
              />
              <h1 className="text-white text-4xl mb-2 animate-slideInDown">
                12
              </h1>
              <p className="text-white">Satisfied Clients</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-secondary mb-4 text-3xl animate-zoomIn"
              />
              <h1 className="text-white text-4xl mb-2 animate-slideInDown">
                12
              </h1>
              <p className="text-white">Completed Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
