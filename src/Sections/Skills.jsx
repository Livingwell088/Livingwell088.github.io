import "../Styles/fonts.css"
import "../Styles/skills.css"
import "../Styles/glassCard.css"
import {Card} from "react-bootstrap";
import {TbSchool} from "react-icons/tb";

export default function Skills() {

    return <>
        <section id="Skills" className="teko">
            <div className="skills-div">
                <h3 style={{
                    color: "var(--text-primary)"
                }}>Skills and Technologies</h3>
                <div className="grid-3" style={{
                    display: "grid",
                    gap: "18px",
                    gridTemplateColumns: "1fr 1fr 1fr"
                }}>
                    <Card className="glass-card">
                        <Card.Title>

                            <h3><TbSchool />Languages</h3>
                        </Card.Title>


                        <Card.Body className="card-body">
                            Programming languages used to build applications
                        </Card.Body>

                        <Card.Body>
                            <div className="grid-3" style={{
                                display: "grid",
                                gap: "18px",
                                gridTemplateColumns: "1fr 1fr 1fr"
                            }}>
                                <span className="skill-pill">Java</span>
                                <span className="skill-pill">Python</span>
                                <span className="skill-pill">SQL</span>
                                <span className="skill-pill">JavaScript</span>
                                <span className="skill-pill">HTML/CSS</span>

                                {/*<<span className="skill-pill">>Java</span>*/}
                                {/*<<span className="skill-pill">>Python</span>*/}
                                {/*<<span className="skill-pill">>SQL</span>*/}
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="glass-card">
                        <Card.Title>
                            <h3><TbSchool />Frontend</h3>
                        </Card.Title>


                        <Card.Body className="card-body">
                            Technologies used to build responsive, interactive and intuitive UIs
                        </Card.Body>

                        <Card.Body>
                            <div className="grid-3" style={{
                                display: "grid",
                                gap: "18px",
                                gridTemplateColumns: "1fr 1fr 1fr"
                            }}>
                                <span className="skill-pill">React</span>
                                <span className="skill-pill">Bootstrap</span>
                                <span className="skill-pill">Responsive Design</span>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="glass-card">
                        <Card.Title>
                            <h3><TbSchool />Backend</h3>
                        </Card.Title>


                        <Card.Body className="card-body">
                            Technologies used for backend frameworks and tools for building scalable systems.
                        </Card.Body>

                        <Card.Body>
                            <div className="grid-3" style={{
                                display: "grid",
                                gap: "18px",
                                gridTemplateColumns: "1fr 1fr 1fr"
                            }}>
                                <span className="skill-pill">Spring / Spring Boot</span>
                                <span className="skill-pill">REST APIS</span>
                                <span className="skill-pill">Gradle / Maven</span>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="glass-card">
                        <Card.Title>
                            <h3><TbSchool />AI</h3>
                        </Card.Title>


                        <Card.Body className="card-body">
                            AI tools and frameworks
                        </Card.Body>

                        <Card.Body>
                            <div className="grid-3" style={{
                                display: "grid",
                                gap: "18px",
                                gridTemplateColumns: "1fr 1fr 1fr"
                            }}>
                                <span className="skill-pill">OpenAI API</span>
                                <span className="skill-pill">LangChain</span>
                                <span className="skill-pill">LangGraph</span>
                                <span className="skill-pill">Tools</span>
                                <span className="skill-pill">Agents</span>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="glass-card">
                        <Card.Title>
                            <h3><TbSchool />Databases</h3>
                        </Card.Title>


                        <Card.Body className="card-body">
                            Databases, data services, and data storages
                        </Card.Body>

                        <Card.Body>
                            <div className="grid-3" style={{
                                display: "grid",
                                gap: "18px",
                                gridTemplateColumns: "1fr 1fr 1fr"
                            }}>
                                <span className="skill-pill">MySQL</span>
                                <span className="skill-pill">PostgreSQL</span>
                                <span className="skill-pill">MongoDB</span>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="glass-card">
                        <Card.Title>
                            <h3><TbSchool />Tools & Deployment</h3>
                        </Card.Title>


                        <Card.Body className="card-body">
                            Tools and platforms for version control, deployment, and hosting
                        </Card.Body>

                        <Card.Body>
                            <div className="grid-3" style={{
                                display: "grid",
                                gap: "18px",
                                gridTemplateColumns: "1fr 1fr 1fr"
                            }}>
                                <span className="skill-pill">Git</span>
                                <span className="skill-pill">Github</span>
                                <span className="skill-pill">Docker</span>
                                <span className="skill-pill">Render</span>
                                <span className="skill-pill">Vercel</span>
                                <span className="skill-pill">Supabase</span>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </section>
    </>
}