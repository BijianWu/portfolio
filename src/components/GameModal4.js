import React from "react";
export default function GameModal4(props){
    if(!props.isActive){ return null; }

    return <>
    <div className={`services__modal active-modal`}>
      <div className="hidden-clickable" onClick={() => props.toggleActive()}></div>
        <div className="services__modal-content portfolio__moda-content game-modal-style">
        
        <h4 className="services__modal-title">
                  Galactic Defence <br />
                  Game
                </h4>

                <h5 className="testimonial__name">
                  Portfolio 4 : Galactic Defence Game
                </h5>
                <p className="testimonial__client">
                  It is a mobile tower defence game, I made the game using Unity
                  While scripting in C#.
                </p>
                <br />
                <p className="testimonial__name">
                  Following is the screenshot of same of the some gameplay
                  scene.
                </p>
                <img
                  src="assets/images/game4/p1.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game4/p2.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game4/p4.png"
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
                      Enemy spawn from their base to steal power-supplies from
                      station.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Player has to place tower on selected surface to destory
                      enemy.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Hint system to help player understanding the mechanics of
                      the game.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Sci-fi theme in space setting to engage the player.
                    </p>
                  </li>
                </ul>

                <a
                  href="https://play.google.com/store/apps/details?id=com.FadedReality.GalacticDefence&gl=GB"
                  target="_blank"
                  className="button button--flex button--small button--link"
                >
                  Google Play store link
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>

        </div>
    </div>
    
    </>
}