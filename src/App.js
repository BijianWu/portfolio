import React from "react";

import "./assets/css/styles.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
export default function App(){
    return <>
        <Nav />
        <Home />
        <AboutMe />
        <Skills />
        <Footer />
    </>
}