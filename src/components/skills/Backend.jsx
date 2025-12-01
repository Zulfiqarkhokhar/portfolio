import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Spring Boot</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">REST APIs</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Node.js (Basics)</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Git / GitHub</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
