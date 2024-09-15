import React from "react";
export default function GameModal11(props){
    if(!props.isActive){ return null; }

    return <>
    <div className={`services__modal active-modal`}>
      <div className="hidden-clickable" onClick={() => props.toggleActive()}></div>
        <div className="services__modal-content portfolio__moda-content game-modal-style">
        
        <h4 className="services__modal-title">
                  Action Shooter <br />
                  Game <b>(Still In development)</b>
                </h4>

                <h5 className="testimonial__name">
                  Portfolio 11 : Action Shooter
                </h5>
                <p className="testimonial__client">
                  It is a Multiplyer 2d top down action shooter game, I made the
                  client in Unity, only using Unity as rendering engine, but
                  created my own physics system, the server is C# console
                  application made using LiteNetLib (UDP networking library),
                  plus the same my custom physics used in client
                </p>
                <br />
                <p className="testimonial__name">
                  Following is the screenshot of same of the some gameplay
                  scene.
                </p>
                <img
                  src="assets/images/game11/p1.png"
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
                      spawn bullets and kill and track progress
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      player can use rollong action to dodge bullets
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
                      More Polished UI
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      spawning new guns, power ups
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      bullets shooting constaints
                      </p>
                  </li>

                </ul>

        </div>
    </div>
    
    </>
}