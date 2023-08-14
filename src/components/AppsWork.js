import React from "react";

export default function AppsWork(){
    return <>
      <section className="services section" id="services">
        <h2 className="section__title">Apps</h2>
        <span className="section__subtitle">What i have created</span>

        <div className="services__container container">
          {/* <!--====== SERVICES 1=======--> */}
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                ForeverG <br />
                Fullstack web app
              </h3>
              <img src="assets/images/foreverg.png" alt="" className="myapps__img" />
            </div>

            <span
              className="button button--flex button--small button--link services__button"
            >
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">ForeverG</h4>
                <i className="uil uil-times services__modal-close"></i>
                <p className="services__modal-des">
                  Made by using ReactJS, Django and MySQL, below are the
                  features this app has
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Tracking everyday goals</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>lets user create daily diary</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Track future goals with deadline</p>
                  </li>
                </ul>
                <br />
                <a
                  href="https://bijianwu.github.io/ForeverG-frontend/"
                  target="_blank"
                  className="button button--flex button--small button--link"
                >
                  Link to the web app I created
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
            {/* <!-- Portfolio 1 --> */}
            <div className="services__modal">
              <div
                className="services__modal-content portfolio__moda-content"
                // style="
                //   overflow-y: scroll;
                //   max-height: 85%;
                //   margin-top: 50px;
                //   margin-bottom: 50px;
                // "
              >
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

            {/* <!-- Portfolio 2 --> */}
            <div className="services__modal">
              <div
                className="services__modal-content portfolio__moda-content"
                // style="
                //   overflow-y: scroll;
                //   max-height: 85%;
                //   margin-top: 50px;
                //   margin-bottom: 50px;
                // "
              >
                <h4 className="services__modal-title">
                  Sword Warrors <br />
                  Game
                </h4>
                <i
                  className="uil uil-times services__modal-close portfolio__modal-close"
                ></i>

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

            {/* <!-- Portfolio 3 --> */}
            <div className="services__modal">
              <div
                className="services__modal-content portfolio__moda-content"
                // style="
                //   overflow-y: scroll;
                //   max-height: 85%;
                //   margin-top: 50px;
                //   margin-bottom: 50px;
                // "
              >
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
            {/* <!-- Portfolio 4 --> */}
            <div className="services__modal">
              <div
                className="services__modal-content portfolio__moda-content"
                // style="
                //   overflow-y: scroll;
                //   max-height: 85%;
                //   margin-top: 50px;
                //   margin-bottom: 50px;
                // "
              >
                <h4 className="services__modal-title">
                  Galactic Defence <br />
                  Game
                </h4>
                <i
                  className="uil uil-times services__modal-close portfolio__modal-close"
                ></i>

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
            {/* <!-- Portfolio 5 --> */}
            <div className="services__modal">
              <div
                className="services__modal-content portfolio__moda-content"
                // style="
                //   overflow-y: scroll;
                //   max-height: 85%;
                //   margin-top: 50px;
                //   margin-bottom: 50px;
                // "
              >
                <h4 className="services__modal-title">
                  Stealth Game prototype <br />
                  Game
                </h4>
                <i
                  className="uil uil-times services__modal-close portfolio__modal-close"
                ></i>

                <h5 className="testimonial__name">
                  Portfolio 5 : Stealth Game prototype Game
                </h5>
                <p className="testimonial__client">
                  It is a Third person Stealth type of game, I made the game
                  using Unreal while scripting in C++.
                </p>
                <br />
                <p className="testimonial__name">
                  Following is the screenshot of same of the some gameplay
                  scene.
                </p>
                <img
                  src="assets/images/game5/p1.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game5/p2.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game5/p3.png"
                  className="portfolio__content-img"
                />
                <img
                  src="assets/images/game5/p4.png"
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
                      Enemy patrolling around the level, player has to dodge
                      them.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Invisible power-up used to make character invisble for 3
                      seconds.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Goal is to reach the end point.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i
                      className="uil uil-check-circle services__modal-icon testimonial__client"
                    ></i>
                    <p className="testimonial__client">
                      Different difficulty settings for player to choose from.
                    </p>
                  </li>
                </ul>

                <a
                  href="https://drive.google.com/file/d/1YopELhrM6KNZwt10gppqGrfYUTDR5LSC/view"
                  target="_blank"
                  className="button button--flex button--small button--link"
                >
                  Download Link
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
            {/* <!-- Portfolio 6 --> */}
            <div className="services__modal">
              <div
                className="services__modal-content portfolio__moda-content"
                // style="
                //   overflow-y: scroll;
                //   max-height: 85%;
                //   margin-top: 50px;
                //   margin-bottom: 50px;
                // "
              >
                <h4 className="services__modal-title">
                  Galactic Get Away <br />
                  Game
                </h4>
                <i
                  className="uil uil-times services__modal-close portfolio__modal-close"
                ></i>

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

            {/* <!-- Portfolio 7 --> */}
            <div className="services__modal">
              <div
                className="services__modal-content portfolio__moda-content"
                // style="
                //   overflow-y: scroll;
                //   max-height: 85%;
                //   margin-top: 50px;
                //   margin-bottom: 50px;
                // "
              >
                <h4 className="services__modal-title">
                  Machine Battlefield <br />
                  Game
                </h4>
                <i
                  className="uil uil-times services__modal-close portfolio__modal-close"
                ></i>

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

            {/* <!-- Portfolio 8 --> */}
            <div className="services__modal">
              <div
                className="services__modal-content portfolio__moda-content"
                // style="
                //   overflow-y: scroll;
                //   max-height: 85%;
                //   margin-top: 50px;
                //   margin-bottom: 50px;
                // "
              >
                <h4 className="services__modal-title">
                  PIXI multiplayer <br />
                  Game
                </h4>
                <i
                  className="uil uil-times services__modal-close portfolio__modal-close"
                ></i>

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
            {/* <!-- Portfolio 9 --> */}
            <div className="services__modal">
              <div
                className="services__modal-content portfolio__moda-content"
                // style="
                //   overflow-y: scroll;
                //   max-height: 85%;
                //   margin-top: 50px;
                //   margin-bottom: 50px;
                // "
              >
                <h4 className="services__modal-title">
                  Galactic Warrors <br />
                  Game <b>(Still In development)</b>
                </h4>
                <i
                  className="uil uil-times services__modal-close portfolio__modal-close"
                ></i>

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
          </div>
        </div>
      </section>
    </>
}