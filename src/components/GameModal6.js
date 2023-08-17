import React from "react";
export default function GameModal6(props){
    if(!props.isActive){ return null; }

    return <>
    <div className={`services__modal active-modal`} >
      <div className="hidden-clickable" onClick={() => props.toggleActive()}></div>
        <div className="services__modal-content portfolio__moda-content game-modal-style">
        
        <h4 className="services__modal-title">
                  Galactic Get Away <br />
                  Game
                </h4>

                <h5 className="testimonial__name">
                  Portfolio 6 : Galactic Get Away Game
                </h5>
                <p className="testimonial__client">
                  It is a group project as did, which I been tasked to do all
                  the programming part of the game, I am using Unity while
                  scripting in C# to make this game. It is a Puzzle Game that
                  are based on Optical Illusions, just like Monument Valley. it
                  has got 5 levels.
                </p>
                <br />
                <p className="testimonial__name">
                  Following is the screenshot of same of the some gameplay
                  scene.
                </p>
                <img
                  src="assets/images/game6/p1.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game6/p2.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game6/p3.png"
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
                      Player's aim is to get to end point.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      But player is traped in the puzzle, the player has to find
                      a way to get to the end point by manipulate the
                      envrionment.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      At level 5, there are enemies patrolling around the level,
                      player has to get pass them.
                    </p>
                  </li>
                </ul>

                <a
                  href="https://drive.google.com/file/d/15c6L2dXVL0pItahVwPsaluk21w_n48lK/view"
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