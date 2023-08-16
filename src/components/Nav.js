import React, { useRef } from "react";

export default function Nav(){
    const themeButton = useRef();
    const navMenu = useRef();
    const darkTheme = "dark-theme";
    const iconTheme = "uil-sun";    
    const toggleTheme = () => {
        document.body.classList.toggle(darkTheme);
        themeButton.current.classList.toggle(iconTheme);
    }

    const toggleMenu = () => {
        console.log("toggleMenu clicked")
        if (!navMenu.current.classList.contains("show-menu")) {
            navMenu.current.classList.add("show-menu");
        } else {    
            navMenu.current.classList.remove("show-menu");
        }

    }
    return <>
        <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">Bijian</a>

            <div className="nav__menu" id="nav-menu" ref={navMenu}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                    <a href="#home" className="nav__link active-link">
                        <i className="uil uil-estate nav__icon"></i> Home
                    </a>
                    </li>
                    <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <i className="uil uil-user nav__icon"></i> About
                    </a>
                    </li>
                    <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i> Skills
                    </a>
                    </li>
                    <li className="nav__item">
                    <a href="#services" className="nav__link">
                        <i className="uil uil-briefcase-alt nav__icon"></i> Apps
                    </a>
                    </li>
                    <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                        <i className="uil uil-scenery nav__icon"></i> Games
                    </a>
                    </li>
                    <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <i className="uil uil-message nav__icon"></i> Contactme
                    </a>
                    </li>
                </ul>
                <i className="uil uil-times nav__close" id="nav-close" onClick={() =>toggleMenu()}></i>
            </div>

            <div className="nav__btns">
                <i className="uil uil-moon change-theme" id="theme-button" ref={themeButton} onClick={() =>toggleTheme()} ></i>

                <div className="nav__toggle" id="nav-toggle" onClick={() =>toggleMenu()}>
                    <i className="uil uil-apps"></i>
                </div>
            </div>
        </nav>
        </header>
    </>
}