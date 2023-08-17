import React from "react";
export default function GameModal8(props){
    if(!props.isActive){ return null; }

    return <>
    <div className={`services__modal active-modal`}>
      <div className="hidden-clickable" onClick={() => props.toggleActive()}></div>
        <div className="services__modal-content portfolio__moda-content game-modal-style">
        
        <h4 className="services__modal-title">
        PIXI multiplayer <br />
        Game
      </h4>

      <h5 className="testimonial__name">
        Portfolio 8 : PIXI multiplayer Game
      </h5>
      <p className="testimonial__client">
        It is a Multiplyer Shooter Brower based Game, so it can be
        played on mobile or desktop,I made it by using Pixi.js as
        rendering engine and Socket.io as backend, while scripting in
        JavaScript
      </p>
      <br />
      <p className="testimonial__name">
        Following is the screenshot of same of the some gameplay
        scene.
      </p>
      <img
        src="assets/images/game8/p1.png"
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
            Player movements using on screen joystick.
          </p>
        </li>
        <li className="services__modal-service">
          <i
            className="uil uil-check-circle services__modal-icon testimonial__client"
          ></i>
          <p className="testimonial__client">
            User anonymous login and play with others
          </p>
        </li>
        <li className="services__modal-service">
          <i
            className="uil uil-check-circle services__modal-icon testimonial__client"
          ></i>
          <p className="testimonial__client">
            Player can shoot bullet to kill others and get respawned
          </p>
        </li>
        <li className="services__modal-service">
          <i
            className="uil uil-check-circle services__modal-icon testimonial__client"
          ></i>
          <p className="testimonial__client">
            Real-time score system to track who scored the most
          </p>
        </li>
      </ul>

      <a
        href="https://pixi--multiplayer.herokuapp.com/"
        target="_blank"
        className="button button--flex button--small button--link"
      >
        Playable Link
        <i className="uil uil-arrow-right button__icon"></i>
      </a>
        </div>
    </div>
    
    </>
}