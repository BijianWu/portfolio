import React from "react";
export default function GameModal7(props){
    if(!props.isActive){ return null; }

    return <>
    <div className={`services__modal active-modal`}>
      <div className="hidden-clickable" onClick={() => props.toggleActive()}></div>
        <div className="services__modal-content portfolio__moda-content game-modal-style">
        
        <h4 className="services__modal-title">
                  Machine Battlefield <br />
                  Game
                </h4>

                <h5 className="testimonial__name">
                  Portfolio 7 : Machine Battlefield Game
                </h5>
                <p className="testimonial__client">
                  It is a Multiplyer AR Mobile Game that has got user login
                  (stored in MySQL database), and support 1v1 only, I did it all
                  on myself, I am using Unity while scripting in C# to make this
                  game, the backend for this game is Photon
                </p>
                <br />
                <p className="testimonial__name">
                  Following is the example gameplay of the game.
                </p>
                <video width="560" height="480" controls autoPlay muted>
                  <source
                    src="assets/video/machineBattleField.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
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
                      AR to place battle field on the real world surface.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Player can shoot each other to reduce other's Hit Points
                      and can re-spawned on the battle field
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Win and lose system based on who scored 3 points first
                    </p>
                  </li>
                </ul>
        </div>
    </div>
    
    </>
}