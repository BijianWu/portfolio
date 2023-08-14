import React from "react";

export default function Qualification(){
    return <>
      <section className="qualification section" id="qualifications">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className="qualification__button button--flex"
              data-target="#education"
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
            <div
              className="qualification__button button--flex qualification__active"
              data-target="#work"
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Work
            </div>
          </div>

          <div className="qualification__sections">
            {/* <!--====== QUALIFICATION CONTENT 1 =======--> */}
            <div className="qualification__content" data-content id="education">
              {/* <!--====== QUALIFICATION 1 =======--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">ACCESS TO COMPUTING</h3>
                  <span className="qualification__subtitle"
                    >SOUTH ESSEX COLLEGE</span
                  >
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2016 - 2017
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--====== QUALIFICATION 2 =======--> */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                </div>
                <div>
                  <h3 className="qualification__title">BSC COMPUTER GAME DESIGN</h3>
                  <span className="qualification__subtitle"
                    >SOUTH ESSEX COLLEGE UNIVERSITY</span
                  >
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2017 - 2020
                  </div>
                </div>
              </div>
            </div>

            {/* <!--====== WORK CONTENT 2 =======--> */}
            <div
              className="qualification__content qualification__active"
              data-content
              id="work"
            >
              {/* <!--====== WORK 1 =======--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">MULTIPLAYER PROGRAMMER</h3>
                  <span className="qualification__subtitle"
                    >Pineapple Studios Ltd</span
                  >
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2020 - 2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--====== WORK 2 =======--> */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">GAME DEVELOPER</h3>
                  <span className="qualification__subtitle">IGT</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - 2022
                  </div>
                </div>
              </div>

              {/* <!--====== WORK 3 =======--> */}
              <div className="qualification__data">

                <div>
                  <h3 className="qualification__title">GAME DEVELOPER</h3>
                  <span className="qualification__subtitle"
                    >HUNGRY BEAR GAMING LTD</span
                  >
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2022 - 2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--====== WORK 4 =======--> */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                </div>
                
                <div>
                  <h3 className="qualification__title">FULL STACK DEVELOPER</h3>
                  <span className="qualification__subtitle"
                    >HUNGRY BEAR GAMING LTD</span
                  >
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2023 - current
                  </div>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
}