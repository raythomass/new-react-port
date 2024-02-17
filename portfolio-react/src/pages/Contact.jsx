import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <contact>
      <section className="contact">
        <h1 className="contact-title">Contact</h1>
        <section className="contact-line">
                <FontAwesomeIcon icon={faSquareGithub} className='fa-3x' />
                <div>
                  <a href='https://github.com/raythomass'>GitHub</a>
                </div>
        </section>
        <section className="contact-line">
                <FontAwesomeIcon icon={faLinkedin} className='fa-3x' />
                <div>
                  <a href='https://github.com/raythomass'>LinkedIn</a>
                </div>
        </section>
        <section className="contact-line">
                <FontAwesomeIcon icon={faEnvelope} className='fa-3x' />
                <div>
                  <a href='https://github.com/raythomass'>Email Me</a>
                </div>
        </section>
      </section>
    </contact>
  )
}

export default Contact;