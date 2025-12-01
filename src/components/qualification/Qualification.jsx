import React, { useState } from "react";
import "./qualification.css";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from "react-icons/hi";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        {/* Tabs */}
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <HiOutlineAcademicCap className="qualification__icon" />
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <HiOutlineBriefcase className="qualification__icon" />
            Experience
          </div>
        </div>

        {/* Sections */}
        <div className="qualification__sections">
          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BS in Computer Science</h3>
                <span className="qualification__subtitle">
                  Sukkur IBA University
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2020 - 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">
                  Boys Degree College
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2016 - 2018
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  Map Fintech - Remote
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  May 2025 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                  GiftCard8 - Remote
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  Nov 2024 - May 2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer Intern</h3>
                <span className="qualification__subtitle">
                  Web3gle - Remote
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  Jul 2024 - Sept 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
