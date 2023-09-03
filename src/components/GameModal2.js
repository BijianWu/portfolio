import React from "react";
export default function GameModal2(props){
    if(!props.isActive){ return null; }

    return <>
    <div className={`services__modal active-modal`}>
      <div className="hidden-clickable" onClick={() => props.toggleActive()}></div>
        <div className="services__modal-content portfolio__moda-content game-modal-style">
        
        <h4 className="services__modal-title">
        Sword Warrors <br />
        Game
      </h4>

      <h5 className="testimonial__name">
        Portfolio 2 : Sword Warrors Game
      </h5>
      <p className="testimonial__client">
        I made the game using Unity while scripting in C#.
      </p>
      <p className="testimonial__client">
        It is a 3D RPG quest-based and battle-based game.
      </p>
      <br />
      <p className="testimonial__name">
        Following is the screenshot of same of the some gameplay
        scene.
      </p>
      <img
        src="assets/images/game2/2.png"
        className="portfolio__content-img"
      />
      <img
        src="assets/images/game2/3.png"
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
            Enemy randing spawned around the map.
          </p>
        </li>
        <li className="services__modal-service">
          <i
            className="uil uil-check-circle services__modal-icon testimonial__client"
          ></i>
          <p className="testimonial__client">
            Kill enemies will gain experiences and loots.
          </p>
        </li>
        <li className="services__modal-service">
          <i
            className="uil uil-check-circle services__modal-icon testimonial__client"
          ></i>
          <p className="testimonial__client">
            Final part of game is a challenging puzzle maze.
          </p>
        </li>
        <li className="services__modal-service">
          <i
            className="uil uil-check-circle services__modal-icon testimonial__client"
          ></i>
          <p className="testimonial__client">
            Quests been given so that player have the clue.
          </p>
        </li>
      </ul>

      <a
        href="https://drive.google.com/file/d/1l9wdouE24d0SYksM_tIAaSWeQpwGUz4x/view"
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