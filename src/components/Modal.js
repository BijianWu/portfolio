import React, { useContext, useState } from "react";
import AppContext from "../AppContext";

export default function Modal({title, children}){
    const {isModalOn, toggleModal} = useContext(AppContext);

    const style = isModalOn ? "active-modal" : "";
    return <>
        <div className={`services__modal ${style}`}>
            <div className="services__modal-content">
            <h4 className="services__modal-title">{title}</h4>
            <i className="uil uil-times services__modal-close" onClick={() =>toggleModal()}></i>

                {children}
            </div>
        </div>
    </>
}