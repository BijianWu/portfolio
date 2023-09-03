import React from "react";

export default function ContactMe(){
    return <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <i className="uil uil-envelope contact__icon"></i>

              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">bijian1@hotmail.com</span>
              </div>
            </div>

          </div>

          <form
            action="https://formspree.io/f/xknkbljl"
            method="POST"
            className="contact__form grid"
            id="my_contact_form"
          >
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="" className="contact__label">Name</label>
                <input
                  type="text"
                  className="contact__input"
                  name="name"
                  required
                />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">Email</label>
                <input
                  type="email"
                  className="contact__input"
                  name="replyto"
                  required
                />
              </div>
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">Title</label>
              <input
                type="text"
                className="contact__input"
                name="message_title"
                required
              />
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">Message</label>
              <textarea
                name="message"
                id=""
                cols="0"
                rows="7"
                className="contact__input"
                required
              ></textarea>
            </div>

            <div>
              <button type="submit" className="button button--flex button--sumbit">
                Send<i className="uil uil-envelope-send button__icon"></i>
              </button>

            </div>
            <div id="my-form-status"></div>
          </form>
        </div>
      </section>
    </>
}