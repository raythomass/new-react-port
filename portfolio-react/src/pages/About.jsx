function About() {
    return(
        <about>
            <section className="about">
                {/* <h1 className="about-title">About Me</h1> */}
                <section className="col-8 about-section">
                    <h2 className="about-title">About Me</h2>
                    <p>My name is Ray Thomas and I am a 24 year old Full-Stack Web-Developer from Phoenix, AZ. 
                        I graduated from Arizona State University in February 2024 with a certificate of completion from the Full-Stack Web Development Bootcamp. 
                        I also graduated from Grand Canyon University in 2021 with a Bachelor's Degree in Advertising and Graphic Design. 
                        I am excited and motivated to pair my knowledge of multiple coding languages, frameworks, and technologies with my background in graphic and web design
                         to create business solutions and solve both front-end and back-end problems. Having knowledge of both design and development, I have a wide variety of skills
                          that are useful in developing web applications and websites.</p>
                </section>
            
                <section className="col-8 about-section">
                    <h2 className="about-title">Education</h2>
                    <section className="about-card">
                        <section className="education-list col-4">
                            <p>08/2023 - 02/2024</p>
                            <p>Full-Stack Web Development</p>
                        </section>
                    </section>
                </section>
            </section>
        </about>
    )
}

export default About;