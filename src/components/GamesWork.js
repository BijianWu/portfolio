import React, { useState } from "react";
import GameModal1 from "./GameModal1";
import GameModal2 from "./GameModal2";
import GameModal3 from "./GameModal3";
import GameModal4 from "./GameModal4";
import GameModal5 from "./GameModal5";
import GameModal6 from "./GameModal6";
import GameModal7 from "./GameModal7";
import GameModal8 from "./GameModal8";
import GameModal9 from "./GameModal9";

export default function GamesWork(){
  const[isModal1On, toggleModal_1] = useState(false);
  const[isModal2On, toggleModal_2] = useState(false);
  const[isModal3On, toggleModal_3] = useState(false);
  const[isModal4On, toggleModal_4] = useState(false);
  const[isModal5On, toggleModal_5] = useState(false);
  const[isModal6On, toggleModal_6] = useState(false);
  const[isModal7On, toggleModal_7] = useState(false);
  const[isModal8On, toggleModal_8] = useState(false);
  const[isModal9On, toggleModal_9] = useState(false);

    return <>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Games</h2>
        <span className="section__subtitle">Most recent games I have creatded</span>

        <div className="portfolio__container container swiper-container">
          <div className="swiper-wrapper  games-work-grid">

            {/* <!--====== PORTFOIL 1=======--> */}
            <div className="portfolio__content grid swiper-slide">
              <img src="assets/images/game1/1.png" alt="" className="portfolio__img" />

              <div className="protfolio__data">
                <h3 className="portfolio__title">Space Shooter Game</h3>
                <p className="portfolio__description">
                  Made using Visual Studio C# windows form
                </p>
                <span
                  className="button button--flex button--small services__button" onClick={() => toggleModal_1(prev => !prev)}
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
                <GameModal1 isActive={isModal1On} toggleActive={toggleModal_1}/>
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
                  className="button button--flex button--small services__button" onClick={() => toggleModal_2(prev => !prev)}
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
                <GameModal2 isActive={isModal2On} toggleActive={toggleModal_2}/>
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
                  className="button button--flex button--small services__button" onClick={() => toggleModal_3(prev => !prev)}
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
                <GameModal3 isActive={isModal3On} toggleActive={toggleModal_3}/>
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
                  className="button button--flex button--small services__button" onClick={() => toggleModal_4(prev => !prev)}
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
                <GameModal4 isActive={isModal4On} toggleActive={toggleModal_4}/>
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
                  className="button button--flex button--small services__button" onClick={() => toggleModal_5(prev => !prev)}
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
                <GameModal5 isActive={isModal5On} toggleActive={toggleModal_5}/>
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
                  className="button button--flex button--small services__button" onClick={() => toggleModal_6(prev => !prev)}
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
                <GameModal6 isActive={isModal6On} toggleActive={toggleModal_6}/>
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
                  className="button button--flex button--small services__button" onClick={() => toggleModal_7(prev => !prev)}
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
                <GameModal7 isActive={isModal7On} toggleActive={toggleModal_7}/>
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
                  className="button button--flex button--small services__button" onClick={() => toggleModal_8(prev => !prev)}
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
                <GameModal8 isActive={isModal8On} toggleActive={toggleModal_8}/>
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
                  className="button button--flex button--small services__button" onClick={() => toggleModal_9(prev => !prev)}
                >
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
                <GameModal9 isActive={isModal9On} toggleActive={toggleModal_9}/>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
}