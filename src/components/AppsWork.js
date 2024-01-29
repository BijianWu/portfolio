import React, { useState } from "react";

export default function AppsWork(){
  const[modalOn_1, setModalOn_1] = useState(false);
  const modalStyles_1 = modalOn_1 ? "active-modal" : "";

  const[modalOn_2, setModalOn_2] = useState(false);
  const modalStyles_2 = modalOn_2 ? "active-modal" : "";

  const[modalOn_3, setModalOn_3] = useState(false);
  const modalStyles_3 = modalOn_3 ? "active-modal" : "";

  const bodyCannotScrollCheck = (isModalOn) => {
    if(isModalOn){
      if(!document.body.classList.contains("cannotScroll")){
        document.body.classList.add("cannotScroll");
      } 
    } else{
      document.body.classList.remove("cannotScroll");
    }
  }

  const wrappedToggleModal_1 = () => {
    setModalOn_1(prev => {
      const opposite =!prev;
      bodyCannotScrollCheck(opposite);
      return opposite;
    })
  }

  const wrappedToggleModal_2 = () => {
    setModalOn_2(prev => {
      const opposite =!prev;
      bodyCannotScrollCheck(opposite);
      return opposite;
    })
  }

  const wrappedToggleModal_3 = () => {
    setModalOn_3(prev => {
      const opposite =!prev;
      bodyCannotScrollCheck(opposite);
      return opposite;
    })
  }

    return <>

      <section className="services section" id="services">
        <h2 className="section__title">Apps</h2>
        <span className="section__subtitle">What i have created</span>

        <div className="services__container container myapps__img_container">
          {/* <!--====== App 1=======--> */}
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

              <div className="services__button__parrent">
                <span
                  className="button button--flex button--small button--link services__button"
                  onClick={wrappedToggleModal_1}
                >
                  View More
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>

            </div>
          </div>



          {/* <!--====== App 2=======--> */}
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
              <div className="services__button__parrent">
                <span
                  className="button button--flex button--small button--link services__button"
                  onClick={wrappedToggleModal_2}
                >
                  View More
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>

            </div>
          </div>

          {/* <!--====== App 3=======--> */}
          <div className="services__content">
            <div className=" ">

              <h3 className="services__title">
              <span className="uil uil-web-grid services__icon"></span>
                Blog  - 
                <i className="testimonial__client">Frontend</i>
                
              </h3>
              <div className="">
                <img src="assets/images/blog.png" alt="" className="myapps__img" />
              </div>
              <div className="services__button__parrent">
                <span
                  className="button button--flex button--small button--link services__button"
                  onClick={wrappedToggleModal_3}
                >
                  View More
                  <i className="uil uil-arrow-right button__icon"></i>
                </span>
              </div>

            </div>
          </div>
          


        </div>

            {/* belows are for modals */}
            {/* modal for app 1 */}
            <div className={`services__modal ${modalStyles_1}`}>
              <div className="hidden-clickable"  onClick={wrappedToggleModal_1}></div>
              <div className="services__modal-content">
                <h4 className="services__modal-title">ForeverG</h4>
   
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
              <div className="hidden-clickable"  onClick={wrappedToggleModal_2}></div>
              <div className="services__modal-content">
                <h4 className="services__modal-title">Personal Porfolio</h4>
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

              {/* modal for app 3 */}
              <div className={`services__modal ${modalStyles_3}`}>
              <div className="hidden-clickable"  onClick={wrappedToggleModal_3}></div>
              <div className="services__modal-content">
                <h4 className="services__modal-title">Blog</h4>
   
                <p className="services__modal-des">
                  Made by using ReactJS, and styled using Material UI (still in progress)
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>full working site menu</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>clean material design</p>
                  </li>
                </ul>
                <br />
                <a
                  href="https://bijianwu.github.io/blog/"
                  target="_blank"
                  className="button button--flex button--small button--link"
                >
                  Link to the web app I created
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

      </section>
    </>
}