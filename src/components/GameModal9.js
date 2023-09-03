import React from "react";
export default function GameModal9(props){
    if(!props.isActive){ return null; }

    return <>
    <div className={`services__modal active-modal`}>
      <div className="hidden-clickable" onClick={() => props.toggleActive()}></div>
        <div className="services__modal-content portfolio__moda-content game-modal-style">
        
        <h4 className="services__modal-title">
                  Galactic Warrors <br />
                  Game <b>(Still In development)</b>
                </h4>

                <h5 className="testimonial__name">
                  Portfolio 9 : Galactic Warrors Game
                </h5>
                <p className="testimonial__client">
                  It is a Multiplyer Mobile Platformer Shooter Game, I made the
                  client in Unity, only using Unity as rendering engine, but
                  created my own physics system, the server is a C# console
                  application made using LiteNetLib (UDP networking library)
                  plus the same my custom physics used in client
                </p>
                <br />
                <p className="testimonial__name">
                  Following is the screenshot of same of the some gameplay
                  scene.
                </p>
                <img
                  src="assets/images/game9/p1.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game9/p2.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game9/p3.png"
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
                      Player Logins with using PlayFab, server is also hosted in
                      PlayFab
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
                      Real-time score system to track who scored the most, and
                      announce winner when either player hit the target score
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      randomly spawned power-ups
                    </p>
                  </li>
                </ul>

                <br />
                <p className="testimonial__name">
                  Bellow is the features planning to be added:
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Different Weapon collection and usage system
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Player Logins with using PlayFab, server is also hosted in
                      PlayFab
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">Pretty map</p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">Bug fixes</p>
                  </li>
                </ul>

        </div>
    </div>
    
    </>
}