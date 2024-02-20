import PDFComp from "../PDFComp";

function Resume() {
    return(
        <resume>
            <section className="resume">
                <h1 className="resume-title">Resume</h1>
                <div className="d-flex justify-content-center">
                    <PDFComp/>
                </div>
            </section>
        </resume>
    )
}

export default Resume;