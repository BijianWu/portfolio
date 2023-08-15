import React from "react";
export default function GameModal3(props){
    if(!props.isActive){ return null; }

    return <>
    <div className={`services__modal active-modal`} onClick={() => props.toggleActive()}>
        <div className="services__modal-content portfolio__moda-content game-modal-style">
        
        <h4 className="services__modal-title">
                  Fantasy Travel <br />
                  Game
                </h4>
                <i
                  className="uil uil-times services__modal-close portfolio__modal-close"
                ></i>

                <h5 className="testimonial__name">
                  Portfolio 3 : Fantasy Travel Game
                </h5>
                <p className="testimonial__client">
                  I made this 2D RPG game using Game Maker Studio while
                  scripting in GML.
                </p>
                <p className="testimonial__client">
                  It is a 2D RPG tile-based game.
                </p>
                <br />
                <p className="testimonial__name">
                  Following is the screenshot of same of the some gameplay
                  scene.
                </p>
                <img
                  src="assets/images/game3/p3.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game3/p4.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game3/p6.png"
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
                      It has quests that player has to do to get permission to
                      go out of home.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Dialog System for giving quests.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Health and mana portion been given to easy the gameplay.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      There are two bosses inside the game player has to fight,
                      each got different abilities.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Skill enemy will gain coins that can be used in shop
                      purchase.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Shop system for player to buy health and mana portion
                    </p>
                  </li>
                </ul>

                <a
                  href="https://drive.google.com/file/d/1nBLyiaCGo7Rs2r99C_Ud4LIy2TJcOjJa/view"
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