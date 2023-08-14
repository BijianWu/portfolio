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

          </div>
        </div>
      </section>
    </>
}