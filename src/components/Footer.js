import React from "react";

export default function Footer(){
    return <>
        <footer className="footer">
        <div className="footer__bg">
            <div className="footer__container container grid">
            <div>
                <h1 className="footer__title">Bijian</h1>
                <span className="footer__subtitle">Full stack developer</span>
            </div>

            <ul className="footer__links">
                <li>
                <a href="#services" className="footer__link">Apps</a>
                </li>
                <li>
                <a href="#portfolio" className="footer__link">Games</a>
                </li>
                <li>
                <a href="#contact" className="footer__link">Contactme</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a
                href="https://www.facebook.com/profile.php?id=100004587423186"
                target="_blank"
                className="footer__social"
                >
                <i className="uil uil-facebook-f"></i>
                </a>

                <a
                href="https://www.instagram.com/bijianwu/"
                target="_blank"
                className="footer__social"
                >
                <i className="uil uil-instagram"></i>
                </a>

                <a
                href="https://twitter.com/BijianW"
                target="_blank"
                className="footer__social"
                >
                <i className="uil uil-twitter-alt"></i>
                </a>
            </div>
            </div>

            <p className="footer__copy">&#169; WBJ Games. All right reserved</p>
        </div>
        </footer>
        <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    </>
}