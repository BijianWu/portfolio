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
import GameModal from "./components/GameModal1";

export default function App(){
    const [isModalOn, setIsModalOn] = useState(true);

    const [modalTitle, setModalTitle] = useState("Space Shooter Game");

    const [modalData, setModalData] = useState();

    const toggleModal = () => {
        setIsModalOn(previous => !previous);
    }

    return <>
        <AppContext.Provider value={{isModalOn, toggleModal, modalTitle, modalData}}>
            <Nav />
            <Home />
            <AboutMe />
            <Skills />
            <Qualification />
            <AppsWork />
            <GamesWork />
            <ContactMe />

            <GameModal />
            <Footer />
        </AppContext.Provider>

    </>
}