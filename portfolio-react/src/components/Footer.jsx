import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return(
        <footer className='footer'>
                <a href='https://github.com/raythomass' className='foot-items'>
                    <FontAwesomeIcon icon={faSquareGithub} className='fa-2x icon-color-footer' />
                </a>
                <a href='https://www.linkedin.com/in/ray-thomas-6b5510163/' className='foot-items'>
                    <FontAwesomeIcon icon={faLinkedin} className='fa-2x icon-color-footer' />
                </a>
                <a href='rthomas5678@gmail.com' className='foot-items'>
                    <FontAwesomeIcon icon={faEnvelope} className='fa-2x icon-color-footer' />
                </a>
        </footer>
    )
}

export default Footer;