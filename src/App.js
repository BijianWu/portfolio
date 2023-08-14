import React from "react";

import "./assets/css/styles.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
export default function App(){
    return <>
        <Nav />
        <Home />
        <Footer />
    </>
}