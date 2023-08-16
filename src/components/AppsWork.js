import React, { useState } from "react";

export default function AppsWork(){
  const[modalOn_1, setModalOn_1] = useState(false);
  const modalStyles_1 = modalOn_1 ? "active-modal" : "";

  const[modalOn_2, setModalOn_2] = useState(false);
  const modalStyles_2 = modalOn_2 ? "active-modal" : "";

    return <>

      <section className="services section" id="services">
        <h2 className="section__title">Apps</h2>
        <span className="section__subtitle">What i have created</span>

        <div className="services__container container myapps__img_container">
          {/* <!--====== SERVICES 1=======--> */}
          <div className="services__content">
            <div className=" ">

              <h3 className="services__title">
              <span className="uil uil-web-grid services__icon"></span>
                ForeverG -
                <i className="testimonial__client">Fullstack</i>
                
              </h3>
              <div className="">
                <img src="assets/images/foreverg.png" alt="" className="myapps__img" />
              </div>

                <span
                className="button button--flex button--small button--link services__button"
                onClick={() =>setModalOn_1(true)}
              >
                View More
                <i className="uil uil-arrow-right button__icon"></i>
              </span>
            </div>
          </div>



          {/* <!--====== SERVICES 2=======--> */}
          <div className="services__content">
            <div className=" ">

              <h3 className="services__title">
              <span className="uil uil-web-grid services__icon"></span>
                Portfolio  - 
                <i className="testimonial__client">Frontend</i>
                
              </h3>
              <div className="">
                <img src="assets/images/porfolio-web.png" alt="" className="myapps__img" />
              </div>

                <span
                className="button button--flex button--small button--link services__button"
                onClick={() =>setModalOn_2(true)}
              >
                View More
                <i className="uil uil-arrow-right button__icon"></i>
              </span>
            </div>
          </div>
          


        </div>

{/* belows are for modals */}
                    {/* modal for app 1 */}
                    <div className={`services__modal ${modalStyles_1}`}>
              <div className="services__modal-content">
                <h4 className="services__modal-title">ForeverG</h4>
                <i className="uil uil-times services__modal-close" onClick={() =>setModalOn_1(false)}></i>
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
          
            {/* modal for app 2 */}
            <div className={`services__modal ${modalStyles_2}`}>
              <div className="services__modal-content">
                <h4 className="services__modal-title">Personal Porfolio</h4>
                <i className="uil uil-times services__modal-close" onClick={() =>setModalOn_2(false)}></i>
                <p className="services__modal-des">
                  Made by using ReactJS, Html and plain css, which has features like
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Light and dark theme switches</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Responsive layouts</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Full fleged navigation menu</p>
                  </li>
                </ul>
                <br />
 
              </div>
            </div>

      </section>
    </>
}