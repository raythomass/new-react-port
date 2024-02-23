import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5, faCss3Alt, faJs, faReact} from '@fortawesome/free-brands-svg-icons'

function Home() {
    return(
        <>
        <header className="">
            <section className="header">
                <section className="header-tabs">
                    <p className="h5" id="header-text">Hi, my name is</p>
                    <p className="" id="header-title">Ray Thomas</p>
                    <p className="h5" id="header-text">I'm a Full-Stack Web Developer from Phoenix, AZ</p>
                </section>
                <section>
                    <img className="profile-pic" src="../public/Ray_Profile.jpg"></img>
                </section>
            </section>
        </header>
        <skills>
            <section className="skill-card">
                <h3 className="skill-title">Programming</h3>
                <section className="skilllist">
                    <section className='skill-ind'> 
                        <p className='skill-icon'><FontAwesomeIcon icon={faHtml5} className='fa-2x'/></p>
                        <p>HTML</p>
                    </section>
                    <section className='skill-ind'> 
                        <p className='skill-icon'><FontAwesomeIcon icon={faCss3Alt} className='fa-2x'/></p>
                        <p>CSS</p>
                    </section>
                    <section className='skill-ind'> 
                        <p className='skill-icon'><FontAwesomeIcon icon={faJs} className='fa-2x'/></p>
                        <p>JavaScript</p>
                    </section>
                    <section className='skill-ind'> 
                        <p className='skill-icon'><FontAwesomeIcon icon={faReact} className='fa-2x' /></p>
                        <p>React</p>
                    </section>
                </section>
            </section>
            <section className="skill-card">
                <h3 className="skill-title">Technical Skills</h3>
                <section className="skilllist">
                    <p>Node.JS</p>
                    <p>Express.JS</p>
                    <p>NPM</p>
                    <p>CRUD Methods</p>
                    <p>Model View Controller</p>
                    <p>MySQL</p>
                    <p>MongoDB</p>
                    <p>Object-Oriented Programming</p>
                    <p>Object-Relational Mapping</p>
                    <p>Progressive Web Apps</p>
                    <p>MERN</p>
                    <p>Bootstrap</p>
                    <p>GraphQL</p>
                    <p>Apollo</p>
                </section>
            </section>
            <section className="skill-card">
                <h3 className="skill-title">Personal Skills</h3>
                <section className="skilllist">
                    <p>Team Communication</p>
                    <p>Leadership</p>
                    <p>Adaptability</p>
                    <p>Critical Thinking</p>
                    <p>Creativity</p>
                    <p>Project Management</p>
                </section>
            </section>
        </skills>
        </>
    )
}

export default Home;