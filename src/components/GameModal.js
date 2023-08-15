import React, { useContext, useState } from "react";
import AppContext from "../AppContext";

export default function GameModal(props){

    if(!props.isActive){
        return null;
    }

    return <>
    <div className="services__container container">
        <div className="services__content">
            <div className={`services__modal active-modal`} onClick={() => props.toggleActive()}>
            <div className="services__modal-content portfolio__moda-content game-modal-style">
                
                <div className="">
                <div className="">
                <h4 className="services__modal-title">
                    Space Shooter<br />
                    Game
                </h4>
                <i
                    className="uil uil-times services__modal-close portfolio__modal-close"
                ></i>

                <h5 className="testimonial__name">
                    Portfolio 1 : Space Shooter Game
                </h5>
                <p className="testimonial__client">
                    I made the game using Visual Studio Windows Form and
                    programmed in C#.
                </p>
                <p className="testimonial__client">
                    It is a Space side scrolling Shooter type of game.
                </p>
                <br />
                <p className="testimonial__name">
                    Following is the gameplay screenshot.
                </p>
                <img
                    src="assets/images/game1/1.png"
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
                        Enemy spawn from right edge of screen, move all the way
                        towards the left edge of screen.
                    </p>
                    </li>
                    <li className="services__modal-service">
                    <i
                        className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                        Power-ups being spawned same way as enemy.
                    </p>
                    </li>
                    <li className="services__modal-service">
                    <i
                        className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                        There are three types of power-ups, shield, speed and heal
                    </p>
                    </li>
                    <li className="services__modal-service">
                    <i
                        className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                        Player has to dodge the enemy and can pick up the
                        power-ups to gain abilities.
                    </p>
                    </li>
                    </ul>

                    <a
                        href="https://drive.google.com/file/d/1__UebTkuxJO-bkTZL5W02dmVfg37PDV6/view"
                        target="_blank"
                        className="button button--flex button--small button--link"
                    >
                        Download Link
                        <i className="uil uil-arrow-right button__icon"></i>
                    </a>
                    </div>
                </div>


            </div>
            
            </div>
            
        </div>
    
    </div>
    
</>
}