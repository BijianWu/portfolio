import React from "react";
export default function GameModal10(props){
    if(!props.isActive){ return null; }

    return <>
    <div className={`services__modal active-modal`}>
      <div className="hidden-clickable" onClick={() => props.toggleActive()}></div>
        <div className="services__modal-content portfolio__moda-content game-modal-style">
        
        <h4 className="services__modal-title">
                  Ultimate battle legend <br />
                  Game <b>(Still In development)</b>
                </h4>

                <h5 className="testimonial__name">
                  Portfolio 10 : Ultimate battle legend Game
                </h5>
                <p className="testimonial__client">
                  It is a Multiplyer Mobile Clash Royal style Game, I made the
                  client in Unity, only using Unity as rendering engine, but
                  created my own physics system, the server is a Javascript node console
                  application made using Socket.io
                  plus the same my custom physics used in client
                </p>
                <br />
                <p className="testimonial__name">
                  Following is the screenshot of same of the some gameplay
                  scene.
                </p>
                <img
                  src="assets/images/game10/p1.png"
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
                      Spawn knight unit using drag and drop
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Attack system is working
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      3D elements in a 2D setting
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
                      Energy system
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">More Units</p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">Better looking attack animation and tower</p>
                  </li>
                </ul>

        </div>
    </div>
    
    </>
}