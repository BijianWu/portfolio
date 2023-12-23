import React from "react";

export default function AboutMe(){
    return <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
          <img src="./../assets/images/bijian_about.jpg" alt="" className="about__img" />

          <div className="about__data">
            <p className="about__description">
              I am proficient in different programming languages and APIs, have acquired relevant experience in
              software development using Visual Studio particularly C#, front-end web
              development using JavaScript, back-end development using Java, JavaScript, PHP and Python, game development in Unity and Unreal, 
              have in-depth knowlege of MySql and MongoDb, and also have profound experiences in containerisation tools like Docker and Kubernetes. <br/> 
              I am a very enthusiastic and hardworking individual dedicated to high quality work produced
              timely meeting given deadlines and targets. In my free time I am
              always developing my skills, practising new ways of overcoming
              given tasks speedily and learning new related skills using online
              resources and other sources provided or offered at programming events.
            </p>

            <div className="about__info">
              <div>
                <span className="about__info-title">03+</span>
                <span className="about__info-name"
                  >Years <br />
                  experience</span
                >
              </div>

              <div>
                <span className="about__info-title">20+</span>
                <span className="about__info-name"
                  >Completed <br />
                  Projects</span
                >
              </div>

              <div>
                <span className="about__info-title">03+</span>
                <span className="about__info-name"
                  >Comapnies <br />
                  worked</span
                >
              </div>
            </div>

            <div className="about__buttons">
              <a
                download=""
                href="assets/pdf/BijianWuResume.pdf"
                className="button button--flex"
              >
                Download CV<i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
}