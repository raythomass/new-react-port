import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <contact>
      <section className="contact">
        <h1 className="contact-title">Contact</h1>
        <section className="line-container">
          <a href='https://github.com/raythomass' className="contact-line">
                <FontAwesomeIcon icon={faSquareGithub} className='fa-3x icon-contact' />
                <p className="p-tag"> GitHub </p>
          </a>
          <a href='https://www.linkedin.com/in/ray-thomas-6b5510163/' className="contact-line">
                <FontAwesomeIcon icon={faLinkedin} className='fa-3x icon-contact' />
                <p className="p-tag"> Linked In </p>
          </a>
          <a href='mailto:rthomas.developer@gmail.com' className="contact-line">
                <FontAwesomeIcon icon={faEnvelope} className='fa-2x icon-contact' />
                <p className="p-tag"> Email Me </p>
          </a>
          {/* <a href="mailto:rthomas.developer@gmail.com" className="contact-line">
                <FontAwesomeIcon icon={faPhone} className='fa-2x icon-contact' />
                <p className="p-tag"> (817) 368-3371 </p>
          </a> */}
        </section>
      </section>
    </contact>
  )
}

export default Contact;