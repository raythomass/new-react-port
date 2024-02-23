function Projects() {
    return(
        <projects>
            <section className="projects">
                <h1 className="project-title">Projects</h1>

                <section className="project-cards">
                    <section className=" project-ind col-4">
                        <div className="col-12">
                            <img className="project-image" src="/football-database.jpg"></img>
                        </div>
                        <div className="project-details col-12">
                            <h3 className="project-title">Football Database</h3>
                            <p>This application is designed to use Sports API to fetch and display information about 
                                any football player from any team. Also, Ticketmaster API is used to display tickets to
                                 upcoming games and will direct the user to the Ticketmaster site.
                            </p>
                        </div>
                        <div className="btns">
                                <a className="project-link" href="https://github.com/raythomass/project-one-team4">GitHub</a>
                                <a className="project-link" href="https://raythomass.github.io/project-one-team4/">Deployed App</a>
                        </div>
                    </section>

                    <section className=" project-ind col-4">
                        <div className="col-12">
                            <img className="project-image" src="/text-editor.jpg"></img>
                        </div>
                        <div className="project-details col-12">
                            <h3 className="project-title">Text Editor</h3>
                            <p>This project was created to utilize Progressive Web Application technology to create
                                a text editor used for programming.
                            </p>
                        </div>
                        <div className="btns">
                                <a className="project-link" href="https://github.com/raythomass/text-editor-pwa">GitHub</a>
                                <a className="project-link" href="https://text-editor-pwa-u1j4.onrender.com/">Deployed App</a>
                        </div>
                    </section>

                    <section className=" project-ind col-4">
                        <div className="col-12">
                            <img className="project-image" src="/weather-forecast.jpg"></img>
                        </div>
                        <div className="project-details col-12">
                            <h3 className="project-title">Weather Forecast</h3>
                            <p>The weather forecast app prompts a user to search a city. Upon entering a city, the weather forecast app will populate
                                the page with the forecast details of the city the user has searched.
                            </p>
                        </div>
                        <div className="btns">
                                <a className="project-link" href="https://github.com/raythomass/weather-forecast">GitHub</a>
                                <a className="project-link" href="https://raythomass.github.io/weather-forecast/">Deployed App</a>
                        </div>
                    </section>
                </section>

                <section className="project-cards">
                    <section className=" project-ind col-4">
                        <div className="col-12">
                            <img className="project-image" src="/work-scheduler.jpg"></img>
                        </div>
                        <div className="project-details col-12">
                            <h3 className="project-title">Daily Scheduler</h3>
                            <p>This application allows the user to set a schedule for their workday
                                 by adding notes and reminders for their daily tasks corresponding to the time they take place.
                            </p>
                        </div>
                        <div className="btns">
                                <a className="project-link" href="https://github.com/raythomass/daily-planner">GitHub</a>
                                <a className="project-link" href="https://raythomass.github.io/daily-planner/">Deployed App</a>
                        </div>
                    </section>

                    <section className=" project-ind col-4">
                        <div className="col-12">
                            <img className="project-image" src="/password-generator.jpg"></img>
                        </div>
                        <div className="project-details col-12">
                            <h3 className="project-title">Password Generator</h3>
                            <p>This password generator is used to give a random password containing criteria 
                                given by the user. If a random password is needed for any reason this password generator 
                                will be useful in creating a password for the user.
                            </p>
                        </div>
                        <div className="btns">
                                <a className="project-link" href="https://github.com/raythomass/password-generator">GitHub</a>
                                <a className="project-link" href="https://raythomass.github.io/password-generator/">Deployed App</a>
                        </div>
                    </section>

                    <section className=" project-ind col-4">
                        <div className="col-12">
                            <img className="project-image" src="/coding-quiz.jpg"></img>
                        </div>
                        <div className="project-details col-12">
                            <h3 className="project-title">Coding Quiz</h3>
                            <p>This Coding Quiz tests the user's knowledge of coding with a simple quiz. 
                                This quiz gives multiple choices to each question and then logs the score as 
                                the amount of time left in the quiz when it was finished.
                            </p>
                        </div>
                        <div className="btns">
                                <a className="project-link" href="https://github.com/raythomass/coding-quiz">GitHub</a>
                                <a className="project-link" href="https://raythomass.github.io/coding-quiz/">Deployed App</a>
                        </div>
                    </section>
                </section>

            </section>
        </projects>
    )
}

export default Projects;