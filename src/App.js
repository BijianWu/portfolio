import React, { useState } from "react";

import "./assets/css/styles.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import AppsWork from "./components/AppsWork";
import GamesWork from "./components/GamesWork";
import ContactMe from "./components/ContactMe";
import Modal from "./components/Modal";
import AppContext from "./AppContext";
export default function App(){
    const [isModalOn, setIsModalOn] = useState(true);

    const toggleModal = () => {
        setIsModalOn(previous => !previous);
    }

    return <>
        <AppContext.Provider value={{isModalOn, toggleModal}}>
            <Nav />
            <Home />
            <AboutMe />
            <Skills />
            <Qualification />
            <AppsWork />
            <GamesWork />
            <ContactMe />
            <Modal />
            <Footer />
        </AppContext.Provider>

    </>
}