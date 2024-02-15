function About() {
    return(
        <about>
            <section className="about">
                <h1 className="about-title">About Me</h1>
                <section className="col-7">
                    <p>My name is Ray Thomas and I am a 24 year old Full-Stack Web-Developer from Phoenix, AZ. 
                        I graduated from Arizona State University in February 2024 with a certificate of completion from the Full-Stack Web Development Bootcamp. 
                        I also graduated from Grand Canyon University in 2021 with a Bachelor's Degree in Advertising and Graphic Design. 
                        I am excited and motivated to pair my knowledge of multiple coding languages, frameworks, and technologies with my background in graphic and web design
                         to create business solutions and solve both front-end and back-end problems. Having knowledge of both design and development, I have a wide variety of skills
                          that are useful in developing web applications and websites.</p>
                </section>
            
                <section className="about-section">
                    <h2 className="about-title">Education</h2>
                    <section className="education-cards">
                        <section className="education-list col-6">
                            <div className="">
                                <p className="ed-content-title">Certificate of Completion, Full-Stack Web Development</p>
                                <p>Arizona State University</p>
                                <ul>
                                    <li className="ed-content-desc">Developed and deployed web applications using a variety of
                                    industry standard programming langauges technologies</li>
                                    <li className="ed-content-desc">Collaborated on projects to understand
                                    project management within a development team</li>
                                </ul>
                            </div>
                        </section>
                        <section className="education-list col-6">
                            <div className="">
                                <p className="ed-content-title">Bachelor's of Fine Art in Advertising and
                                Graphic Design</p>
                                <p>Grand Canyon University</p>
                                <ul>
                                    <li className="ed-content-desc">Designed and currated advertising packages using multiple design mediums</li>
                                    <li className="ed-content-desc">Designed web applications and websites using industry leading design software</li>
                                </ul>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </about>
    )
}

export default About;