import React, { useState } from "react";

export default function GamesWork(){
  const[modalOn_1, setModalOn_1] = useState(false);
  const modalStyles_1 = modalOn_1 ? "active-modal" : "";
  
    return <>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Games</h2>
        <span className="section__subtitle">Most recent games I have creatded</span>

        <div className="portfolio__container container swiper-container">
          <div className="swiper-wrapper">
          




            {/* <!--====== PORTFOIL 1=======--> */}
            <div className="portfolio__content grid swiper-slide">
              <img src="assets/images/game1/1.png" alt="" className="portfolio__img" />

              <div className="protfolio__data">
                <h3 className="portfolio__title">Space Shooter Game</h3>
                <p className="portfolio__description">
                  Made using Visual Studio C# windows form
                </p>
                <span
                  className="button button--flex button--small services__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
            </div>

            {/* <!--====== PORTFOIL 2=======--> */}
            <div className="portfolio__content grid swiper-slide">
              <img src="assets/images/game2/3.png" alt="" className="portfolio__img" />

              <div className="protfolio__data">
                <h3 className="portfolio__title">Sword Warrors</h3>
                <p className="portfolio__description">
                  A 3D RPG Action game made using Unity
                </p>
                <span
                  className="button button--flex button--small services__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
            </div>

            {/* <!--====== PORTFOIL 3=======--> */}
            <div className="portfolio__content grid swiper-slide">
              <img src="assets/images/3.png" alt="" className="portfolio__img" />

              <div className="protfolio__data">
                <h3 className="portfolio__title">Fantasy Travel</h3>
                <p className="portfolio__description">
                  2D tile based RPG game made using Game Maker Studio
                </p>
                <span
                  className="button button--flex button--small services__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
            </div>
            {/* <!--====== PORTFOIL 4=======--> */}
            <div className="portfolio__content grid swiper-slide">
              <img
                src="assets/images/game4/p1.png"
                alt=""
                className="portfolio__img"
              />

              <div className="protfolio__data">
                <h3 className="portfolio__title">Galactic Defence</h3>
                <p className="portfolio__description">
                  Mobile tower defence game made using Unity
                </p>
                <span
                  className="button button--flex button--small services__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
            </div>
            {/* <!--====== PORTFOIL 5=======--> */}
            <div className="portfolio__content grid swiper-slide">
              <img
                src="assets/images/game5/p1.png"
                alt=""
                className="portfolio__img"
              />

              <div className="protfolio__data">
                <h3 className="portfolio__title">Stealth Game prototype</h3>
                <p className="portfolio__description">
                  3D Third person Stealth Game made using Unreal engine
                </p>
                <span
                  className="button button--flex button--small services__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
            </div>
            {/* <!--====== PORTFOIL 6=======--> */}
            <div className="portfolio__content grid swiper-slide">
              <img src="assets/images/6.png" alt="" className="portfolio__img" />

              <div className="protfolio__data">
                <h3 className="portfolio__title">Galactic Get Away</h3>
                <p className="portfolio__description">
                  Mobile puzzle game made using Unity
                </p>
                <span
                  className="button button--flex button--small services__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
            </div>
            {/* <!--====== PORTFOIL 7=======--> */}
            <div className="portfolio__content grid swiper-slide">
              <img src="assets/images/7.png" alt="" className="portfolio__img" />

              <div className="protfolio__data">
                <h3 className="portfolio__title">Machine Battle Field</h3>
                <p className="portfolio__description">
                  AR Mobile Multiplayer game made using Unity
                </p>
                <span
                  className="button button--flex button--small services__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
            </div>
            {/* <!--====== PORTFOIL 8=======--> */}
            <div className="portfolio__content grid swiper-slide">
              <img src="assets/images/8.png" alt="" className="portfolio__img" />

              <div className="protfolio__data">
                <h3 className="portfolio__title">PIXI multiplayer</h3>
                <p className="portfolio__description">
                  Brower-based Multiplayer game made using JavaScript
                </p>
                <span
                  className="button button--flex button--small services__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
            </div>
            {/* <!--====== PORTFOIL 9=======--> */}
            <div className="portfolio__content grid swiper-slide">
              <img src="assets/images/9.png" alt="" className="portfolio__img" />

              <div className="protfolio__data">
                <h3 className="portfolio__title">Galactic Warrors</h3>
                <p className="portfolio__description">
                  Mobile Platformer Shooter Multiplayer game made using Unity
                  and LiteNetLib server
                </p>
                <span
                  className="button button--flex button--small services__button"
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>
            </div>
          </div>
          {/* <!-- Add Arrows--> */}
          <div className="swiper-button-next">
            <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>

          {/* <!-- Add Pagination--> */}
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
}