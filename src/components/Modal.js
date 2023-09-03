import React, { useContext, useState } from "react";
import AppContext from "../AppContext";

export default function Modal({title, data}){
    const {isModalOn, toggleModal, modalTitle, modalData} = useContext(AppContext);

    const style = isModalOn ? "active-modal" : "";
    return <>
        <div className={`services__modal ${style}`}>
            <div className="services__modal-content">
            <h4 className="services__modal-title">{modalTitle}</h4>
            <i className="uil uil-times services__modal-close" onClick={() =>toggleModal()}></i>

                {modalData}
            </div>
        </div>
    </>
}