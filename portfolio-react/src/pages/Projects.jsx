function Projects() {
    return(
        <projects>
            <section className="projects">
                <h1 className="project-title">Projects</h1>

                <section className="project-cards">
                    <section className=" project-ind col-4">
                        <div className="col-12">
                            <img className="project-image" src="/streaming-app.jpg"></img>
                        </div>
                        <div className="project-details col-12">
                            <h3 className="project-title">Streaming App</h3>
                            <p>Browse trending Movies and TV Shows, as well as search from a vast database of film and television to stream.
                            </p>
                        </div>
                        <div className="btns">
                                <a className="project-link" href="https://github.com/raythomass/streaming-app">GitHub</a>
                                <a className="project-link" href="https://raysstreamingapp.netlify.app/">Deployed App</a>
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
                                <a className="project-link" href="https://github.com/raythomass/weather-app">GitHub</a>
                                <a className="project-link" href="https://raysweather.netlify.app/">Deployed App</a>
                        </div>
                    </section>

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
                </section>

                <section className="project-cards">
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
                            <img className="project-image" src="/password-generator.jpg"></img>
                        </div>
                        <div className="project-details col-12">
                            <h3 className="project-title">Password Generator</h3>
                            <p>Users in need of a password can simply answer some questions that determine
                            length, characters, etc and will be given a password to their specification.
                            </p>
                        </div>
                        <div className="btns">
                                <a className="project-link" href="https://github.com/raythomass/password-generator">GitHub</a>
                                <a className="project-link" href="https://raythomass.github.io/password-generator/">Deployed App</a>
                        </div>
                    </section>

                    <section className=" project-ind col-4">
                        <div className="col-12">
                            <img className="project-image" src="/budget-tracker.jpg"></img>
                        </div>
                        <div className="project-details col-12">
                            <h3 className="project-title">Budget Tracker</h3>
                            <p>(Current Project)</p>
                            <p>This MERN stack application will allow users to create an account, log in, and track theri expenses and income with 
                                visual aids from ChartJS
                            </p>
                        </div>
                        <div className="btns">
                                <a className="project-link" href="https://github.com/raythomass/budget-tracker">GitHub</a>
                        </div>
                    </section>

                </section>

            </section>
        </projects>
    )
}

export default Projects;