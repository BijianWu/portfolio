import React from "react";
export default function GameModal5(props){
    if(!props.isActive){ return null; }

    return <>
    <div className={`services__modal active-modal`} >
      <div className="hidden-clickable" onClick={() => props.toggleActive()}></div>
        <div className="services__modal-content portfolio__moda-content game-modal-style">
        
        <h4 className="services__modal-title">
                  Stealth Game prototype <br />
                  Game
                </h4>

                <h5 className="testimonial__name">
                  Portfolio 5 : Stealth Game prototype Game
                </h5>
                <p className="testimonial__client">
                  It is a Third person Stealth type of game, I made the game
                  using Unreal while scripting in C++.
                </p>
                <br />
                <p className="testimonial__name">
                  Following is the screenshot of same of the some gameplay
                  scene.
                </p>
                <img
                  src="assets/images/game5/p1.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game5/p2.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game5/p3.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game5/p4.png"
                  className="portfolio__content-img"
                />
                <p className="testimonial__name">
                  The game has following features implemented
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Enemy patrolling around the level, player has to dodge
                      them.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Invisible power-up used to make character invisble for 3
                      seconds.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Goal is to reach the end point.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Different difficulty settings for player to choose from.
                    </p>
                  </li>
                </ul>

                <a
                  href="https://drive.google.com/file/d/1YopELhrM6KNZwt10gppqGrfYUTDR5LSC/view"
                  target="_blank"
                  className="button button--flex button--small button--link"
                >
                  Download Link
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>

        </div>
    </div>
    
    </>
}