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
                    <img className="profile-pic" src="../src/images/Ray_Profile.jpg"></img>
                </section>
            </section>
        </header>
        <skills className="skills">
            <section className="skillone">
                <h4 className="skill-title">Languages</h4>
                <section className="skillonelist">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                </section>
            </section>
            <section className="skilltwo">
                <h4 className="skill-title">Skills</h4>
                <section className="skillonelist">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                </section>
            </section>
            <section className="skillthree">
                <h4 className="skill-title">People Skills</h4>
                <section className="skillonelist">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                </section>
            </section>
        </skills>
        </>
    )
}

export default Home;